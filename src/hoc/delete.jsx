import React, { Component } from "react";
import withTooltip from "./withTooltip";
import { Link, Navigate, useLocation } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <div>
        Hi, I am the movie
        {this.props.showTooltip && <div>Some tooltip</div>} <br />
        <Link to="https://www.google.com">Home</Link>
      </div>
    );
  }
}

export default withTooltip(Movie);
