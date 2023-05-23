import React, { useState } from "react";
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
  ScrollView,
} from "react-native";

import { color, design } from "../constants";
import { IconButton, useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import { Checkbox } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Modal, Portal } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/usersSlice";
import CheckBox from "../components/CheckBox";

const Settings = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const [showTags, setshowTags] = useState(false);
  const handleLogout = () => {
    dispatch(logOut());
  };
  const hideEditTags = () => setshowTags(false);
  const showEditTags = () => setshowTags(true);
  return (
    <>
      <Portal>
        <Modal
          visible={showTags}
          onDismiss={hideEditTags}
          contentContainerStyle={{
            ...styles.modal1,
            backgroundColor: colors.body,
            minHeight: "90%",
          }}
        >
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{ ...fonts.small, fontWeight: "800", textAlign: "center" }}
            >
              Set profile tags
            </Text>
          </View>
          <View style={{ marginTop: "15%" }}>
            <ScrollView>
              <CheckBox status="" label="Vehicles" />
              <CheckBox status="checked" label="Properties" />
              <CheckBox status="checked" label="Mobile Phones" />
              <CheckBox status="checked" label="Electronics" />
              <CheckBox status="checked" label="Furnitures" />
              <CheckBox status="checked" label="Health" />
              <CheckBox status="checked" label="Fashion" />
              <CheckBox status="checked" label="Sport & Outdoors" />
              <CheckBox status="checked" label="Services" />
              <CheckBox status="checked" label="Jobs" />
              <CheckBox status="checked" label="Babies" />
              <CheckBox status="checked" label="Agric" />
              <CheckBox status="checked" label="Repairs" />
              <CheckBox status="checked" label="Equipments" />
            </ScrollView>
          </View>
          <View style={{ alignItems: "flex-end", marginTop: "auto" }}>
            <ButtonC
              style={{ backgroundColor: colors.primary, paddingHorizontal: 20 }}
              textStyle={{ color: colors.textColor2, fontWeight: "700" }}
              title="DONE"
              onPress={() => {
                hideEditPrice();
                // setDetailsFull(details);
              }}
            />
          </View>
        </Modal>
      </Portal>
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
              fontWeight:"bold"
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
          <TouchableHighlight
            underlayColor={colors.body6}
            onPress={() => navigation?.navigate("EditProfile")}
          >
            <Text
              style={{
                ...fonts.medium,
                fontSize: 20,
                marginVertical: 10,
                color: colors.secondary,
              }}
            >
              Edit my profile
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
          <TouchableHighlight
            underlayColor={colors.body6}
            onPress={() => showEditTags()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  ...fonts.medium,
                  fontSize: 20,
                  marginVertical: 10,
                  color: colors.secondary,
                }}
              >
                My Tags
              </Text>
              <AntDesign color={colors.secondary} name="edit" size={24} />
            </View>
          </TouchableHighlight>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.tags}>
              <Text> # holidays</Text>
            </View>
            <View style={styles.tags}>
              <Text> # leasure</Text>
            </View>
            <View style={styles.tags}>
              <Text> # Cars</Text>
            </View>
          </View>
          <TouchableHighlight underlayColor={colors.body6} onPress={() => null}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  ...fonts.medium,
                  fontSize: 20,
                  marginVertical: 10,
                  color: colors.secondary,
                  marginRight: 9,
                }}
              >
                Join Cartora on Instaram
              </Text>

              <AntDesign name="instagram" size={24} color="#C13584" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={colors.body6}
            onPress={handleLogout}
          >
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.body,
    padding: design.padding1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
  tags: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "grey",
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginVertical: 7,
  },
  modal1: {
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 15,
  },
  editText: {
    height: 180,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  inputText: {
    fontSize: 17,
  },
});

export default Settings;
