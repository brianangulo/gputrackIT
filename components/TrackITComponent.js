import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { selectValue, setGpu, setPrice } from "../redux/appSlice";

function TrackIT() {
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.app.selectedValue);
  const price = useSelector((state) => state.app.price);
  const gpu = useSelector((state) => state.app.gpu);

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4, marginTop: 70 }}>
          <Text style={styles.pickerTitle}>
            Select a GPU to be shown its current price:{" "}
          </Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>Current {gpu} price is: {price}</Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              console.log("Selected " + itemValue)
              dispatch(selectValue(itemValue))
              dispatch(setGpu(itemValue)); 
            }}
            style={styles.picker}
          >
            <Picker.Item label="Nvidia RTX 3060" value="RTX3060" />
            <Picker.Item label="Nvidia RTX 3070" value="RTX3070" />
            <Picker.Item label="Nvidia RTX 3080" value="RTX3080" />
            <Picker.Item label="Nvidia RTX 3090" value="RTX3090" />
          </Picker>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            raised
            title="Submit"
            onPress={() => {
              console.log("Submit button pressed");
              dispatch(setPrice(10)); 
            }}
          />
        </View>
      </View>
    );
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
  priceView: {
    flex: 0.2,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default TrackIT;
