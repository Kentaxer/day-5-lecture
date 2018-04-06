import React, { Component } from "react";

import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

export default class Home extends Component {

    componentDidMount(){
        this.props.updateTime();
        this.timerId = setInterval(()=>{
            this.props.updateTime();
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Heading</Text>
                <View style={styles.scrollContainer}>
                <Text style={{ fontSize: 50 }}>{this.props.time}</Text>
                <ScrollView>
                    
                    <Text style={{ fontSize: 96 }}>Home</Text>
                    <Text style={{ fontSize: 96 }}>Home</Text>
                    <Text style={{ fontSize: 96 }}>Home</Text>
                    <Text style={{ fontSize: 96 }}>Home</Text>
                    <Text style={{ fontSize: 96 }}>Home</Text>
                    <Text style={{ fontSize: 96 }}>Home</Text>
                </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1
    },
    scrollContainer:{
        flex: 2
    }
})