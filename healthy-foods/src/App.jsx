import InputHandler from "./assets/InputHandler";
import Container from "./Container";
import List from "./List";
import styles from "./App.module.css";
import { useState } from "react";
import ErrorHandler from "./ErrorHandler";

function App() {
  // let items = [
  //   "Not Burgers",
  //   "Lentels",
  //   "Vegetables",
  //   "Milk",
  //   "Apples",
  //   "Mango",
  //   "Watermelon",
  //   "Orange",
  //   "Banana",
  //   "Grapes",
  // ];

  let [items, setItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let val = event.target.value;
      let newItems = [...items, val];
      setItems(newItems);
      event.target.value = "";
    }
  };
  const buttonOnClick = (event, item) => {
    console.log(`${item} is being bought.`);
  };

  return (
    <Container>
      <h1 className={styles.heading}>Healthy Foods</h1>
      <InputHandler eventOnKeyDown={OnKeyDown}></InputHandler>
      <ErrorHandler items={items}></ErrorHandler>
      <ul className="list-group">
        {items.map((item) => (
          <List
            key={item}
            item={item}
            buttonOnClick={(event) => buttonOnClick(event, item)}
          ></List>
        ))}
      </ul>
    </Container>
  );
}

export default App;
