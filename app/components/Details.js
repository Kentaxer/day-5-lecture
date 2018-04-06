import React, {Component} from "react";

import { View, Text, Button } from "react-native";

export default class Details extends Component{

    render(){
        return (
            <View>
                <Text>Details</Text>
                <Button
                    title="Go to Details again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }

}