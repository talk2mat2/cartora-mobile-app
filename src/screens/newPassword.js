import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";

const NewPassword = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "75%" }}>
           
            <View
              style={{
                marginHorizontal: 10,
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ ...fonts.h1, color: colors.textColor1 ,fontWeight:"700"}}>
                CREATE A SECURED PASSWORD
              </Text>
            </View>
            <View style={{ marginVertical: 7 }}>
              <TextInputs placeholder="New Password" />
              <TextInputs placeholder="Confirm New Password" />
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <ButtonC style={{ width: 110 }} title="Finish" />
            </View>
           
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.body,
    padding: design.padding1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
});

export default NewPassword;
