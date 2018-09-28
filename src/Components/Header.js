import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import logo from '../logo.svg';
import SearchBar from '../Components/SearchBar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
class Header extends Component{

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
        return (
         <div>
             <Navbar color="dark" dark expand="md">
             <img src={logo} width="50px" height="50px" ></img>
             <NavbarBrand href="/">MeshDrive</NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>          
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Log In</NavLink>
              </NavItem>            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More...
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Contact us
                  </DropdownItem>
                  <DropdownItem>
                    About us
                  </DropdownItem>              
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </Collapse>
             </Navbar>
         </div>
        );
      }
}
export default Header;
