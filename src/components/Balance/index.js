import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BalanceCard from "../BalanceCard";
import { MotiView } from "moti";

export default function Balance() {
  return (
    <MotiView style={styles.container}
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", duration: 900, dalay:300 }}>
      <BalanceCard
        type="Saldo"
        symbol="R$"
        value="90,000.12" />
      <BalanceCard
        type="Gastos"
        symbol="R$"
        value="390.00" />
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  }
});