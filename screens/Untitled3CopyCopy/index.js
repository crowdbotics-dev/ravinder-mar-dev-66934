import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3CopyCopy = ({
  navigation
}) => {
  const user = useSelector(state => state.user);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={{}}><Pressable onPress={{}}></Pressable></Pressable><FlatList style={styles.iLpWYzbI} renderItem={({
        item
      }) => <Pressable onPress={{}}><Pressable onPress={() => {
          navigation.navigate("Untitled1");
        }}><View style={styles.wJQrWfms}><Text style={styles.AAOzWKpt}>TEsting World </Text></View></Pressable></Pressable>} ItemSeparatorComponent={() => <View style={styles.NpDTWHVc} />} data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={(item, index) => index}></FlatList><Text style={styles.VSUHCUgz}>Testing world</Text><FlatList style={styles.gkRAufrB} renderItem={({
        item
      }) => <View style={styles.lWIbiQLO}><Text style={styles.jGSHuYwu}>{user.email}</Text></View>} ItemSeparatorComponent={() => <View style={styles.YfMoylwi} />} data={[1, 2, 3, 4, 5]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  OWIgLtzO: {
    width: 90,
    height: 62
  },
  iIpFkXww: {
    width: 45,
    height: 45,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "right",
    position: "relative",
    top: 62,
    left: 25,
    transform: "rotate(360deg)",
    color: "#c62323",
    opacity: 1
  },
  iLpWYzbI: {
    position: "absolute",
    width: 100,
    height: 150
  },
  wJQrWfms: {
    width: 90,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 0
  },
  NpDTWHVc: {
    backgroundColor: "#000000",
    height: 1
  },
  VSUHCUgz: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  AAOzWKpt: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  gkRAufrB: {
    position: "absolute",
    width: 100,
    height: 150,
    left: 146,
    top: 293
  },
  lWIbiQLO: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  YfMoylwi: {
    backgroundColor: "#000000",
    height: 1
  },
  jGSHuYwu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled3CopyCopy;