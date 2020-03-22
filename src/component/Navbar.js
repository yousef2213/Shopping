import React from 'react'
import styled from 'styled-components'
import { FaBars} from 'react-icons/fa'
import { FiShoppingCart} from 'react-icons/fi'
import { ShoppingConsumer } from '../context/context'
import logo from '../image/logo.jpg'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <ShoppingConsumer>
            {value => {
                const {Cart,handelSidebar,CartItem,links,closesidebar} = value;
                return(
                    <NavBarStyle>
                        <div className="nav-center">
                            <img src={logo} height="60" alt="" />
                            <FaBars className="icon-nav d-md-none" onClick={handelSidebar} />
                            <ul className="d-none d-md-block">
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
                                <div className="login d-none d-md-inline-block">
                                    <Link to="/cart">
                                        <FiShoppingCart className="cart" />
                                    </Link>
                                    <Link to="/cart" className="sp">{CartItem}</Link>
                                </div>
                                {/*  */}
                                <div className="pos-link">
                                    <ul>
                                        {Cart.map( item =>{
                                            return(
                                                <li key={item.id} className="py-3 d-flex align-items-center">
                                                    <img src={item.image} className="img-fluid" width="100" height="50" />
                                                    <h5 className="text-main pl-3"><span>{item.count}</span> x $ {item.price}</h5>
                                                </li>
                                                
                                            )
                                        }) }
                                        <li className="text-center">
                                            <Link to='/cart' className="btn-check">
                                                go to checkout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </NavBarStyle>
                )
            }}
        </ShoppingConsumer>
    )
}

const NavBarStyle = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 0.25rem 1.5rem;
    border-bottom:2px solid #000;
    background: #fff;
    z-index:999;
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
    }
    .icon-nav {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .login{
        position:relative;
        padding-left:10px;
    }
    .sp:hover
    {
        text-decoration:none;
    }
    .cart{
        cursor: pointer;
        font-family: 'Montserrat', sans-serif; 
        color:#000;
        font-size:1.4rem;
        border-bottom:0
    }
    .sp{
        position:absolute;
        top:-7px;
        font-size:11px;
        right:-5px;
        color:#fff;
        padding:3px;
        font-weight:bold;
        border-radius:50%;
        background:#504949;
    }
    /* UL Link */
    ul {
        list-style: none;
        margin:0;
        padding-left:50px;
    }
    .sidebar-item{
        text-transform: uppercase;
        padding: 0;
        display:inline-block;
        color: #000 ;
        transition: all 0.3s ease-in-out;
    }
    .sidebar-item:hover {
        text-decoration: none;
    }
    .nav-link{
        color: #000;
        text-decoration: none;
        display:inline-block;
        padding:10px;
        font-weight:400;
        font-size:15px;
    }
    /* Cart Hover */
    .pos-link{
        position:absolute;
        top:50px;
        right:10px;
        border : 1px solid #000;
        text-align:left;
        background:#fff;
        height:300px;
        overflow-y:scroll;
        display:none;
        transition:0.3 all ease-in-out;
    }
    .pos-link > ul{
        padding:5px 20px;
        position: relative;
    }
    .login:hover + .pos-link{
        display:block;
    }
    .pos-link:hover{
        display:block;
    }
    .btn-check{
        background:#fff;
        border:0;
        padding:10px;
        text-transform:uppercase;
        border:1px solid #000;
        color : #000;
        width:100%;
        display:inline-block;
    }
    .btn-check:hover{
        color : #000;
        text-decoration:none;
    }
`
