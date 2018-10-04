import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import SideBar from "../../Layout/SideBar/SideBar";
import uuid from "uuid";
import uploadFile from "../../../actions/files/uploadFile";
import { connect } from "react-redux";

class UploadFile extends Component {
  state = {
    file: "",
    drive: ""
  };

  // correction made
  handleFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  handleDriveChange = event => {
    this.setState({ drive: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);

    const fileWithInfo = {
      file: this.state.file,
      drive: this.state.drive
    };

    console.log(fileWithInfo);
    this.props.uploadFile(fileWithInfo);
    this.setState({ file: "" });
    alert("File uploaded");
  };

  render() {
    return (
      <React.Fragment>
        <div id="page" className="d-flex flex-row w-100">
          <h1>Upload File</h1>
          <div className="flex-grow-1 d-flex flex-row p-4">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="file">File</Label>
                <Input
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.handleFileChange}
                />
                <FormText color="muted">Select a file to upload.</FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label for="drive">Select Drive</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="drive"
                      value="googledrive"
                      onChange={this.handleDriveChange}
                    />{" "}
                    Google Drive
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="drive"
                      value="onedrive"
                      onChange={this.handleDriveChange}
                    />{" "}
                    OneDrive
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="drive"
                      value="dropbox"
                      onChange={this.handleDriveChange}
                    />{" "}
                    Dropbox
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>

          {/* <SideBar right>Right UploadFile sidebar</SideBar> */}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { uploadFile }
)(UploadFile);
