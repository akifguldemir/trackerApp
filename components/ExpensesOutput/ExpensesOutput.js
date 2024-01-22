import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date:  new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.92,
    date:  new Date('2022-05-31')
  },
  {
    id: 'e3',
    description: 'Some  bananas',
    amount: 49.59,
    date:  new Date('2022-07-05')
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.99,
    date:  new Date('2021-12-19')
  },
  {
    id: 'e5',
    description: 'A pair of trousers',
    amount: 89.92,
    date:  new Date('2022-05-31')
  },
  {
    id: 'e6',
    description: 'Some  bananas',
    amount: 49.59,
    date:  new Date('2022-07-05')
  },
  {
    id: 'e7',
    description: 'A pair of shoes',
    amount: 59.99,
    date:  new Date('2021-12-19')
  },
  {
    id: 'e8',
    description: 'A pair of trousers',
    amount: 89.92,
    date:  new Date('2022-05-31')
  },
  {
    id: 'e9',
    description: 'Some  bananas',
    amount: 49.59,
    date:  new Date('2022-07-05')
  },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 24,
    paddingTop:24,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
