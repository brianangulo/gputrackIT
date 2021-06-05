import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input, Switch, Icon } from "react-native-elements";
import { moderateScale } from "react-native-size-matters";
//Animations library lottie
import LottieView from "lottie-react-native";
//importing animation asset
import animation from "../assets/loginAsset.json";

function LoginView() {
  //state hook for the switch component
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title} h2>
          Sign In
        </Text>
        <Text style={styles.subTitle}>Welcome Back!</Text>
        <View style={styles.animationView}>
          <LottieView autoPlay loop source={animation} />
        </View>
      </View>
      <View style={styles.inputView}>
        <Input
          textContentType="emailAddress"
          label="Email"
          placeholder="email@email.com"
          leftIcon={<Icon name="email" size={21} color="black" />}
        />
        <Input
          label="Password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
          leftIcon={<Icon name="lock" size={21} color="black" />}
        />
        <View style={styles.switchView}>
          <Switch
            style={styles.switch}
            value={switchValue}
            onValueChange={setSwitchValue}
          />
          <Text style={styles.rememberMe}>Remember me</Text>
          <Text
            onPress={() => console.log("forgot password pressed")}
            style={styles.forgotPwd}
          >
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button
          containerStyle={styles.signInButton}
          title="Sign In"
          onPress={() => console.log("Sign In Button Pressed")}
        />
        <View style={styles.signUpOfferView}>
          <Text style={styles.noAcctTxt}>
            Don't have an account?<Text style={styles.signUpTxt}> Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "5%",
  },
  titleView: {
    flex: 2.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    flex: 2,
  },
  switchView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttonView: {
    flex: 2,
  },
  title: {

  },
  subTitle: {
    color: "#86939e",
    marginVertical: 6,
  },
  switch: {
    transform: [
      { scaleX: moderateScale(0.6, 0.2) },
      { scaleY: moderateScale(0.6, 0.2) },
    ],
  },
  rememberMe: {
    textAlignVertical: "top",
    paddingVertical: 7,
    paddingHorizontal: 3,
    color: "#86939e",
  },
  forgotPwd: {
    color: "#86939e",
    textDecorationLine: "underline",
    paddingVertical: 7,
    marginHorizontal: 117,
  },
  signInButton: {
    alignSelf: "center",
    width: 160,
  },
  noAcctTxt: {
    color: "#86939e",
  },
  signUpTxt: {
    color: "purple",
  },
  signUpOfferView: {
    alignItems: "center",
    margin: 30,
  },
  animationView: {
    width: 100,
    height: 100,
  },
  animation: {
      
  },
});

export default LoginView;
