import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";

const SignUp = ({ navigation }) => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "75%" }}>
            <View style={{ marginVertical: 7 }}>
              <TextInputs placeholder="Email Address" />
              <TextInputs placeholder="Brand or Name" />
              <TextInputs placeholder="Password" />
              <TextInputs placeholder="Username" />
              <View style={{ marginHorizontal: 30 }}>
                <Text style={{ ...fonts.h1, color: colors.textColor1 }}>
                  Country
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <ButtonC
                style={{ paddingHorizontal: 10, marginBottom: 10 }}
                title="Create Account"
              />
              <Text
                style={{
                  color: color.blue,
                  marginVertical: 5,
                  fontWeight: "700",
                }}
              >
                Already Have an account ?{" "}
              </Text>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <ButtonC
                  onPress={() => navigation.navigate("Login")}
                  style={{ width: 110 }}
                  title="Login"
                />
              </View>
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

export default SignUp;
