import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import { api } from "./services/api";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      username: null,
      user_group_id: null,
      newUsername: "Select a new Username",
      newPass: "Select a new Password",
      newUserGroupID: "Select the group ID"
    };
  }

  componentDidMount() {
    api.auth.getCurrentUser().then(user => {
      this.setState({
        username: user.user_id.username,
        user_group_id: user.user_id.user_group_id
      });
    });
    console.log(this.state.username);
  }

  handleReadCSV = data => {
    console.log(data.data[1]);
    for (let i = 1; i < data.data.length; i++) {
      let csv_parent_id = data.data[i][0];
      let csv_product_name = data.data[i][1];
      let csv_department = data.data[i][2];
      let csv_style_id = data.data[i][3];
      let csv_color_id = data.data[i][4];
      let csv_product_copy = data.data[i][5];
      let csv_product_main_image = data.data[i][6];
      let csv_fit = data.data[i][7];
      let csv_fabrication = data.data[i][8];
      let csv_style_type = data.data[i][9];
      let csv_product_load_id = data.data[i][10];
      console.log(
        csv_parent_id,
        csv_product_name,
        csv_department,
        csv_style_id,
        csv_color_id,
        csv_product_copy,
        csv_product_main_image,
        csv_fit,
        csv_fabrication,
        csv_style_type,
        csv_product_load_id
      );

      fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          parent_id: csv_parent_id,
          name: csv_product_name,
          department: csv_department,
          style_id: csv_style_id,
          color_id: csv_color_id,
          product_copy: csv_product_copy,
          product_main_image: csv_product_main_image,
          fit: csv_fit,
          fabrication: csv_fabrication,
          style_type: csv_style_type,
          product_load_id: csv_product_load_id
        })
      }).then(function(resp) {
        if (Math.floor(resp.status / 200) === 1) {
          console.log("successful");
        } else {
          console.log("ERROR", resp);
        }
      });
    }
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleImportOffer = () => {
    this.fileInput.current.click();
  };

  handleNewUserSubmit = () => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.newUsername,
        pass: this.state.newPass,
        user_group_id: this.state.newUserGroupID
      })
    }).then(function(resp) {
      if (Math.floor(resp.status / 200) === 1) {
        console.log("successful");
      } else {
        console.log("ERROR", resp);
      }
    });
  };

  updateUsernameValue = e => {
    const newValue = e.target.value;
    this.setState({
      newUsername: newValue
    });
  };

  updateUserGroupValue = e => {
    const newValue = e.target.value;
    this.setState({
      newUserGroupID: newValue
    });
  };

  updatePassValue = e => {
    const newValue = e.target.value;
    this.setState({
      newPass: newValue
    });
  };

  render() {
    let adminToggle = this.state.user_group_id;
    return (
      <div>
        {this.state.username}
        {this.state.user_group_id}
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{ display: "none" }}
          onError={this.handleOnError}
        />
        {adminToggle === 1 && (
          <button onClick={this.handleImportOffer}>Import</button>
        )}
        {adminToggle === 1 && (
          <button onClick={this.handleNewUserSubmit}>Create New User</button>
        )}
        {adminToggle === 1 && (
          <input
            type="text"
            className="form-control"
            value={this.state.newUsername}
            name="username"
            placeholder={this.state.newUsername}
            onChange={this.updateUsernameValue}
          />
        )}
        {adminToggle === 1 && (
          <input
            type="text"
            className="form-control"
            value={this.state.newUserGroupID}
            name="groupID"
            placeholder={this.state.newUserGroupID}
            onChange={this.updateUserGroupValue}
          />
        )}
        {adminToggle === 1 && (
          <input
            type="text"
            className="form-control"
            value={this.state.newPass}
            name="pass"
            placeholder={this.state.newPass}
            onChange={this.updatePassValue}
          />
        )}
        <button onClick={() => this.handleNewUserSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Profile;
