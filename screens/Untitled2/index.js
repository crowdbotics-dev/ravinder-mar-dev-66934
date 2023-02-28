import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={{}}><Pressable onPress={() => {
          navigation.navigate("Untitled1");
        }}><View style={styles.ztrtIcPp}></View></Pressable></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ztrtIcPp: {
    height: 60,
    width: 140,
    backgroundColor: "#9f5252",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled2;