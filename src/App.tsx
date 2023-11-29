import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Tomato", amount: 4, category: "Groceries" },
    { id: 2, description: "Mop", amount: 10, category: "Utilities" },
    {
      id: 3,
      description: "Movie ticket",
      amount: 8,
      category: "Entertainment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  //jeśli uzytkownik wybrał kategorię (nie jest pustym stringiem) to filtruj kategorię zgodną z wyborem, w przeciwnym razie wyświetl wydatki
  //nie uzywamy state, poniewaz mozna to uzyskac z istniejących states

  if (expenses.length === 0) return null; //jeśli nie ma wydatków nie zwracaj tabeli
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        // zwracamy wszystkie wydatki oprócz tego z id klikniętym
      />
    </div>
  );
}
export default App;
