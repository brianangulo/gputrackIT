import React, { Component } from 'react';
import { View, Text } from "react-native";
import TrackIT from "./TrackITComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import FAQ from "./FAQComponent";

const Stack = createStackNavigator();

const screenStackOptions = {
  headerTitleStyle: {
    color: "#ffffff",
  },
  headerStyle: {
    backgroundColor: "#2459E0",
  },
  headerTitleAlign: "center",
  headerLeft: () => (
    <Icon
      name="bars"
      type="font-awesome-5"
      color="#ffffff"
      iconStyle={{ padding: 15 }}
      onPress={() => {
        console.log("Drawer menu icon was clicked");
      }}
    />
  ),
};

const MainStack = () => {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen
          name="TrackIT"
          component={TrackIT}
          options={screenStackOptions}
        /> */}
        <Stack.Screen 
        name="FAQ"
        component={FAQ}
        options={screenStackOptions}
        />
      </Stack.Navigator>
    );
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <MainStack />
        );
    }
}

export default Main;