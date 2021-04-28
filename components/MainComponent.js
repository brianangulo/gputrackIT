import React, { Component } from 'react';
import { View, Text } from "react-native";
import TrackIT from "./TrackITComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import FAQ from "./FAQComponent";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItem label="My Name" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const TrackITStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TrackIT"
          component={TrackIT}
          options={{
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
                  navigation.openDrawer();
                  console.log("Drawer menu icon was clicked");
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
}

const FAQStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{
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
                  navigation.openDrawer();
                  console.log("Drawer menu icon was clicked");
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
}

const MainDrawer = (props) => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="TrackIT" component={TrackITStack} />
      <Drawer.Screen name="FAQs" component={FAQStack} />
    </Drawer.Navigator>
  );
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <MainDrawer />
        );
    }
}

export default Main;