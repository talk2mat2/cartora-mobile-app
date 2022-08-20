import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useTheme, Avatar } from "react-native-paper";
import EntypoIcons from "@expo/vector-icons/Entypo";
import ButtonC from "./buttonc";
const DiscoverItem = () => {
  const { colors, fonts } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.body2 }}>
      <View style={{ ...styles.headerItem, backgroundColor: colors.body }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image size={40} />
          <View style={{ marginLeft: 9, justifyContent: "center" }}>
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
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ButtonC
            style={{
              paddingHorizontal: 20,
              borderColor: colors.body3,
              marginRight: 5,
            }}
            textStyle={{ fontSize: 13, fontWeight: "bold" }}
            title="KNIT IT"
          />
          <EntypoIcons
            name="dots-three-vertical"
            size={20}
            color={colors.textColor3}
          />
        </View>
      </View>
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
        <ButtonC
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
        />
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
    flex: 1,
    minHeight: 440,
    borderRadius: 9,
    marginVertical: 10,
    elevation: 5,
    paddingBottom: 5,
  },
  tinyLogo: {
    height: 170,
    width: 170,
  },
  stock: {
    resizeMode: "cover",

    aspectRatio: 1,
    height: "100%",
  },
});
export default DiscoverItem;
