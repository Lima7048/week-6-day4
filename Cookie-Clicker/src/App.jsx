import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import ResetButton from "./components/ResetButton";
import Shopitems from "./components/Shopitems";
// import Grandma from "./components/Grandma";

export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState();
  const [Grandma, setGrandma] = useState(0);
  const [Cookie, setCookie] = useState(0);
  const [Cake, setCake] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
    // localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
  }, [count]);

  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );

  function incrementCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(0);
  }

  function BuyCookie() {
    setCount(count - 1);
    // BuyCookie((Cookie) => Cookie + 1);
  }

  function BuyGrandma() {
    setCount(count - 10);
    setGrandma(Grandma + 1);
  }

  function BuyCake() {
    setCount(count - 100);
    setCake(Cake + 1);
  }

  return (
    <div>
      <p> Cookies.(*・‿・)ノ⌒*:･ﾟ✧</p>
      <Timer count={count} setCount={setCount} />
      {/* <ResetButton functiontoChangeCount={setCount} /> */}
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decreaseCounter}>Delete cookie</button>
      <button onClick={resetCounter}>Reset</button>{" "}
      <button onClick={BuyCookie}>BUY Cookie. Price: 1</button>
      <button onClick={BuyGrandma}>BUY Grandma. Price: 10</button>
      <button onClick={BuyCake}>BUY Cake. Price: 100</button>
      <Shopitems />
    </div>
  );
}
