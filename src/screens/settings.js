import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Touchable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/usersSlice";

const Settings = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          }}
        >
          Settings
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: design.padding1,
          marginTop: 20,
          minHeight: "40%",
        }}
      >
        <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
          <Text
            style={{
              ...fonts.medium,
              fontSize: 20,
              marginVertical: 10,
              color: colors.secondary,
            }}
          >
            Support
          </Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
          <Text
            style={{
              ...fonts.medium,
              fontSize: 20,
              marginVertical: 10,
              color: colors.secondary,
            }}
          >
            FeedBack
          </Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
          <Text
            style={{
              ...fonts.medium,
              fontSize: 20,
              marginVertical: 10,
              color: colors.secondary,
            }}
          >
            Privacy
          </Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                ...fonts.medium,
                fontSize: 20,
                marginVertical: 10,
                color: colors.secondary,
              }}
            >
              Account
            </Text>
            <AntDesign color={colors.secondary} name="edit" size={24} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                ...fonts.medium,
                fontSize: 20,
                marginVertical: 10,
                color: colors.secondary,
                marginRight:9
              }}
            >
              Join Cartora on Facebook
            </Text>

            <AntDesign name="facebook-square" size={24} color="#3c5a99" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor={colors.body6} onPress={handleLogout}>
          <Text
            style={{
              ...fonts.medium,
              fontSize: 20,
          
              marginVertical: 10,
              color: colors.secondary,
            }}
          >
            Sign Out
          </Text>
        </TouchableHighlight>
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo2.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              ...fonts.small,
              fontWeight: "700",
              fontSize: 16,
              lineHeight: 17,
              paddingVertical: 5,
              textAlign: "center",
            }}
          >
            Version 1.2.0{"\n"}
            {"\n"}
            <Text style={{ ...fonts.small, fontWeight: "300", fontSize: 13 }}>
              Terms of Service and privacy Policy{"\n"}
              {"\n"}
            </Text>
            <Text style={{ ...fonts.small, fontWeight: "300", fontSize: 13 }}>
              Delete My Cartora Account{"\n"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.body,
    padding: design.padding1,
    paddingTop: 10,
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
});

export default Settings;
