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

export default class Signup extends React.Component{

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
                    <Image source={require('../../Images/icon.png')} style={styles.signupLogo} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(firstName) => this.setState({firstName})}
                        placeholder='First Name'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(lastName) => this.setState({lastName})}
                        placeholder='Last Name'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        placeholder='Email'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        placeholder='Password'
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                        placeholder='Confirm Password'
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={this.validateInputs}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    validateInputs = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.firstName == ''){
            alert('First Name can not be Empty');
        }else if(!re.test(String(this.state.email).toLowerCase())){
            alert('Email is Invalid');
        }else if(this.state.password == ''){
            alert('Password can not be Empty');
        }else if(this.state.password !== this.state.confirmPassword){
            alert('Passwords do not Match');
        }else{
            this.signup();
        }
    }

    signup = () => {
        //this.props.navigation.navigate('Address');
        fetch('http://10.1.10.42:8080/voter',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
         .then((response) => {alert(JSON.stringify(response))})
        // .then((response) => response.json())
        // .then((res) => {
        //     if(res.success === true){
        //         this.props.navigation.navigate('Address');
        //     }else{
        //         alert(res.message);
        //     }
        .catch((error) => {
            alert(error);
        });
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
    signupLogo: {
        width: 80,
        height: 80,
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
