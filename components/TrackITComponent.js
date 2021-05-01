import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { setGpu, setPrice } from "../redux/appSlice";

function TrackIT() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.app.price);
  const gpu = useSelector((state) => state.app.gpu);

  const [apiResponse, setApiResponse] = useState();

    const [asin, setAsin] = useState({
      asin3060: "B091H2KFDH",
      asin3070: "B08YQNGXBL",
      asin3080: "B0936GL8WP",
    });

  const fetchPrice = () => {
    fetch(
      "https://amazon-price1.p.rapidapi.com/priceReport?marketplace=US&asin=B093QKVRCY",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9571710ab5mshff39bd0757b0b45p1cfaabjsnd92e9bf923a4",
          "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response);
        setApiResponse(response);
        console.log(apiResponse);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const gpuToAsin = (gpuValue) => {
    if (gpuValue === "RTX3060") {
      return asin.asin3060;
    } else if (gpuValue === "RTX3070") {
      return asin.asin3070;
    } else {
      return asin.asin3080;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, marginTop: 70 }}>
        <Text style={styles.pickerTitle}>
          Select a GPU to be shown its current price:{" "}
        </Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>
          Current {gpu} price is: {price}
        </Text>
      </View>
      <View style={{ flex: 0.5 }}>
        <Picker
          selectedValue={gpu}
          onValueChange={(itemValue, itemIndex) => {
            console.log("Selected " + itemValue);
            dispatch(setGpu(itemValue));
          }}
          style={styles.picker}
        >
          <Picker.Item label="Nvidia RTX 3060" value="RTX3060" />
          <Picker.Item label="Nvidia RTX 3070" value="RTX3070" />
          <Picker.Item label="Nvidia RTX 3080" value="RTX3080" />
        </Picker>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          raised
          title="Submit"
          onPress={() => {
            console.log("Submit button pressed");
            dispatch(setPrice(10));
            // const gpuAsin = gpuToAsin(gpu);
            fetchPrice();
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
