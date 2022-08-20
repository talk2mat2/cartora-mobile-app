import React from "react";
import { TextInput } from "react-native-paper";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";

const TextInputs = ({ placeholder = "", style = {} }) => {
  const { fonts, colors } = useTheme();
  return (
    <TextInput placeholderTextColor={colors.textColor1} underlineColor={colors.primary}
      theme={{ colors: { text: color.blue} }}
      placeholder={placeholder}
      style={{
        textAlign: "center",
        fontFamily: "ProximaNova",
        
        fontSize:17,
        width: "100%",
        justifyContent:"flex-end",
        height:40,
        
        marginVertical: 10,
        backgroundColor: color.body,
        borderBottomWidth: 0.5,
        // borderBottomColor: colors.primary,
        ...style,
      }}
    />
  );
};

export default TextInputs;
