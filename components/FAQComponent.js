import React, { Component } from "react";
import { Card } from "react-native-elements";
import { View, Text, StyleSheet, LogBox } from "react-native";
import { db, auth } from "../firebase/firebase";

const faqRef = db.collection("faq");

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      faqInfo: [],

     };
  }

  componentDidMount() {
    console.log("Mounted");
    faqRef.get().then(
      (snapshot) => {
        const info = []
        snapshot.forEach(
          doc => {
            const data = doc.data()  
            info.push(data)
          }
        )
        this.setState({faqInfo: info})
        console.log(this.state.faqInfo)
      }
    ).catch(error => console.log(error))
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>FAQs</Card.Title>
          <Card.Divider />
          <Text style={styles.subtitle}>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.subtitle1;
            })}
            {"\n"}
          </Text>
          <Text>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.answer1;
            })}
            {"\n"}
          </Text>
          <Text style={styles.subtitle}>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.subtitle2;
            })}
            {"\n"}
          </Text>
          <Text>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.answer2;
            })}
          </Text>
        </Card>
        <Card>
          <Card.Title>Bug Report/Developer Contact</Card.Title>
          <Card.Divider />
          <Text style={styles.subtitle}>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.contacttype;
            })}
            {"\n"}
          </Text>
          <Text>
            {this.state.faqInfo.map((subtitle) => {
              return subtitle.email;
            })}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: "bold",
    },
})

export default FAQ;
