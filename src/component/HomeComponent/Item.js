import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Item() {
    return (
        <ItemWrapper className="container text-center">
            <h2 className="text-capitalize text-white py-4 text-main">Best page for shopping‎</h2>
            <Link to='/shop' className="bu text-main">Shopping</Link>
        </ItemWrapper>
    )
}


const ItemWrapper = styled.div`
    .bu{
        background:#000;
        padding:10px 30px;
        color:#ddd;
        outline-offset:3px;
        outline:  0.23px solid #000;
        transition: .2s all ease-in-out;
    }
    .bu:hover{
        text-decoration:none;
        outline-offset:1px;
    }
    h2{
        font-size:30px
    }
`