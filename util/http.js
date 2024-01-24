import axios, {isCancel, AxiosError} from 'axios';
export function storeExpense(expenseData) {
    console.log(expenseData)
  axios.post(
    "https://tracker-app-64c50-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
