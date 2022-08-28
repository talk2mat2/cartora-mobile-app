import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useTheme, Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ButtonC from "./buttonc";

const CartEdit = ({
  details,
  price,
  image,
  setImage,
  stock,
  title,
  detailsPromo,
}) => {
  const { colors, fonts } = useTheme();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <Avatar.Image style={styles.Avatar} />
      <View style={styles.statusBtn}>
        <ButtonC
          style={{
            paddingHorizontal: 10,
            borderColor: colors.body,
            backgroundColor: colors.secondary,
            marginRight: 5,
            paddingVertical: 2,
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: 12,
            fontWeight: "bold",
            color: colors.textColor2,
          }}
          otherTextProps={{}}
          title={
            detailsPromo ? detailsPromo.substring(0, 14) + ".." : "Promo text"
          }
        />
      </View>

      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={["lime", "lime", "orange", colors.secondary]}
        style={styles.container}
      >
        <View
          style={{ ...styles.imageContainer, backgroundColor: colors.body }}
        >
          <View style={{ ...styles.add }}>
            {image ? (
              <TouchableOpacity
                onPress={pickImage}
                style={{
                  borderColor: colors.body3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={pickImage}
                style={{ ...styles.addbtn, borderColor: colors.body3 }}
              >
                <Ionicons
                  name="ios-add-circle-outline"
                  size={120}
                  color={colors.body6}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </LinearGradient>
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
                N{price}
              </Text>
              {!stock ? (
                <Text
                  style={{
                    ...fonts.small,
                    marginLeft: 10,
                    fontSize: 13,
                    fontWeight: "900",
                    color: "tomato",
                  }}
                >
                  Out of stock
                </Text>
              ) : (
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
              )}
            </View>
            <Text
              style={{
                ...fonts.small,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              {title}
            </Text>
            <ScrollView style={{ height: "9%" }}>
              <Text
                style={{
                  ...fonts.small,
                  fontWeight: "200",
                  fontSize: 13,
                }}
              >
                {details ? details : "Add product description"}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerItem: {
    marginTop: "auto",
    minHeight: 20,
    padding: 3,
    paddingLeft: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Avatar: {
    position: "absolute",
    zIndex: 2,
    elevation: 3,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: "#ffffff",
  },
  statusBtn: {
    position: "absolute",
    zIndex: 2,
    elevation: 3,
    marginTop: 1,
    right: 0,
  },
  addbtn: {
    // borderWidth: 1,
    // borderRadius: 100,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  imageContainer: {
    width: "87%",
    height: "87%",
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom:25,
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
  },
});

export default CartEdit;
