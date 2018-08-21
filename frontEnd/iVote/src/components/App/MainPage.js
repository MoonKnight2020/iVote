import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    componentDidMount() {
        this.login();
    }

    login = () => {
        fetch('https://content.googleapis.com/civicinfo/v2/voterinfo?address=120%20W%201st%20St%2C%20Casper%2C%20WY%2082601&officialOnly=true&alt=json&key=AIzaSyAAAvpCSENujGpZvDHFtDbsP5G0TP_hDFY',{
            method:'GET'
        })
        .then((response) => response.json())
        .then((res) => {
            var contestArr = [];
            for(i=0;i<res.contests.length;i++){
                contestArr.push({
                    electionName : res.name,
                    contestType : res.contests[i].type,
                    contestPrimaryParty : res.contests[i].primaryParty,
                    contestBallotTitle : res.contests[i].ballotTitle
                })
            }
            
            alert(JSON.stringify(contestArr));
        }).done();
    }

    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={require('../../Images/icon.png')} style={styles.mainPageLogo} />
                    <Text> List of election goes here </Text>
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 40,
      paddingRight: 40
    },
    mainPageLogo: {
        width: 40,
        height: 40,
        marginBottom: 20
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10

    },
    loginBtn: {
        alignSelf: 'stretch',
        backgroundColor: '#054d96',
        padding: 20,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 40
    },
    signupBtn: {
        alignSelf: 'stretch',
        backgroundColor: '#e0243a',
        padding: 20,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 40
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
