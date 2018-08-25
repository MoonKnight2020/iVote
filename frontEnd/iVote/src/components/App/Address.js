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

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            line1: '',
            line2: '',
            city: '',
            USState: '',
            zip: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={require('../../Images/icon.png')} style={styles.signupLogo} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(line1) => this.setState({ line1 })}
                        placeholder='Address line 1'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(line2) => this.setState({ line2 })}
                        placeholder='Address line 2'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(city) => this.setState({ city })}
                        placeholder='City'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(USState) => this.setState({ USState })}
                        placeholder='State'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(zip) => this.setState({ zip })}
                        placeholder='Zip code'
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        style={styles.addressBtn}
                        onPress={this.validateInputs}>
                        <Text style={styles.btnText}>Save Address</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    validateInputs = () => {
        if (this.state.line1 == '') {
            alert('Address Line 1 can not be Empty');
        } else if (this.state.city == '') {
            alert('City can not be Empty');
        } else if (this.state.USState == '') {
            alert('State can not be Empty');
        } else if (this.state.zip == '') {
            alert('Zip Code can not be empty');
        } else {
            this.saveAddress();
        }
    }

    saveAddress = () => {
        //alert('btn works');
        var parm = this.props.navigation.state.params.pass;
        alert(JSON.stringify(parm[0].firstName));
        fetch('http://10.1.10.42:8080/voter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: parm[0].firstName,
                lastName: parm[0].lastName,
                emailAddress: parm[0].emailAddress,
                streetAddress: this.state.line1,
                streetAddress2: this.state.line2,
                city: this.state.city,
                state: this.state.USState,
                zipCode: this.state.zip
            })
        })
            .then((response) => {
                var pass = [];
                pass.push({
                    address: this.state.line1 + ' ' +
                        this.state.line2 + ' ' +
                        this.state.city + ' ' +
                        this.state.state + ' ' +
                        this.state.zip
                })
                if (response.status == '201') {
                    this.props.navigation.navigate('MainPage',{pass});
                } else {
                    alert(response.status);
                }
            })
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
    addressBtn: {
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
