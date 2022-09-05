import Constants from "expo-constants";
import { Platform } from "react-native";

const ENV = {
  dev: {
    // apiUrl: "https://jsonplaceholder.typicode.com/todos",
    apiUrl:"http://192.168.43.139:5262/api/v1",
    // apiUrl:"http://localhost:5262/api/v1",
    amplitudeApiKey: null,
  },
  staging: {
    apiUrl: "https://uat.myapi.com/api",
    amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
  prod: {
    apiUrl: "https://prod.myapi.com/api",
    amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars;
