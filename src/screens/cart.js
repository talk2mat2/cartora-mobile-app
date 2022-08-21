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
import CartEdit from "../components/cartEdit";

const Cart = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <View>
          <ButtonC
            style={{
              backgroundColor: colors.textColor2,
              paddingHorizontal: 1,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.primary, fontWeight: "700" }}
            title="+ ADD TO COLLECTION"
          />
          {/* <Text
            style={{
              ...fonts.small,
              color: colors.primary,
              fontSize: 13,
              fontWeight: "900",
            }}
          >
            ADD TO COLLECTION
          </Text> */}
        </View>
        <ButtonC
          style={{ backgroundColor: colors.primary, paddingHorizontal: 20 }}
          textStyle={{ color: colors.textColor2, fontWeight: "700" }}
          title="POST"
        />
      </View>
      <View style={{marginTop:40}}>
        <CartEdit />
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
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

export default Cart;
