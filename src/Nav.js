import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      allTicketsClicked: false
    };
    this.enterTickets = this.enterTickets.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  enterTickets() {
    this.setState({
      allTicketsClicked: !this.state.allTicketsClicked
    });
  }

  render() {
    // console.log(this.props.currentUser.user.user_id.username);
    let { username } = this.props.currentUser.user.user_id;
    return (
      <div>
        <Navbar color="faded" light toggleable color="info">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/home">Product Preview</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/tickets/"
                  enterTickets={this.enterTickets}
                  allTicketsClicked={this.state.allTicketsClicked}
                >
                  Product Logs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/userprofile/">Welcome {username}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/andyreadpnw">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
