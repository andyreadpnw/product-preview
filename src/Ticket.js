import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Popup from "reactjs-popup";
import Modal from "react-awesome-modal";

export class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
      due_date: "none"
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

  render() {
    console.log(this.props.data);

    const Button = () => <button type="button">Edit</button>;

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
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>{this.state.logSelected}</h1>
            <p>{this.state.log_body}</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Ticket;
