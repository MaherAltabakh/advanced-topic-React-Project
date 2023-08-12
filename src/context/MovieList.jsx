import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <div>
            Movie List {user.currentUser ? user.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default MovieList;
