import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  useTheme,
  configureFonts,
} from "react-native-paper";
import { color, fontConfig, fonts } from "./src/constants";
import { useFonts } from "expo-font";
import Login from "./src/screens/login";
import SignUp from "./src/screens/signup";
import VerifyEmail from "./src/screens/verifyemail";

export default function App() {
  const [fontsLoaded] = useFonts({
    ProximaNova: require("./assets/fonts/nova.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.orange,
      secondary: color.blue,
      textColor1:color.blue,
      body:color.body,
    },
    fonts: configureFonts(fontConfig),
    font: fonts,
  };

  return (
    <PaperProvider theme={theme}>
      {/* <Login /> */}
      {/* <SignUp/> */}
      <VerifyEmail/>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
