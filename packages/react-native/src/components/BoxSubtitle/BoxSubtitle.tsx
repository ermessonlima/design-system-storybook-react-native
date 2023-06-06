import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const BoxSubtitle = ({ text, textDescriptionColor }: any) => {
  return (
    <View>
      <Text style={[styles.text, { color: textDescriptionColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%",
    height: 100,
  },
  text: { color: "white", fontSize: 11 ,
  opacity: 0.7
},
});
