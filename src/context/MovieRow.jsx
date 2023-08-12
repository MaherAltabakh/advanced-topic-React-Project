import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const user = useContext(UserContext);
  const cart = useContext(CartContext);
  console.log("Cart Context:", cart);

  return <div>Movie Row: {user.currentUser ? user.currentUser.name : ""}</div>;
}

export default MovieRow;
