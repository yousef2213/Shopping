import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingConsumer} from '../context/context'
import styled from 'styled-components'

export default function Sidebar() {
    return (
        <ShoppingConsumer>
            {value =>{
                const {SidebarOpen,links,closesidebar}= value
                return(
                    <NavWrapper show={SidebarOpen}>
                        <ul>
                            {links.map(item =>{
                                return(
                                    <li key={item.id} className="sidebar-item pb-0 mb-0" onClick={closesidebar}>
                                        <Link to={item.path} className="nav-link">{item.link}</Link>
                                    </li>
                                )
                            })}
                            <li className="sidebar-item pb-0 mb-0" onClick={closesidebar}>
                                <Link to="/sign" className="nav-link" id="hh">Sign in</Link>
                            </li>
                        </ul>
                    </NavWrapper>
                )
            }}
        </ShoppingConsumer>
    )
}

const NavWrapper = styled.nav`
    position: fixed;
    width: 50%;
    height: 100%;
    z-index: 1;
    top: 59.66px;
    background: #fff;
    border-right:2px solid #000;
    transition: all 0.3s ease-in-out;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    ul {
        list-style: none;
        padding: 20px 4px !important;
    }
    .sidebar-item{
        font-size: 1.2rem;
        text-transform: capitalize;
        padding: 0.5rem 1.5rem;
        margin-bottom: 10px;
        color: #000 ;
        transition: all 0.3s ease-in-out;
    }
    .sidebar-item:hover {
        padding: 0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration: none;
    }
    .nav-link{
        color: #000;
        text-decoration: none;
        display: block;
        font-weight:500;
    }
    @media (min-width: 576px) {
        width: 20rem;
    }
    
`
