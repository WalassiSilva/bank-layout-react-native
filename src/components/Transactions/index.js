import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView, MotiText, AnimatePresence } from "moti";

export default function Transactions({ data }) {

  const [showValue, setShowValue] = useState(false);

  function handleShowValue() {
    setShowValue(!showValue);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowValue}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content} >
        <AnimatePresence exitBeforeEnter>
          <Text style={styles.title}>
            {data.title}
          </Text>
        </AnimatePresence>
        {showValue ? <MotiText style={data.type === 0 ? styles.expense : styles.income}
          from={{translateX: 100}}
          animate={{translateX: 0}}
          transition={{type:"timing", duration: 500}}>

          {data.type === 0 ? `R$ -${data.value}` : `R$ ${data.value}`}
        </MotiText> :
          (
            <AnimatePresence exitBeforeEnter>
              <View style={styles.skeleton}></View>
            </AnimatePresence>
          )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: "#aaa",
    fontSize: 12
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },

  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },

  expense: {
    fontWeight: "bold",
    color: "#e74c3c"
  },

  income: {
    fontWeight: "bold",
    color: "#2ecc71"
  },

});