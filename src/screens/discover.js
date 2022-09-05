import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import DiscoverItem from "../components/discoverItem";
import Header from "../components/header";
import WithSpinner from "../components/withspinner";
import { useClientQuery } from "../services/api";

const Discover = ({ navigation, setLoading }) => {
  const { colors, fonts, font } = useTheme();
  const { data, isError, isLoading, refetch } = useClientQuery("Products");
  // React.useEffect(() => {
  //   console.log("data=", data);
  // }, [data]);
  return (
    <View style={{ ...styles.container, backgroundColor: colors.body }}>
      <Header navigation={navigation} />
      {isLoading && <ActivityIndicator size={50} style={styles.spinner} />}
      {/* <ScrollView style={{ backgroundColor: color.body, ...styles.content }}>
        {data?.data.length > 0 && data.data.map((item) => <DiscoverItem key={item.id} item={item}/>)}
      </ScrollView> */}
      {data?.data.length && (
        <FlatList
          onRefresh={refetch}
          refreshing={false}
          data={data?.data}
          renderItem={({ item, index }) => (
            <DiscoverItem key={item.id} item={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: design.padding1,
    paddingBottom: 20,
    height: "90%",
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
  spinner: {
    position: "absolute",
    zIndex: 10,
    elevation: 10,

    alignSelf: "center",
    marginTop: "45%",
  },
});

export default WithSpinner(Discover);
