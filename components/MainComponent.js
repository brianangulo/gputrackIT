import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TrackIT from "./TrackITComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Icon, Avatar } from "react-native-elements";
import FAQ from "./FAQComponent";
import { NavigationContainer } from "@react-navigation/native";
import Contact from "./ContactComponent";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Avatar rounded icon={{ name: "computer", size: 30 }} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.headerName}>TrackIT</Text>
          </View>
        </View>
      </SafeAreaView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Message Us"
        onPress={() => console.log("Messaging Devs")}
      />
      <DrawerItem
        label="Sign In"
        onPress={() => console.log("Signing in with google")}
      />
      <DrawerItem label="Log Out" onPress={() => console.log("Logging out")} />
    </DrawerContentScrollView>
  );
}

const ContactStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Message Us"
        component={Contact}
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

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="TrackIT" component={TrackITStack} />
      <Drawer.Screen name="FAQs" component={FAQStack} />
      <Drawer.Screen name="Message Us" component={ContactStack} />
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
          <NavigationContainer>
            <MainDrawer />
          </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: "#2459E0",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  headerName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#ffffff",
  },
});

export default Main;