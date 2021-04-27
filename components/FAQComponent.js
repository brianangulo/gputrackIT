import React, { Component } from "react";
import { Card } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const FAQ = () => {
  return (
    <View>
      <Card>
        <Card.Title>FAQs</Card.Title>
        <Card.Divider />
        <Text style={styles.subtitle}>How does GPUTrackIT work?{"\n"}</Text>
        <Text>
          GPUTrackIT will track the selected GPU on the Best Buy online store
          and will notify you via email once the card goes on stock.{"\n"}
        </Text>
        <Text style={styles.subtitle}>
          What email will GPUTrackIT use to send notifications to?{"\n"}
        </Text>
        <Text>The email found in your Google account used to sign up</Text>
      </Card>
      <Card>
        <Card.Title>Bug Report/Developer Contact</Card.Title>
        <Card.Divider />
        <Text style={styles.subtitle}>Email:{"\n"}</Text>
        <Text>bangulo219@gmail.com</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: "bold",
    },
})

export default FAQ;
