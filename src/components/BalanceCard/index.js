import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function BalanceCard({ type, symbol, value }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{type}</Text>
      <View style={styles.content}>
        <Text style={styles.currency}>{symbol}</Text>
        <Text style={type === "Gastos" ? styles.expense : styles.income}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {

  },

  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    color: "#dadada",
    marginRight: 6
  },

  income: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expense: {
    fontSize: 22,
    color: "#e74c3c",
  }
})