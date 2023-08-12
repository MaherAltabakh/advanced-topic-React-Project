import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import Login from "./context/Login";
import CartContext from "./context/cartContext";
import UserContext from "./context/userContext";
class App extends Component {
  state = { currentUser: null };
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username); //send info to the server
    const user = { name: "Maher" }; //get info from the server
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
