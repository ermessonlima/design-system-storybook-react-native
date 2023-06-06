import React from "react";
import { FlatList, Image, SafeAreaView } from "react-native";
import { Box, Title, Header } from "@react-native-ui/react-native";
import { useNavigation } from "@react-navigation/native";

export function Home2() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Header logo={<Image source={require('./IMG_1443.png')} />}   onPress={()=> navigation.goBack()}/>
      <FlatList
        ListHeaderComponent={() => <Title text="Séries"  />}
        contentContainerStyle={{ width: "100%", padding: 20 }}
        data={[1, 2, 3, 4]}
        renderItem={({ item, index }) => (
          <Box
             onPress={() =>  navigation.navigate('Home3' as never)}
            text={`${index +1 } ano do Ensino Fundamental`}
            textSubtitle="Instituto Capibaribe"
            textColor="#274A67"
            textDescriptionColor="#16316B"
            color="white"
          />
        )}
      />
    </SafeAreaView>
  );
}
