import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Body from "./components/body";
import "./Product.json";

export default function App() {
  const [cartItem, updateCartItem] = useState([]);
  console.log(cartItem.length);
  console.log("this is updated cartItem", cartItem);
  return (
    <div className="App">
      <Header cartItem={cartItem} />
      <Body updateCartItem={updateCartItem} cartItem={cartItem} />
    </div>
  );
}
