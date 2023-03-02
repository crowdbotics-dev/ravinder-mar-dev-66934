import { FlatList } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.VujVaZSi}>Lorem ipsum…</Text><FlatList style={styles.AasCylNV} renderItem={({
        item
      }) => <View style={styles.IEEtQsCD}></View>} ItemSeparatorComponent={() => <View style={styles.ppkiPGHx} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VujVaZSi: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  AasCylNV: {
    position: "absolute",
    width: 100,
    height: 150
  },
  IEEtQsCD: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ppkiPGHx: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;