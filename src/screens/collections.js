import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { color, design } from "../constants";
import { useTheme, Avatar } from "react-native-paper";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import Header from "../components/header";
import ProfileItem from "../components/ProfileItem";

const Collections = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <FlatList
            numColumns={2}
            contentContainerStyle={{ justifyContent: "center" }}
            style={{
              flexWrap: "wrap",
              display: "flex",
              width: "100%",
            }}
            data={[1, 2, 3, 4, 5]}
            renderItem={(item) => <ProfileItem />}
            keyExtractor={(data, index) => index}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    height: "95%",
    width: "100%",
    marginTop: 20,
  },
  sub: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 17,
    paddingVertical: 5,
  },
  header: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "10%",
    paddingLeft: 10,
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
});

export default Collections;
