import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class FriendsNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        }
    }
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <Navbar color='secondary' light>
                    <NavbarBrand className='mr-auto text-light'><h1>Friends List!</h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className='mr-2 bg-light' />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='/friends' className='text-light'><h3>Friends</h3></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/login' className='text-light'><h3>Login</h3></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default FriendsNavbar;