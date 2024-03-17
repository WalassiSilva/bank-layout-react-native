import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import Actions from "../../components/Actions";


const transactions = [
  {
    id: 1,
    title: "Feira",
    value: "27.00",
    date: "16/03/2024",
    type: 0
  },
  {
    id: 2,
    title: "Salário",
    value: "1,000.00",
    date: "16/03/2024",
    type: 1
  },
  {
    id: 3,
    title: "Sorvete",
    value: "34.00",
    date: "16/03/2024",
    type: 0
  }
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Walassi" />
      <Balance />

      <Actions />

      <Text style={styles.title}>Últimas transações</Text>

      <FlatList style={styles.transactions}
        data={transactions}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Transactions data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  title: {
    margin: 14,
    fontSize: 18,
    fontWeight: "bold",
  },

  transactions: {
    marginStart: 14,
    marginEnd: 14,
  }
})