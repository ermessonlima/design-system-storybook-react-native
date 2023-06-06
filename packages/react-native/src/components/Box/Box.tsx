import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { BoxSubtitle } from "../BoxSubtitle/BoxSubtitle";

export type ButtonProps = {
  color: "red" | "green" | "blue";
};

export const Box = ({
  onPress,
  text,
  textSubtitle,
  color,
  textColor, 
}: any) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <View
      style={{
        width: "100%",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <TouchableHighlight
        style={[
          styles.container,
          {
            backgroundColor: color,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.8}
        underlayColor="#37639D"
        onShowUnderlay={() => {
          setIsPressed(true);
        }}
        onHideUnderlay={() => {
          setIsPressed(false);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <BoxTitle text={text} textColor={isPressed ? "white" : textColor} />
            <BoxSubtitle
              text={textSubtitle}
              textDescriptionColor={isPressed ? "white" : textColor}
            />
          </View>

          <MaterialIcons
            name="arrow-forward-ios"
            color={isPressed ? "white" : textColor}
            size={24}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 14,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  text: { color: "white" },
});
