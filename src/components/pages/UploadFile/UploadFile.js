import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import SideBar from "../../Layout/SideBar/SideBar";

export default class UploadFile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row w-100">
          <div className="flex-grow-1 d-flex flex-row">
            <Form>
              <FormGroup>
                <Label for="file">File</Label>
                <Input type="file" name="file" id="file" />
                <FormText color="muted">Select a file to upload.</FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label for="drive">Select Drive</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="drive" value="googledrive" />{" "}
                    Google Drive
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="drive" value="onedrive" />{" "}
                    OneDrive
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="drive" value="dropbox" /> Dropbox
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
