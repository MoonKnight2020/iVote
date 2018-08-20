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
