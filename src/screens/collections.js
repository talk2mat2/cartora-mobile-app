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
import { useSelector } from "react-redux";
import { useClientQuery } from "../services/api";
import { useFocusEffect } from "@react-navigation/native";

const Collections = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const user = useSelector(({ user }) => user.data);
  const { data, isError, isLoading, refetch } = useClientQuery(
    `Products/getMyCollections/${user?.id}`
  );
// useFocusEffect(()=>{refetch()})
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.section}>
        <View style={{ flex: 1, alignItems: "center" }}>
          {data?.data?.length > 0 ? (
            <FlatList
              numColumns={2}
              contentContainerStyle={{ justifyContent: "center" }}
              style={{
                flexWrap: "wrap",
                display: "flex",
                width: "100%",
              }}
              data={data?.data || []}
              renderItem={(item) => <ProfileItem />}
              keyExtractor={(data, index) => index}
            />
          ) : (
            <Text>Collections is empty</Text>
          )}
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
