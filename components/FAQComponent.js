import React, { Component, useEffect } from "react";
import { Card } from "react-native-elements";
import { View, Text, StyleSheet, LogBox } from "react-native";
import { db, auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../redux/appSlice";



function FAQ() {
  const dispatch = useDispatch();
  const faqInfo = useSelector((state) => state.app.faqInfo);

const faqRef = db.collection("faq");

useEffect(() => {
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
        dispatch(getFaqs(info))
        console.log(faqInfo)
      }
    ).catch(error => console.log(error))
    });

    return (
      faqInfo && faqInfo.map(
        (faqs) => {
          return (
            <View>
          <Card>
            <Card.Title>FAQs</Card.Title>
            <Card.Divider />
            <Text style={styles.subtitle}>
              {faqs.subtitle1}
              {"\n"}
            </Text>
            <Text>
              {faqs.answer1}
              {"\n"}
            </Text>
            <Text style={styles.subtitle}>
              {faqs.subtitle2}
              {"\n"}
            </Text>
            <Text>
              {faqs.answer2}
            </Text>
          </Card>
          <Card>
            <Card.Title>Bug Report/Developer Contact</Card.Title>
            <Card.Divider />
            <Text style={styles.subtitle}>
              {faqs.contacttype}
              {"\n"}
            </Text>
            <Text>
              {faqs.email}
            </Text>
          </Card>
        </View>
          );
        }
      )
    );
  }

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: "bold",
    },
})

export default FAQ;
