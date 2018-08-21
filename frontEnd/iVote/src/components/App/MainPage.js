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

export default class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            address:'120 West 1st Street Casper WY 82601',
            key:'AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY'
        }
    }

    componentDidMount() {
            var url = 'https://content.googleapis.com/civicinfo/v2/voterinfo?address=' + 
            encodeURIComponent(this.state.address) + 
            '&officialOnly=true&alt=json&key='+ 
            encodeURIComponent(this.state.key);
            alert(url);
            fetch(url,{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=120%20W%201st%20St%2C%20Casper%2C%20WY%2082601&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=${encodeURIComponent(this.state.address)}&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo',{
            method:'GET'
        })
        .then((response) => response.json())
         .then((res) => {
                
            var contestArr = [];
            for(i=0;i<res.contests.length;i++){
                contestArr.push({
                    electionName : res.election.name,
                    contestType : res.contests[i].type,
                    contestPrimaryParty : res.contests[i].primaryParty,
                    contestBallotTitle : res.contests[i].ballotTitle
                })
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

        if(this.state.isLoading){
            return (
                <View stlye={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            var contests = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key} style={styles.item}>
                        <Text>{val.contestBallotTitle}</Text>
                        <Text>{val.electionName}</Text>
                        <Text>{val.contestType}</Text>
                        <Text>{val.contestPrimaryParty}</Text>
                    </View>
                )
            });
            return (
                <ScrollView 
                    style={{flex:1}}
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
      justifyContent: 'center'
    },
    scrollview:{
        flexGrow: 1,
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#777'
    }
});
