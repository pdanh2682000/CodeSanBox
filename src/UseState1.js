import "./styles.css";
import { useState } from "react";

const orders = [100, 200, 300];
export default function App() {
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(() => {
    return orders.reduce((total, value) => (total += value));
  });
  const [info, setInfo] = useState({
    name: "PDA",
    age: 22
  });

  const handleOnClickCounter = () => {
    setCounter(counter + 1);
  };

  const handleOnClickTotal = () => {
    setTotal(total + 1);
  };

  // const handleOnClickActive = () => {
  //   setInfo({
  //     ...info,
  //     country: "VN",
  //   });
  // }

  const handleOnClickLogicActive = () => {
    setInfo((pre) => {
      // logic
      pre.age += 20;
      return { ...pre };
    });
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleOnClickCounter}>Click me</button>
      <h1>{total}</h1>
      <button onClick={handleOnClickTotal}>Click me</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleOnClickLogicActive}>Click me</button>
    </div>
  );
}
