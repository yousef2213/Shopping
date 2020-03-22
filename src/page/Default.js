import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Hero() {
    return (
        <HeroWrapper className="banner">
            <div>
                <h1 className="title">404</h1>
                <h3 className="title-2 text-main">page not found</h3>
                <Link to='/' className="bu text-capitalize">back to home</Link>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:  "100vh";
    color: #fff;
    .title {
        padding-bottom: 1rem;
        font-size: 3.5rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: 6px;
    }
    .title-2 {
        padding-bottom: 2rem;
        font-size: 1.5rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: 3px;
    }
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
`