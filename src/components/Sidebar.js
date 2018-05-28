import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = () => (
    <div>
        <Nav vertical>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
    </div>
)

export default Sidebar