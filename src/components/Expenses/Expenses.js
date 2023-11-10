import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  let filteredInfoText = '2019,2021 & 2022'
  if (filteredYear === '2019') {
    filteredInfoText='2020,2021 & 2022'
  } else if (filteredYear === '2021') {
    filteredInfoText='2019,2020 & 2022'
  } else {
    filteredInfoText='2019,2020 & 2021'
  }
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <p>Data for Years {filteredInfoText} is hidden.</p>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  )
}

export default Expenses;