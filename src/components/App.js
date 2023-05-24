import React from 'react'
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"
  const mode = !isOn? "Dark Mode":"Light Mode"
  
  function handleClick(){
    setIsOn((isOn) => !isOn)
    console.log(isOn)
    
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
