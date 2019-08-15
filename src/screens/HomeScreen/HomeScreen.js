import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import MainImage from "../../../assets/images/Main.jpg";
import HourseImage from "../../../assets/images/Hourse.png";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={MainImage} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <Image source={HourseImage} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.text}>Digital Engagement Lab</Text>
                    </View>
                    <Icon
                        name='power-off'
                        type='font-awesome'
                        color='crimson'
                        size={55}
                        underlayColor='none'
                        onPress={() => {
                            this.props.navigation.navigate('ContactsNavigation');
                        }} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 100,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'ivory',

    }
});