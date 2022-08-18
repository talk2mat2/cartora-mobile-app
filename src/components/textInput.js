import React from "react";
import { TextInput } from "react-native-paper";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";

const TextInputs = ({ placeholder = "", style = {} }) => {
  const { fonts, colors } = useTheme();
  return (
    <TextInput
      theme={{ colors: { text: color.blue,placeholder:"#ffffff" } }}
      placeholder={placeholder}
      style={{
        textAlign: "center",
        fontFamily: "ProximaNova",
        fontWeight: "500",
        fontSize:17,
        width: "100%",
        justifyContent:"flex-end",
        height:40,
        
        marginVertical: 10,
        backgroundColor: color.body,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        ...style,
      }}
    />
  );
};

export default TextInputs;
