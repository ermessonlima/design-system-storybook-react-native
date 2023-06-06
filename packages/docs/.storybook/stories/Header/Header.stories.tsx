import React from "react";
import { Image, Text, View } from "react-native";
import { Header } from "@react-native-ui/react-native";

const HeaderMeta = {
  title: "Header",
  component: Header,
  argTypes: {
    onPress: { action: "pressed the button" },
    img: { control: 'object' }, // Define que o img é um objeto
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

export default HeaderMeta;

export const Primary = {
  args: { 
    logo : <Text>Logo</Text>,
    onPress: false,
  },
};
