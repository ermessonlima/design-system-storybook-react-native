import React from "react";
import { View } from "react-native";
import { Box } from "@react-native-ui/react-native";

const BoxMeta = {
  title: "Box",
  component: Box,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default BoxMeta;

export const Primary = {
  args: {
    text: "Tdasdasda",
    color: "white",
    textColor: "#274A67",
    textSubtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at facilisis orci. Maecenas a sem euismod, dictum velit eget, fermentum nibh. Ut vulputate quam lorem, vitae maximus est elementum in.",
 
  },
};

 