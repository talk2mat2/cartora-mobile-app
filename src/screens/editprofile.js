import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
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
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import Header from "../components/header";
import ProfileItem from "../components/ProfileItem";
import { useClientQuery } from "../services/api";
import WithSpinner from "../components/withspinner";
import Spinner from "../components/spinner";
import DetailItem from "../components/DetailItem";

const EditProfile = ({ navigation, route }) => {
  const { colors, fonts } = useTheme();

  // React.useEffect(() => {
  //   // console.log(data);
  // }, [isLoading]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#D3D3D3",
        }}
      >
        <TouchableOpacity
          style={{ width: 40 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Text
          style={{
            ...fonts.medium,
            // fontSize: 25,
            marginLeft: "27%",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </Text>
      </View>
      <View style={{ marginTop: "10%", paddingHorizontal: 10 }}>
        <View style={styles.itemList}>
          <Text
            style={{
              ...fonts.small,

              fontSize: 16,
            }}
          >
            Brand Name
          </Text>
          <TextInput style={styles.inputItem} value="testing" />
        </View>
        <View style={styles.itemList}>
          <Text
            style={{
              ...fonts.small,
              fontSize: 16,
            }}
          >
            UserName
          </Text>
          <TextInput style={styles.inputItem} value="tesg" />
        </View>
        <View style={styles.itemList}>
          <Text
            style={{
              ...fonts.small,

              fontSize: 16,
            }}
          >
            Email
          </Text>
          <Text
            style={{
              ...fonts.small,
              ...styles.inputItem,

              fontSize: 16,
            }}
          >
            Tal2k2mat2@yahoo.dom"
          </Text>
        </View>
        <View style={styles.itemList}>
          <Text
            style={{
              ...fonts.small,

              fontSize: 16,
            }}
          >
            PhoneNumber
          </Text>
          <TextInput
            style={{
              ...fonts.small,
              ...styles.inputItem,

              fontSize: 16,
            }}
            value=" 09045367825"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabssection: {
    height: "68%",
    width: "100%",
    marginTop: 20,
  },
  sub: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 17,
    paddingVertical: 5,
  },
  itemList: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputItem: {
    color: "#808080",
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  header: {
    width: "100%",
    marginTop: 10,
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
    paddingHorizontal: 3,
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
});

export default WithSpinner(EditProfile);
