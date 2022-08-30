import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  useTheme,
  configureFonts,
} from "react-native-paper";
import { color, fontConfig, fonts } from "./src/constants";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from "react-native-toast-notifications";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import Main from "./src/components/main";
import { store, persistor } from "./src/redux/store";
import Toast from "./src/components/toast";

export default function App() {
  const [fontsLoaded] = useFonts({
    ProximaNova: require("./assets/fonts/SFLIGHT.otf"),
    Frunch: require("./assets/fonts/Frunch.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const queryClient = new QueryClient();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.orange,
      secondary: color.blue,
      textColor1: color.blue,
      body: color.body,
      body2: color.grey2,
      body3: color.grey3,
      body5: color.grey4,
      body6: color.grey5,
      body4: color.green,
      textColor2: color.white,
      textColor3: color.grey1,
    },
    fonts: configureFonts(fontConfig),
    font: fonts,
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
              <ToastProvider    offsetBottom={70} renderToast={(toast) => <Toast toast={toast} />}>
                <Main />
                <StatusBar style="auto" />
              </ToastProvider>
            </PaperProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : 25,
  },
});
