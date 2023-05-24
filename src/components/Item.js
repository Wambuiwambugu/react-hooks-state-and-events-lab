import React, { useState } from "react";


function Item({ name, category }) {
  const [cart, setCart] = useState("");
  const btn = !cart? "Add to Cart": "Remove From Cart"
  const style = !cart? "add":"remove"

  function handleAddToCart(){
    if (cart === ""){
      setCart("in-cart")
    }
    else {
      setCart("")
    }
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={style} onClickCapture={handleAddToCart} >{btn}</button>
    </li>
  );
}

export default Item;
