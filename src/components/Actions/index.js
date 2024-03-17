import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons"
import ButtonActions from "../ButtonActions";

export default function Actions() {
  return (
    <ScrollView style={styles.container}
      horizontal={true} showsHorizontalScrollIndicator={false}>
      <ButtonActions name="addfolder" label="Entradas" />
      <ButtonActions name="tagso" label="Compras" />
      <ButtonActions name="creditcard" label="Carteira" />
      <ButtonActions name="barcode" label="Boletos" />
      <ButtonActions name= "setting" label="Contas"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginTop: 14,
    marginBottom: 18,
    paddingStart: 14,
    paddingEnd: 14,
  },
});