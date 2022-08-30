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

const Search = ({ navigation }) => {
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

        <TextInputs autoFocus={true} style={{backgroundColor:colors.body5,boderRadius:10,width:"80%"}} />
        {/* <Text
          style={{
            ...fonts.medium,
            // fontSize: 25,
            marginLeft: "27%",
          }}
        >
          Settings
        </Text> */}
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

export default Search;
