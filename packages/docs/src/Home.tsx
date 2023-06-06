import React from "react";
import { FlatList, Image, SafeAreaView } from "react-native";
import { Box, Title, Header } from "@react-native-ui/react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Header   
        logo={<Image source={require('./IMG_1443.png')} />}
      />
      <FlatList
        ListHeaderComponent={() => <Title text="Escolas" textColor="red" />}
        contentContainerStyle={{ width: "100%", padding: 20 }}
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <Box
          onPress={() =>  navigation.navigate('Home2' as never)}
            text="Instituto Capibaribe"
            textSubtitle="Analise o desempenho das suas turmas 
            baseado na execução dos exercícios"
            textColor="#274A67"
            textDescriptionColor="#16316B"
            color="white"
          />
        )}
      />
    </SafeAreaView>
  );
}
