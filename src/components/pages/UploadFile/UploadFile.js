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

  handleFileChange = event => {
    this.setState({ file: event.target.value });
  };

  handleDriveChange = event => {
    this.setState({ drive: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    const file = {
      id: uuid,
      name: this.state.file,
      drive: this.state.drive
    };
    this.props.uploadFile(file);
    this.setState({ file: "" });
    alert("File uploaded");
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row w-100">
          <div className="flex-grow-1 d-flex flex-row">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="file">File</Label>
                <Input
                  type="file"
                  name="file"
                  id="file"
                  value={this.state.file}
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
