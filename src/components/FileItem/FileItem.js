import React, { Component } from "react";
import FAIcon from "../../components/FontAwesomeIcon/FontAwesomeIcon";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "./styles.css";
class FileItem extends Component {
  state = {
    isActive: false
  };

  toggleActive = e => {
    this.setState(prevState => {
      return {
        isActive: !prevState.isActive
      };
    });
  };
  render() {
    console.log(this.props);
    let driveIcon = null;
    switch (this.props.drive) {
      case "googledrive":
        driveIcon = <FAIcon icon="google" fab />;
        break;
      case "dropbox":
        driveIcon = <FAIcon icon="dropbox" fab />;
        break;
      case "onedrive":
        driveIcon = <FAIcon icon="cloud" />;
        break;
    }
    return (
      <React.Fragment>
        <div
          className={
            "m-2 file-item" +
            (this.state.isActive ? " active bg-gray border-secondary" : "")
          }
          onClick={this.toggleActive}
        >
          <ContextMenuTrigger  id={this.props.id}>
            <div className="d-flex flex-wrap align-items-center">
              <div>
                <img src="https://via.placeholder.com/64x64" alt="" />
              </div>
              <div className="d-flex flex-column p-1">
                {driveIcon}
                <div>{this.props.name}</div>
                <div>{this.props.size}</div>
              </div>
            </div>
          </ContextMenuTrigger>
        </div>

        <ContextMenu  id={this.props.id}>
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            Download
          </MenuItem>
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            Delete
          </MenuItem>
          <MenuItem divider />
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            Details
          </MenuItem>
        </ContextMenu>
      </React.Fragment>
    );
  }
}

export default FileItem;
