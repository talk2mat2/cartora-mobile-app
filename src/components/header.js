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
import ButtonC from "./buttonc";
import TextInputs from "./textInput";
import { Formik } from "formik";
import DiscoverItem from "./discoverItem";

const Header = () => {
  const { colors, fonts, font } = useTheme();

  return (
    <View style={{ ...styles.header, backgroundColor: colors.primary }}>
      <Text style={{ ...fonts.discoverBrand, color: colors.textColor2 }}>
        Cartora
      </Text>
      <ButtonC
        textStyle={{ color: colors.primary, fontWeight: "700" }}
        style={{ paddingHorizontal: 10 }}
        title="Create Cart"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: design.padding1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    alignItems: "center",
    paddingVertical: 3,
  },
  container: {
    flex: 1,

    paddingTop: 2,
    // alignItems: "center",
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

export default Header;
