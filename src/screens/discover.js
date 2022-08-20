import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import DiscoverItem from "../components/discoverItem";
import Header from "../components/header";

const Discover = () => {
  const { colors, fonts, font } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.body }}>
      <Header/>
      <ScrollView style={{backgroundColor:color.body,...styles.content}}>
        <DiscoverItem />
        <DiscoverItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content:{
    paddingHorizontal:design.padding1,
    paddingBottom:20,
    height:"90%"
  },
  
  container: {
    flex: 1,
    backgroundColor: color.body,
    padding: design.padding1,
   
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
  center: {
    alignItems: "center",
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  imageView: {
    borderRadius: 100,
    marginBottom: 40,
  },
});

export default Discover;
