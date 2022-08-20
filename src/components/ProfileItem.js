import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { useTheme, Avatar } from "react-native-paper";
import EntypoIcons from "@expo/vector-icons/Entypo";
import ButtonC from "./buttonc";
const ProfileItem = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.body2 }}>
      <View style={{ width: "100%", aspectRatio: 1 }}>
        <Image
          style={styles.stock}
          source={require("../../assets/stock.png")}
        />
      </View>
      <View style={{ ...styles.footerItem }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  ...fonts.small,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                N12,000
              </Text>
              <Text
                style={{
                  ...fonts.small,
                  marginLeft: 20,
                  fontSize: 13,
                  color: colors.body4,
                }}
              >
                in stock
              </Text>
            </View>
            <Text
              style={{
                ...fonts.small,
                fontWeight: "200",
                fontSize: 13,
              }}
            >
              Grilled Parfait with colourful spices{"\n"}
              lorem ipsim
            </Text>
          </View>
        </View>
        {/* <ButtonC
          style={{
            paddingHorizontal: 20,
            borderColor: colors.body,
            backgroundColor: colors.body4,
            marginRight: 5,
            paddingVertical: 5,
          }}
          textStyle={{
            fontSize: 15,
            fontWeight: "bold",
            color: colors.textColor2,
          }}
          title="ORDER NOW"
        /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footerItem: {
    marginTop: "auto",
    minHeight: 20,
    padding: 3,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerItem: {
    minHeight: 20,
    width: "100%",
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 9,
    paddingVertical: 8,
    borderRadius: 9,
  },
  container: {
    width: Dimensions.get("screen").width / 2.11,
    minHeight: 100,
    borderRadius: 9,
    marginVertical: 10,
    elevation: 5,
    paddingBottom: 5,
    margin:1
  },

  stock: {
    resizeMode: "cover",

    aspectRatio: 1,
    height: "100%",
  },
});
export default ProfileItem;
