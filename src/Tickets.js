import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Modal from "react-awesome-modal";

export class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketsArr: 1,
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

  componentWillMount() {
    fetch("http://localhost:3000/product_logs")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ticketsArr: json.map(x => x)
        });
      });
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

  deleteTicket(id) {
    this.setState({
      visible: false
    });
    fetch("http://localhost:3000/product_logs/" + id, {
      method: "delete"
    })
      .then(resp => {
        this.props.updateAllTickets();
      })
      .then(json => console.log(json.message))
      .catch(err => {
        console.error(err);
      });
    console.log("deleted");
    // this.updateAllTickets();
    this.closeModal();
  }

  closeEditModal() {
    this.setState({
      editVisible: false
    });
  }

  updateAllTickets() {
    fetch("http://localhost:3000/product_logs")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ticketsArr: json.map(x => x)
        });
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

  handleRowClicked = row => {
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
    console.log(this.state.logSelected);

      fetch("http://localhost:3000/product_logs/" + id, {
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
      }).then(resp => {
        if (Math.floor(resp.status / 200) === 1) {
          this.updateAllTickets();
          this.closeEditModal();
        } else {
          console.log("ERROR", resp);
        }
      });
  };

  render() {
    const data = this.state.ticketsArr;

    const columns = [
      {
        name: "ID",
        selector: "id",
        sortable: true,
        width: "40px"
      },
      {
        name: "Product ID",
        selector: "product.parent_id",
        sortable: true,
        width: "100px"
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
              onClick={() => this.deleteTicket(this.state.logSelected)}
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
      </div>
    );
  }
}

export default Tickets;
