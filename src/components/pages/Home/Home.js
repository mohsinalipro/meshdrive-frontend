import React, { Component } from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import File from "../../File";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="d-flex flex-row">
          <div class="ui vertically divided grid">
            <div className="three column row">
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
            </div>
          </div>

          <SideBar />
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
