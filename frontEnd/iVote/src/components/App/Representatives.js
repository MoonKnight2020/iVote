import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Modal,
    TouchableHighlight
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

export default class Representatives extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            key: 'AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY'
        }
    }

    componentDidMount() {
        var url = 'https://www.googleapis.com/civicinfo/v2/representatives?address=' +
            encodeURIComponent(this.props.navigation.state.params.pass[0].address) +
            '&key=' +
            encodeURIComponent(this.state.key);
        //alert(url);
        fetch(url, {
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=120%20W%201st%20St%2C%20Casper%2C%20WY%2082601&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=${encodeURIComponent(this.state.address)}&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            //fetch('https://content.googleapis.com/civicinfo/v2/voterinfo',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((res) => {
                if (!res || res.error) {
                    alert('Error while trying to fetch Representatives');
                    return;
                }
                //alert(JSON.stringify(res));
                var repArr = [];

                //alert(res.offices.length +' '+ res.officials.length);

                for (i = 0; i < res.offices.length; i++) {

                    for (j = 0; j < res.offices[i].officialIndices.length; j++) {

                        var repIndex = res.offices[i].officialIndices[j];

                        var addressArr = [];
                        for (k = 0; k < res.officials[repIndex].address.length; k++) {
                            addressArr.push({
                                locationName: res.officials[repIndex].address[k].locationName,
                                line1: res.officials[repIndex].address[k].line1,
                                line2: res.officials[repIndex].address[k].line2,
                                line3: res.officials[repIndex].address[k].line3,
                                city: res.officials[repIndex].address[k].city,
                                state: res.officials[repIndex].address[k].state,
                                zip: res.officials[repIndex].address[k].zip
                            })
                        }

                        var phoneArr = [];
                        for (k = 0; k < res.officials[repIndex].phones.length; k++) {
                            phoneArr.push({
                                phoneNumber: res.officials[repIndex].phones[k]
                            })
                        }

                        var emailArr = [];
                        if (res.officials[repIndex].hasOwnProperty('emails')) {
                            for (k = 0; k < res.officials[repIndex].emails.length; k++) {
                                emailArr.push({
                                    email: res.officials[repIndex].emails[k]
                                })
                            }
                        }

                        var channelArr = [];
                        if (res.officials[repIndex].hasOwnProperty('channels')) {
                            for (k = 0; k < res.officials[repIndex].channels.length; k++) {
                                channelArr.push({
                                    type: res.officials[repIndex].channels[k].type,
                                    id: res.officials[repIndex].channels[k].id
                                })
                            }
                        }

                        repArr.push({
                            office: res.offices[i].name,
                            name: res.officials[repIndex].name,
                            party: res.officials[repIndex].party,
                            photoUrl: res.officials[repIndex].photoUrl,
                            address: addressArr,
                            phones: phoneArr,
                            channels: channelArr,
                            emails: emailArr
                        })

                    }
                }
                //alert(JSON.stringify(repArr));
                this.setState({
                    isLoading: false,
                    dataSource: repArr
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
                let colors = ['#E6E6FA', '#E6E6FA'];
                return (
                    <View key={key}>
                        <TouchableHighlight
                            style={{
                                backgroundColor: '#fff'
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('RepInfo', { val })
                            }}>
                            <View style={[styles.item, {
                                backgroundColor: colors[key % colors.length]
                            }]}>
                                <Text style={styles.office}>{val.office} </Text>
                                <Text style={styles.repName}>{val.name} </Text>
                                <Text style={styles.contestType}>{val.party} </Text>
                            </View>
                        </TouchableHighlight >
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
        justifyContent: 'center'
        //paddingTop: 100
    },
    scrollview: {
        flexGrow: 1,
        paddingTop: 20
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 5,
        //backgroundColor: '#fff',
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
    repName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        // paddingTop: 15,
        // paddingBottom: 15,
        paddingLeft: 5,
        color: '#222'
    }, office: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 16,
        // backgroundColor: '#71afed',
        color: '#555',
        paddingLeft: 5
    }, contestType: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 14,
        // backgroundColor: '#f77483',
        color: '#666',
        paddingRight: 5
    }, profilePhoto: {
        width: 125,
        height: 125
    }
});
