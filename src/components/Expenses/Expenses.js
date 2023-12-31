import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";
function Expenses(props) {
  const [year, setYear] = React.useState(2020);

  const onFilterByYear = (year) => {
    console.log("in Expenses.js");
    console.log(year);
    setYear(year);
  };

  return (  
    <Card className="expenses">
      <ExpensesFilter onFilterByYear={onFilterByYear} year={year} />

      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
export default Expenses;
