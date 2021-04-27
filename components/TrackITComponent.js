import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

class TrackIT extends Component {
  constructor(props) {
    this.state = {
        selectedValue: "",
    };
  }



  render() {
    return (
      <View>
          <Text style={styles.pickerTitle}>Selected a GPU to be notified for: </Text>
          <Picker
          style={styles.picker}
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            console.log("Selected " + itemValue);
          }}
          >
              <Picker.Item label="Nvidia RTX 3060" value="rtx3060" />
              <Picker.Item label="Nvidia RTX 3070" value="rtx3070" />
              <Picker.Item label="Nvidia RTX 3080" value="rtx3080" />
              <Picker.Item label="Nvidia RTX 3090" value="rtx3090" />
          </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 2,
  },
  picker: {
      flex: 2,
  }
});

export default TrackIT;
