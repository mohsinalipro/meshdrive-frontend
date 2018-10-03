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

  handleContextMenuClick = e => {
    console.log(e);
    console.log(this.props.id);
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
            (this.state.isActive
              ? " active bg-gray border-primary text-primary"
              : "")
          }
          onClick={this.toggleActive}
        >
          <ContextMenuTrigger id={this.props.id}>
            <div className="d-flex flex-nowrap flex-wrap align-items-center">
              <div className="file-item--icon  p-2">
                <img src={require("./folder-icon.png")} alt="" />
              </div>
              <div className="d-flex flex-column p-1 file-item--info">
                <div className="file-item--title">{this.props.name}</div>
                <div className="file-item--size text-muted">
                  {/* {this.props.size} */}
                  12 Kb
                </div>
              </div>
              <div className="file-item--drive-icon align-self-start ml-auto mt-1 mr-2 m-1">
                {driveIcon}
              </div>
            </div>
          </ContextMenuTrigger>
        </div>

        <ContextMenu id={this.props.id}>
          <MenuItem data={{ foo: "bar" }} onClick={this.handleContextMenuClick}>
            Download
          </MenuItem>
          <MenuItem data={{ foo: "bar" }} onClick={this.handleContextMenuClick}>
            Delete
          </MenuItem>
          <MenuItem divider />
          <MenuItem data={{ foo: "bar" }} onClick={this.handleContextMenuClick}>
            Details
          </MenuItem>
        </ContextMenu>
      </React.Fragment>
    );
  }
}

export default FileItem;
