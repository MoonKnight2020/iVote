import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Elections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            key: 'AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY'
        }
    }

    componentDidMount() {
        var url = 'https://content.googleapis.com/civicinfo/v2/voterinfo?address=' +
            encodeURIComponent(this.props.navigation.state.params.pass[0].address) +
            '&officialOnly=true&alt=json&key=' +
            encodeURIComponent(this.state.key) +
            '&electionId=2000';
        //alert(url);
        fetch(url, {
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=120%20W%201st%20St%2C%20Casper%2C%20WY%2082601&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=${encodeURIComponent(this.state.address)}&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((res) => {
                // if (!res || res.error) {
                //     alert('Error while trying to fetch upcoming elections');
                //     return;
                // }
                //alert(JSON.stringify(res));
                var contestArr = [];
                if (res.hasOwnProperty('contests')) {
                    for (i = 0; i < res.contests.length; i++) {
                        var candidateArr = [];
                        if (res.contests[i].hasOwnProperty('candidates')) {
                            for (j = 0; j < res.contests[i].candidates.length; j++) {
                                candidateArr.push({
                                    name: res.contests[i].candidates[j].name,
                                    party: res.contests[i].candidates[j].party
                                })
                            }
                        }
                        contestArr.push({
                            electionName: res.election.name,
                            electionDay: res.election.electionDay,
                            contestType: res.contests[i].type,
                            contestPrimaryParty: res.contests[i].primaryParty,
                            contestBallotTitle: res.contests[i].ballotTitle,
                            candidates: candidateArr
                        })
                    }
                } else {
                    alert('No Upcoming Elections Found / Data not uploaded by State');
                    this.props.navigation.navigate('MainPage');
                }


                this.setState({
                    isLoading: false,
                    dataSource: contestArr
                })

                //alert(JSON.stringify(contestArr));
            }).catch((error) => {
                alert(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View stlye={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            var contests = this.state.dataSource.map((val, key) => {

                var candidateList = val.candidates.map((cval, ckey) => {
                    return (
                        <View key={ckey}>
                            <Text style={styles.candidates}>{cval.name} - {cval.party}</Text>
                        </View>
                    )
                })
                return (
                    <View key={key} style={styles.item}>
                        <Text style={styles.electionName}>{val.electionName}</Text>
                        <Text style={styles.ballotTitle}>{val.contestBallotTitle}</Text>

                        <View ckey={key} >
                            <Text style={styles.candidates}>CANDIDATES</Text>
                            {candidateList}
                        </View>
                        <Text style={styles.contestType}>{val.contestType} - {val.contestPrimaryParty}   |   {val.electionDay}</Text>
                    </View>
                )
            });
            return (
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.scrollview}>

                    {contests}
                </ScrollView>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    scrollview: {
        flexGrow: 1,
        paddingTop: 20
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        marginTop: 5,
        backgroundColor: '#E6E6FA',
        borderRadius: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#71afed',
        borderRightWidth: 5,
        borderRightColor: '#f77483',
        borderTopWidth: 5,
        borderTopColor: '#71afed',
        borderBottomWidth: 5,
        borderBottomColor: '#f77483'

    },
    ballotTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: 15,
        paddingBottom: 15,
        padding: 5,
        color: '#555'
    }, electionName: {
        textAlign: 'left',
        fontWeight: 'bold',
        backgroundColor: '#71afed',
        color: 'white',
        padding: 5
    }, contestType: {
        textAlign: 'right',
        fontWeight: 'bold',
        backgroundColor: '#f77483',
        color: 'white',
        padding: 5
    },
    candidates:{
        color: '#555'
    }
});
