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

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null){
            this.props.navigation.navigate('MainPage');
        }
    }

    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={require('../../Images/icon.png')} style={styles.loginLogo} />
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
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={this.login}>
                        <Text style={styles.btnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={this.signup}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    login = () => {
        //this.props.navigation.navigate('MainPage');
        fetch('http://localhost:8080/voter',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailAddress: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if(res.success === true){
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('MainPage');
            }else{
                alert(res.message);
            }
        }).done();
    }

    signup = () => {
        this.props.navigation.navigate('Signup');
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
    loginLogo: {
        width: 200,
        height: 200,
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
