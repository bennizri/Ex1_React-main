import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "Lucky Charms", price: 20, Image: "luckycharms.jpg" },
    { title: "Cheerios", price: 15, Image: "cheerios.jpg" },
    { title: "Reese Puffs", price: 18, Image: "reesespuffs.jpg" },
    { title: "Cookie Crisp", price: 17, Image: "cookiecrisp.jpg" },
    { title: "Smorz", price: 16, Image: "smorz.jpg" },
  ];

  return (
    <div>
      <h2>&nbsp;Cereals Site</h2>
      <ExpenseItem
        title={expense[0].title}
        price={expense[0].price}
        Image={expense[0].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        price={expense[1].price}
        Image={expense[1].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        price={expense[2].price}
        Image={expense[2].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        price={expense[3].price}
        Image={expense[3].Image}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[4].title}
        price={expense[4].price}
        Image={expense[4].Image}
      ></ExpenseItem>
    </div>
  );
}

export default App;
