import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Modal from "react-awesome-modal";

export class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editVisible: false,
      logSelected: 1,
      status: "none",
      priority: "none",
      issue_type: "none",
      issue_class: "none",
      site: "none",
      division: "none",
      environment: "none",
      log_body: "none",
      assigned: "none",
      cc: "none",
      due_date: "none",
      data: this.props.data
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  deleteModal(id) {
    console.log(id);
    this.setState({
      visible: false
    });
    fetch("http://localhost:3000/product_logs" + "/" + id, {
      method: "delete"
    })
      .then(response => response.json())
      .then(json => console.log(json.message))
      .catch(err => {
        console.error(err);
      });
    console.log("deleted");
  }

  closeEditModal() {
    this.setState({
      editVisible: false
    });
  }

  handleNewTicket() {
    console.log(this.props.product[0].id);
    this.setState({
      editVisible: true,
      logSelected: 0,
      status: "none",
      priority: "none",
      issue_type: "none",
      issue_class: "none",
      site: "none",
      division: "none",
      environment: "none",
      log_body: "none",
      assigned: "none",
      cc: "none",
      due_date: "none"
    });
  }

  openEditModal() {
    this.setState({
      visible: false,
      editVisible: true
    });
  }

  updateLogBodyValue = e => {
    const newValue = e.target.value;
    this.setState({
      log_body: newValue
    });
  };

  updateDivisionValue = e => {
    const newValue = e.target.value;
    this.setState({
      division: newValue
    });
  };

  updateSiteValue = e => {
    const newValue = e.target.value;
    this.setState({
      site: newValue
    });
  };

  updateIssueClassValue = e => {
    const newValue = e.target.value;
    this.setState({
      issue_class: newValue
    });
  };

  updateIssueTypeValue = e => {
    const newValue = e.target.value;
    this.setState({
      issue_type: newValue
    });
  };

  updateIssueClassValue = e => {
    const newValue = e.target.value;
    this.setState({
      issue_class: newValue
    });
  };

  updateIssueClassValue = e => {
    const newValue = e.target.value;
    this.setState({
      issue_class: newValue
    });
  };

  updateEnvironmentValue = e => {
    const newValue = e.target.value;
    this.setState({
      environment: newValue
    });
  };

  updateStatusValue = e => {
    const newValue = e.target.value;
    this.setState({
      status: newValue
    });
  };

  updatePriorityValue = e => {
    const newValue = e.target.value;
    this.setState({
      priority: newValue
    });
  };

  updateAssignedValue = e => {
    const newValue = e.target.value;
    this.setState({
      assigned: newValue
    });
  };

  updateCCValue = e => {
    const newValue = e.target.value;
    this.setState({
      cc: newValue
    });
  };

  updateDueDateValue = e => {
    const newValue = e.target.value;
    this.setState({
      due_date: newValue
    });
  };

  handleClick = () => {
    console.log("potato");
  };

  handleRowClicked = row => {
    console.log(`${row.id} was clicked!`);
    console.log(`${row.log_body}`);
    this.setState({
      logSelected: row.id,
      status: row.status,
      priority: row.priority,
      issue_type: row.issue_type,
      issue_class: row.issue_class,
      site: row.site,
      division: row.division,
      environment: row.environment,
      log_body: row.log_body,
      assigned: row.assigned,
      cc: row.cc,
      due_date: row.due_date
    });
    this.openModal();
  };

  submitLog = id => {
    console.log("submitted");

    if (this.state.logSelected !== 0) {
      console.log("PATCH");
      fetch("http://localhost:3000/product_logs" + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          status: this.state.status,
          priority: this.state.priority,
          issue_type: this.state.issue_type,
          issue_class: this.state.issue_class,
          site: this.state.site,
          division: this.state.division,
          environment: this.state.environment,
          log_body: this.state.log_body,
          assigned: this.state.assigned,
          cc: this.state.cc,
          due_date: this.state.due_date
        })
      }).then(function(resp) {
        if (Math.floor(resp.status / 200) === 1) {
          console.log("Great ");
        } else {
          console.log("ERROR", resp);
        }
      });
      console.log("here");
    } else {
      console.log("POST");
      fetch("http://localhost:3000/product_logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          status: this.state.status,
          priority: this.state.priority,
          issue_type: this.state.issue_type,
          issue_class: this.state.issue_class,
          site: this.state.site,
          division: this.state.division,
          environment: this.state.environment,
          log_body: this.state.log_body,
          assigned: this.state.assigned,
          cc: this.state.cc,
          due_date: this.state.due_date,
          color_id: this.props.product[0].color_id,
          department: this.props.product[0].department,
          fabrication: this.props.product[0].fabrication,
          fit: this.props.product[0].fit,
          name: this.props.product[0].name,
          parent_id: this.props.product[0].parent_id,
          product_copy: this.props.product[0].product_copy,
          product_id: this.props.product[0].id,
          style_id: this.props.product[0].style_id
        })
      }).then(function(resp) {
        if (Math.floor(resp.status / 200) === 1) {
          console.log("Great ");
        } else {
          console.log("ERROR", resp);
        }
      });
    }
  };

  render() {
    console.log(this.props.data);

    const data = this.props.data;

    const columns = [
      {
        name: "ID",
        selector: "id",
        sortable: true,
        width: "40px"
      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Priority",
        selector: "priority",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Issue Type",
        selector: "issue_type",
        sortable: true,
        right: true,
        width: "120px"
      },
      {
        name: "Issue Class",
        selector: "issue_class",
        sortable: true,
        right: true,
        width: "140px"
      },
      {
        name: "Site",
        selector: "site",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Division",
        selector: "division",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Environment",
        selector: "environment",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Action Request",
        selector: "log_body",
        sortable: true,
        right: true,
        grow: 120
      },
      {
        name: "Assigned",
        selector: "assigned",
        sortable: true,
        right: true,
        width: "120px"
      },
      {
        name: "CC",
        selector: "cc",
        sortable: true,
        right: true
      },
      {
        name: "Date Prediction",
        selector: "date_due",
        sortable: true,
        right: true
      }
    ];

    const customStyles = {
      rows: {
        style: {
          minHeight: "72px"
        }
      },
      headCells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px"
        }
      },
      cells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px"
        }
      }
    };

    return (
      <div>
        <DataTable
          title="Product Logs"
          columns={columns}
          data={data}
          onRowClicked={this.handleRowClicked}
          onClick={this.handleClick}
          pagination
        />
        <Modal
          visible={this.state.visible}
          width="400"
          height="650"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>{this.props.product[0].name}</h1>
            <p>ID: {this.state.logSelected}</p>
            <p>Status: {this.state.status}</p>
            <p>Priority: {this.state.priority}</p>
            <p>Issue Class: {this.state.issue_class}</p>
            <p>Issue Type: {this.state.issue_type}</p>
            <p>Site: {this.state.site}</p>
            <p>Division: {this.state.division}</p>
            <p>Environment: {this.state.environment}</p>
            <p>Action Requested: {this.state.log_body}</p>
            <p>Assigned: {this.state.assigned}</p>
            <p>CC: {this.state.cc}</p>
            <p>Date Requested: {this.state.due_date}</p>
            <a href="javascript:void(0);" onClick={() => this.openEditModal()}>
              Edit
            </a>
            <br></br>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
            <br></br>
            <a
              href="javascript:void(0);"
              onClick={() => this.deleteModal(this.state.logSelected)}
            >
              Delete
            </a>
          </div>
        </Modal>
        <Modal
          visible={this.state.editVisible}
          width="400"
          height="850"
          effect="fadeInUp"
          onClickAway={() => this.closeEditModal()}
        >
          <div>
            <h1>Log ID:{this.state.logSelected}</h1>
            Status:
            <input
              type="text"
              className="form-control"
              value={this.state.status}
              name="status"
              placeholder={this.state.status}
              onChange={this.updateStatusValue}
            />
            Priority:
            <input
              type="text"
              className="form-control"
              value={this.state.priority}
              name="priority"
              placeholder={this.state.priority}
              onChange={this.updatePriorityValue}
            />
            Issut Type:
            <input
              type="text"
              className="form-control"
              value={this.state.issue_type}
              name="issue_type"
              placeholder={this.state.issue_type}
              onChange={this.updateIssueTypeValue}
            />
            Issue Class:
            <input
              type="text"
              className="form-control"
              value={this.state.issue_class}
              name="issue_class"
              placeholder={this.state.issue_class}
              onChange={this.updateIssueClassValue}
            />
            Site:
            <input
              type="text"
              className="form-control"
              value={this.state.site}
              name="site"
              placeholder={this.state.site}
              onChange={this.updateSiteValue}
            />
            Division:
            <input
              type="text"
              className="form-control"
              value={this.state.division}
              name="division"
              placeholder={this.state.division}
              onChange={this.updateDivisionValue}
            />
            Environment:
            <input
              type="text"
              className="form-control"
              value={this.state.environment}
              name="environment"
              placeholder={this.state.environment}
              onChange={this.updateEnvironmentValue}
            />
            Request:{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.log_body}
              name="logBody"
              placeholder={this.state.log_body}
              onChange={this.updateLogBodyValue}
            />
            Assigned:
            <input
              type="text"
              className="form-control"
              value={this.state.assigned}
              name="assigned"
              placeholder={this.state.assigned}
              onChange={this.updateAssignedValue}
            />
            CC:
            <input
              type="text"
              className="form-control"
              value={this.state.cc}
              name="cc"
              placeholder={this.state.cc}
              onChange={this.updateCCValue}
            />
            Due Date:
            <input
              type="text"
              className="form-control"
              value={this.state.due_date}
              name="due_date"
              placeholder={this.state.due_date}
              onChange={this.updateDueDateValue}
            />
            <button onClick={() => this.submitLog(this.state.logSelected)}>
              Submit
            </button>
            <a href="javascript:void(0);" onClick={() => this.closeEditModal()}>
              Close
            </a>
          </div>
        </Modal>
        <input
          type="button"
          value="Log a New Ticket"
          onClick={() => this.handleNewTicket()}
        />
      </div>
    );
  }
}

export default Ticket;
