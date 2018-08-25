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

export default class MainPage extends React.Component {



    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.repBtn}
                        onPress={this.gotoReps}>
                        <Text style={styles.btnText}>My Representatives</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.electionBtn}
                        onPress={this.gotoElections}>
                        <Text style={styles.btnText}>Upcoming Elections</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView >
        )
    }

    gotoReps = () => {
        var pass = this.props.navigation.state.params.pass;
        this.props.navigation.navigate('Representatives', {pass});
    }

    gotoElections = () => {
        var pass = this.props.navigation.state.params.pass;
        this.props.navigation.navigate('Elections',{pass});
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
    repBtn: {
        alignSelf: 'stretch',
        backgroundColor: '#054d96',
        padding: 20,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 40
    },
    electionBtn: {
        alignSelf: 'stretch',
        backgroundColor: '#e0243a',
        padding: 20,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 40
    },btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
