import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  // let filteredInfoText = '2019,2021 & 2022'
  // if (filteredYear === '2019') {
  //   filteredInfoText = '2020,2021 & 2022'
  // } else if (filteredYear === '2021') {
  //   filteredInfoText = '2019,2020 & 2022'
  // } else {
  //   filteredInfoText = '2019,2020 & 2021'
  // }
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })








  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
      {filteredExpenses.length === 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        <ExpensesChart expenses ={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

    </Card>
  )
}

export default Expenses;