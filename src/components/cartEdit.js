import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

const CartEdit = () => {
  const { colors, fonts } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{...styles.imageContainer,backgroundColor:colors.body}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "80%",
    height: "80%",
    borderRadius:10
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "red",
  },
});

export default CartEdit;
