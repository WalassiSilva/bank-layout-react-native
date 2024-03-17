import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons"

export default function ButtonActions({name, label}) {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name={name} size={26} color="#000" />
      </View>

      <Text style={styles.labelButton}>{label}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },

  areaButton: {
    width: 60,
    height: 60,
    backgroundColor: "#e5e5e5",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  labelButton: {
    fontWeight: "bold",
  }

});