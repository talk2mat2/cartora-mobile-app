import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";


const ButtonC = ({ title, style = {}, onClick = () => {} }) => {
  const { fonts, colors } = useTheme();
  return (
    <TouchableOpacity onClick={onClick}>
      <View style={{ ...styles.container, ...style }}>
        <Text style={{ ...fonts.small, color: colors.textColor1 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.body,
    borderColor: color.orange,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 2,
    justifyContent: "center",
    borderRadius: design.round1,
  },
});

export default ButtonC;
