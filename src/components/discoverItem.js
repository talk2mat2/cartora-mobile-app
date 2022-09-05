import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Linking,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import {
  useTheme,
  Avatar,
  Button,
  Menu,
  Divider,
  Provider,
} from "react-native-paper";

import EntypoIcons from "@expo/vector-icons/Entypo";
import ButtonC from "./buttonc";
import { appToast } from "./Helpers";
import { debounce } from "lodash";
import { AntDesign } from "@expo/vector-icons";
const DiscoverItem = ({ item }) => {

  const [visible, setVisible] = React.useState(false);
  const [learnMore, setLearnMore] = React.useState(false);
  const { colors, fonts } = useTheme();
  const { show } = appToast();
  const openMenu = () => setVisible(true);
  const _animation = new Animated.Value(0);

  const closeMenu = () => setVisible(false);
  const handleknit = () => {
    show("this feature is comming soon");
  };
  const animatedStyle = {
    opacity: _animation,
  };

  // const Menus = (
  //   <Menu
  //     visible={visible}
  //     onDismiss={closeMenu}
  //     anchor={<Button onPress={openMenu}>Show menu</Button>}
  //   >
  //     <Menu.Item onPress={() => {}} title="Item 1" />
  //     <Menu.Item onPress={() => {}} title="Item 2" />
  //     <Divider />
  //     <Menu.Item onPress={() => {}} title="Item 3" />
  //   </Menu>
  // );
  const closeOverlay = debounce(() => {
    setLearnMore(false);
  }, 5000);

  const openOverlay = () => {
    setLearnMore(true);
    console.log("called");
  };
  const devLink = "http://api.whatsapp.com/send?phone=234$9051322343";
  React.useEffect(() => {
    if (learnMore) {
      Animated.timing(_animation, {
        toValue: 0.7,
        duration: 700,
        useNativeDriver: false,
      }).start();
    }
    learnMore && closeOverlay();
  }, [learnMore]);
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
              {item?.user?.brand}{"\n"}
              <Text style={{ ...fonts.small, fontWeight: "700", fontSize: 12 }}>
                @{item?.user?.userName}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ButtonC
            onPress={handleknit}
            style={{
              paddingHorizontal: 20,
              borderColor: colors.body3,
              marginRight: 5,
            }}
            textStyle={{ fontSize: 13, fontWeight: "bold" }}
            title="KNIT IT"
          />

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableHighlight
                underlayColor={colors.body6}
                onPress={openMenu}
              >
                <EntypoIcons
                  name="dots-three-vertical"
                  size={20}
                  color={colors.textColor3}
                />
              </TouchableHighlight>
            }
          >
            {/* SHARE, REPORT, UNKNIT, LIKE */}
            <Menu.Item
              titleStyle={{ ...fonts.small }}
              style={{ height: 40, backgroundColor: colors.body }}
              // onPress={() => {}}
              title="Share"
            />

            <Menu.Item
              titleStyle={{ ...fonts.small }}
              style={{ height: 40, backgroundColor: colors.body }}
              onPress={() => {}}
              title="Report"
            />

            <Menu.Item
              titleStyle={{ ...fonts.small }}
              style={{ height: 40, backgroundColor: colors.body }}
              onPress={() => {}}
              title="Like"
            />
          </Menu>
        </View>
      </View>
      <View style={{ width: "100%", aspectRatio: 1, position: "relative" }}>
        {learnMore && (
          <Animated.View style={{ ...styles.overLay, ...animatedStyle }}>
            <Text style={{ ...fonts.small, color: colors.body }}>
              CLICK TO LEARN MORE ON THIS PRODUCT
            </Text>
            <ButtonC
              onPress={() => {
                Linking.openURL(devLink);
              }}
              style={{
                paddingHorizontal: 10,
                backgroundColor: colors.body,
                borderWidth: 0,
                marginTop: 9,
              }}
              title="LEARN MORE"
            />
          </Animated.View>
        )}

        <TouchableWithoutFeedback onPress={() => openOverlay()}>
          <Image
            style={styles.stock}
            // source={require("../../assets/stock.png")}
            source={{uri:item?.snapshot || ""}}
            snapshot
          />
        </TouchableWithoutFeedback>
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
  overLay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(0,0,0)",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
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
