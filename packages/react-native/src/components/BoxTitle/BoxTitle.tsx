import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

 

export const BoxTitle = ({ text,  textColor }: any) => {
  return (
    <View style={ styles.container }>
      <Text style={[styles.text,{color:textColor}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginBottom: 5,
  },
  text: { color: 'white',
  fontSize: 16,
  fontWeight: '500',
},
});
