import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { color, design } from "../constants";
import { useTheme, Avatar, Modal, Portal } from "react-native-paper";
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
  const [eidtText, setEdittest] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [image, setImage] = React.useState(null);
  const [editPrice, setEditPrice] = useState(0);
  const [detailsFull, setDetailsFull] = useState("");
  const [details, setDetails] = useState("");

  const [detailsPromo, setDetailsPromo] = useState("");
  const [detailsPromofull, setDetailsPromofull] = useState("");

  const [detailsFulltitle, setDetailsFulltitle] = useState("");
  const [detailstitle, setDetailstitle] = useState("");
  const showEditPrice = () => setShowPrice(true);
  const hideEditPrice = () => setShowPrice(false);
  const showEditTest = () => setEdittest(true);
  const hideEditTest = () => setEdittest(false);
  const clearImage = () => setImage(null);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ ...styles.header, borderColor: colors.body5 }}>
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
        </View>
        <ButtonC
          style={{ backgroundColor: colors.primary, paddingHorizontal: 20 }}
          textStyle={{ color: colors.textColor2, fontWeight: "700" }}
          title="POST"
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <CartEdit
          {...{ image, setImage }}
          details={detailsFull}
          price={editPrice}
          title={detailsFulltitle}
          detailsPromo={detailsPromofull}
        />
      </View>
      <Portal>
        <Modal
          visible={eidtText}
          onDismiss={hideEditTest}
          contentContainerStyle={{
            ...styles.modal1,
            backgroundColor: colors.body,
          }}
        >
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{ ...fonts.small, fontWeight: "800", textAlign: "center" }}
            >
              Product description
            </Text>
          </View>
          <TextInput
            style={{
              ...styles.editText,
              borderColor: colors.body6,
              height: 30,
            }}
            maxLength={200}
            value={detailstitle}
            onChangeText={setDetailstitle}
            placeholder="title"
          />
          <View style={{ ...styles.editText, borderColor: colors.body6 }}>
            <TextInput
              style={styles.inputText}
              value={details}
              autoCapitalize={true}
              placeholder={"Add product description"}
              autoFocus={true}
              onChangeText={setDetails}
              // onSubmitEditing={onSubmitEditing}
              multiline={true}
            />
          </View>
          <TextInput
            style={{
              ...styles.editText,
              borderColor: colors.body6,
              height: 30,
            }}
            maxLength={200}
            value={detailsPromo}
            onChangeText={setDetailsPromo}
            placeholder="title"
          />
          <View style={{ alignItems: "flex-end" }}>
            <ButtonC
              style={{ backgroundColor: colors.primary, paddingHorizontal: 20 }}
              textStyle={{ color: colors.textColor2, fontWeight: "700" }}
              title="DONE"
              onPress={() => {
                hideEditTest();
                setDetailsFull(details);
                setDetailsFulltitle(detailstitle);
                setDetailsPromofull(detailsPromo);
              }}
            />
          </View>
        </Modal>
      </Portal>
      <Portal>
        <Modal
          visible={showPrice}
          onDismiss={hideEditPrice}
          contentContainerStyle={{
            ...styles.modal1,
            backgroundColor: colors.body,
            height: 140,
          }}
        >
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{ ...fonts.small, fontWeight: "800", textAlign: "center" }}
            >
              Set price
            </Text>
          </View>
          <View
            style={{
              ...styles.editText,
              borderColor: colors.body6,
              height: 40,
            }}
          >
            <TextInput
              style={styles.inputText}
              value={editPrice}
              autoCapitalize={true}
              maxLength={10}
              placeholder={"Add product description"}
              autoFocus={true}
              onChangeText={setEditPrice}
              // onSubmitEditing={onSubmitEditing}
              keyboardType="number-pad"
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ justifyContent: "space-around" }}
        horizontal
        style={{
          // flexDirection: "row",
          flexGrow: 0,
          marginTop: "auto",
          marginBottom: 3,
          elevation: 2,
          paddingVertical: 1,
          backgroundColor: colors.body,
          borderColor: colors.body5,
          borderRadius: 10,
          borderWidth: 3,
        }}
      >
        <ButtonC
          style={styles.editbtn}
          onPress={showEditTest}
          textStyle={styles.editBtnTxt}
          title="EDIT TEXT"
        />
        <ButtonC
          style={styles.editbtn}
          textStyle={styles.editBtnTxt}
          title="COLOUR"
        />
        <ButtonC
          style={styles.editbtn}
          textStyle={styles.editBtnTxt}
          title="ACTIONS"
        />
        <ButtonC
          style={styles.editbtn}
          textStyle={styles.editBtnTxt}
          title="BRIGHTNESS"
        />
        <ButtonC
          style={styles.editbtn}
          textStyle={styles.editBtnTxt}
          title="PRICE"
          onPress={showEditPrice}
        />
        <ButtonC
          style={styles.editbtn}
          textStyle={styles.editBtnTxt}
          title="CLEAR IMAGE"
          onPress={clearImage}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 17,
  },
  editText: {
    height: 180,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  modal1: {
    height: 350,

    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
  editbtn: {
    borderWidth: 0,
    marginHorizontal: 10,
    marginVertical: 2,
  },
  editBtnTxt: {
    fontSize: 13,
    fontWeight: "800",
  },
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
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 10,
    borderWidth: 3,
    paddingVertical: 10,
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
