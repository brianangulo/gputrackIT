import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

class TrackIT extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedValue: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4, marginTop: 70 }}>
          <Text style={styles.pickerTitle}>
            Select a GPU to be notified for:{" "}
          </Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Picker
            selectedValue={this.state.selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              console.log("Selected " + itemValue);
              this.setState({ selectedValue: itemValue });
            }}
            style={styles.picker}
          >
            <Picker.Item label="Nvidia RTX 3060" value="rtx3060" />
            <Picker.Item label="Nvidia RTX 3070" value="rtx3070" />
            <Picker.Item label="Nvidia RTX 3080" value="rtx3080" />
            <Picker.Item label="Nvidia RTX 3090" value="rtx3090" />
          </Picker>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            raised
            title="Submit"
            onPress={() => {
              console.log("Submit button pressed");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
  picker: {
    color: "#ffffff",
    backgroundColor: "#2459E0",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    padding: 30,
  },
});

export default TrackIT;
