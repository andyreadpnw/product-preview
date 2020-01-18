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
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
