import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Example extends React.Component {
  render() {
    return (
      <div id="sidebar-left-content">
        <ButtonGroup vertical className="d-flex">
          <NavLink exact to="/" className="btn btn-light light d-block">
            Home
          </NavLink>
          <NavLink to="/uploadfile" className="btn btn-light light">
            Upload File
          </NavLink>
        </ButtonGroup>
      </div>
    );
  }
}
