import React, { Component } from 'react';
import { View, Text } from "react-native";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <View style={{alignContent: "center", justifyContent: "center", alignItems: "center", flex: 1}}>
                <Text>Main Component</Text>
            </View>
        );
    }
}

export default Main;