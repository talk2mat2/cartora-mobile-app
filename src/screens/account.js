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

const Account = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Avatar.Image />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                ...fonts.small,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              1000{"\n"}
              <Text style={styles.sub}>products</Text>
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                ...fonts.small,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              1000{"\n"}
              <Text style={styles.sub}>Knitted</Text>
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                ...fonts.small,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              1000{"\n"}
              <Text style={styles.sub}>knitters</Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ alignItems: "flex-start", width: "100%", paddingLeft: 10 }}
      >
        <Text
          style={{
            ...fonts.small,
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 17,
            paddingVertical: 5,
          }}
        >
          Daren Store {"\n"}
          <Text style={{ ...fonts.small, fontWeight: "700", fontSize: 12 }}>
            @ darenstore
          </Text>
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            ...fonts.small,
            color: colors.textColor3,
            fontWeight: "200",
            paddingLeft: 10,
          }}
        >
          We help to satisfy your cravings for special delicacies, sandwiches,
          chicken, smoothies
        </Text>
      </View>
      <View style={styles.tabssection}>
        <Tabs
          // defaultIndex={0} // default = 0
          // uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          style={{ backgroundColor: "#fff" }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          // onChangeIndex={(newIndex) => {}} // react on index change
          // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
          // disableSwipe={false} // (default=false) disable swipe to left/right gestures
        >
          <TabScreen label="" icon="home">
            <View style={{ flex: 1, alignItems: "center" }}>
              <FlatList
                numColumns={2}
                contentContainerStyle={{ justifyContent:"center"}}
                style={{
                 
                  flexWrap: "wrap",
                  display: "flex",
                  width: "100%",
                
                }}
                data={[1, 2, 3, 4, 5]}
                renderItem={(item) => <ProfileItem />}
                keyExtractor={(data, index) => index}
              />
            </View>
          </TabScreen>

          <TabScreen
            label="2"
            icon="message"
            // optional props
            // onPressIn={() => {
            //   console.log('onPressIn explore');
            // }}
            // onPress={() => {
            //   console.log('onPress explore');
            // }}
          >
            <View style={{ flex: 1 }}>
              <Text>comming soon</Text>
            </View>
          </TabScreen>
        </Tabs>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabssection: {
    height: "68%",
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

export default Account;
