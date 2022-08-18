import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { color, design } from "../constants";
import { useTheme } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";

const Login = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.tinyLogo}
                source={require("../../assets/logo2.png")}
              />
            </View>
            <View style={{ marginVertical: 7 }}>
              <TextInputs placeholder="Email Address or Username" />
              <TextInputs placeholder="Password" />
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <ButtonC style={{ width: 110 }} title="Login" />
            </View>
            <View
              style={{ alignItems: "center", marginTop: 10, paddingBottom: 8 }}
            >
              <Text
                style={{
                  color: color.blue,
                  marginVertical: 5,
                  fontWeight: "700",
                }}
              >
                New Here ?{" "}
              </Text>
              <ButtonC
                style={{ paddingHorizontal: 10 }}
                title="Create New Account"
              />
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

export default Login;
