import React, { Component } from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import { Container } from "reactstrap";
import File from "../../File";
import FileItem from "../../FileItem/FileItem";
import {connect} from 'react-redux';
import fetchFiles from '../../../actions/fetchFiles';
class Home extends Component {
  render() {
    const files = this.props.files;
    /*[
      {
        fileID: 32,
        fileExt: "folder",
        fileName: "File Name 1",
        fileSize: 124,
        drive: "google"
      },
      {
        fileID: 14,
        fileExt: "folder",
        fileName: "File Name 2",
        fileSize: 124,
        drive: "onedrive"
      },
      {
        fileID: 1,
        fileExt: "folder",
        fileName: "File Name 3",
        fileSize: 124,
        drive: "dropbox"
      }
    ];*/

    const mapFiles = files.map(file => (
      <FileItem
        key={file.fileID}
        name={file.fileName}
        size={file.fileSize}
        drive={file.drive}
      />
    ));
    return (
      <React.Fragment>
        <div class="d-flex flex-row w-100">
          {/* <div class="ui vertically divided grid">
            <div className="three column row">
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
              <File name="File Name" size="24.5 Kb" drive="From Google Drive" />
            </div>
          </div> */}

          <div class="flex-grow-1 d-flex flex-row">{mapFiles}</div>

          <SideBar />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state)
{
  return (
    {
      files : state.files
    }
  )
}
export default connect(mapStateToProps,{fetchFiles})(Home);
