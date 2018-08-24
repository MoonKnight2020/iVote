import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class RepInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        //alert(JSON.stringify(this.props.navigation.state.params.val));
    }
    render() {
        var parm = this.props.navigation.state.params.val;

        var addressCard = parm.address.map((aval, akey) => {
            return (
                <View key={akey}>
                    <Text>{aval.locationName}</Text>
                    <Text>{aval.line1}</Text>
                    <Text>{aval.line2}</Text>
                    <Text>{aval.line3}</Text>
                    <Text>{aval.city}, {aval.state} - {aval.zip}</Text>
                </View>
            )
        })

        var phoneCard = parm.phones.map((pval, pkey) => {
            return (
                <View key={pkey}>
                    <Text>{pval.phoneNumber}</Text>
                </View>
            )
        })
        var emailCard = parm.emails.map((val, key) => {
            return (
                <View key={key}>
                    <Text>{val.email}</Text>
                </View>
            )
        })

        var channelCard = parm.channels.map((cval, ckey) => {
            return (
                <View key={ckey}>
                    <Text>{cval.type} - {cval.id}</Text>
                </View>
            )
        })

        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.wrapper}>
                <View style={styles.container} >
                    <View style={styles.profilePicWrap}>
                        <Image source={{ uri: parm.photoUrl }} style={styles.profilePic} />
                    </View>
                    <Text style={styles.name}>{parm.name.toUpperCase()}</Text>
                    <Text style={styles.pos}>{parm.office.toUpperCase()}</Text>
                    <View style={styles.card}>
                        <Text style={styles.cardHeader}>ADDRESS</Text>
                        {addressCard}
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardHeader}>PHONE</Text>
                        {phoneCard}
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardHeader}>E-MAIL</Text>
                        {emailCard}
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardHeader}>CHANNELS</Text>
                        {channelCard}
                    </View>
                </View>
            </ScrollView>
        );
    }

    login = () => {
        this.props.navigation.navigate('Representatives');
        // fetch('http://192.168.1.1:8080/users',{
        //     method:'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password
        //     })
        // })
        // .then((response) => response.json())
        // .then((res) => {
        //     if(res.success === true){
        //         AsyncStorage.setItem('user', res.user);
        //         this.props.navigation.navigate('MainPage');
        //     }else{
        //         alert(res.message);
        //     }
        // }).done();
    }

    signup = () => {
        this.props.navigation.navigate('Signup');
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        minHeight: '100%',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(255,255,255, 0.5)'
    },
    profilePicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16
    },
    profilePic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4
    },
    name: {
        marginTop: 20,
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    },
    pos: {
        fontSize: 18,
        color: '#3869B7',
        fontWeight: '300',
        fontStyle: 'italic'
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
    },
    card: {
        alignSelf:'stretch',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        //borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 5,
    }
});
