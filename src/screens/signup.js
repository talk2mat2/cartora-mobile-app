import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import { color, design } from "../constants";
import { useTheme, HelperText } from "react-native-paper";
import ButtonC from "../components/buttonc";
import TextInputs from "../components/textInput";
import { Formik } from "formik";
import * as Yup from "yup";
import WithSpinner from "../components/withspinner";
import { useMutations } from "../services/api";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "password is too short")
    .max(80, "password is too long")
    .required(),
  country: Yup.string(),
});

const SignUp = ({ navigation, setLoading }) => {
  const { colors, fonts } = useTheme();
  const { mutate } = useMutations();

  const subMitdata = (datas) => {
    mutate(
      {
        key: "signup",
        method: "post",
        data: datas,
      },
      {
        onSuccess: (res) => {
          setLoading(false);
          alert(res?.message)
        },
        onError: (error) => {
          setLoading(false);
         alert(error?.message)
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          userName: "",
          brand: "",
          email: "",
          country: "",
          profileImage: "",
          password: "",
        }}
        onSubmit={(values) => {
          Keyboard.dismiss();
          subMitdata(values);
          setLoading(true);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setFieldValue,
        }) => (
          <View style={{ width: "75%" }}>
            <View style={{ marginVertical: 7 }}>
              <TextInputs
                value={values.email}
                onChangeText={(text) => setFieldValue("email", text)}
                placeholder="Email Address"
                style={styles.input2}
              />
              <HelperText
                style={styles.helperText}
                type="error"
                visible={errors.email}
              >
                {errors.email}
              </HelperText>
              <TextInputs
                style={styles.input2}
                onChangeText={(text) => setFieldValue("brand", text)}
                value={values.brand}
                placeholder="Brand or Name"
              />
              <HelperText
                style={styles.helperText}
                type="error"
                visible={errors.brand}
              >
                {errors.brand}
              </HelperText>
              <TextInputs
                onChangeText={(txt) => setFieldValue("password", txt)}
                style={styles.input2}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              <HelperText
                style={styles.helperText}
                type="error"
                visible={errors.password}
              >
                {errors.password}
              </HelperText>
              <TextInputs
                onChangeText={(txt) => setFieldValue("userName", txt)}
                style={styles.input2}
                value={values.userName}
                placeholder="Username"
              />
              <HelperText
                style={styles.helperText}
                type="error"
                visible={errors.userName}
              >
                {errors.userName}
              </HelperText>
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
                onPress={handleSubmit}
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
  helperText: {
    marginTop: 0,
    paddingVertical: 0,
  },
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
  input2: {
    marginBottom: 0,
    marginTop: 0,
  },
});

export default WithSpinner(SignUp);
