import React, { Component } from "react";

export class Ticket extends Component {
  render() {
    let { id } = this.props.productlog;
    return <div>{id}</div>;
  }
}

export default Ticket;
