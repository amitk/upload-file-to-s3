import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { uploadFile } from "react-s3";
import { BUCKET_NAME, ACCESS_KEY, SECRET_KEY, REGION } from "./constants.js";
import "./App.css";

const config = {
  bucketName: BUCKET_NAME,
  dirName: "/images",
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY
};

class UploadToS3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      fileURL: ""
    };
  }

  handleFileSelect = event => {
    this.setState({ file: event.target.files[0] });
  };

  uploadFileToS3 = () => {
    uploadFile(this.state.file, config)
      .then(response => {
        this.setState({ fileURL: response.location });
      })
      .catch(error => {
        console.log(error, "error");
      });
  };

  render() {
    return (
      <>
        <Input
          type="file"
          name="Select file"
          className="button-position"
          onChange={this.handleFileSelect}
        />
        <Button onClick={this.uploadFileToS3}>Upload File</Button>
      </>
    );
  }
}

export default UploadToS3;
