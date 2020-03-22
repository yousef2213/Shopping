import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ShoppingConsumer} from '../context/context'

export default function Item(){
    return (
        <div className="container-fluid py-5 px-5">
            <div className="items">
                <ShoppingConsumer>
                    {value =>{
                        const {hero} = value
                        return(
                            <>
                            {hero.map(item =>{
                                return(
                                    <ItemWrapper key={item.id} className="item">
                                        <div className="img-container">
                                            <img src={item.imageUrl} alt="item" className="imgs" />
                                            <Link to={item.linkUrl} className="item-link text-uppercase text-center" >
                                                {item.title} <br /> <h6 className="sh text-uppercase">Shop now</h6>
                                            </Link>
                                        </div>
                                    </ItemWrapper>
                                )
                            })}
                            </>
                        )
                    }}
                </ShoppingConsumer>
            </div>
        </div>
    )
}

const ItemWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    position: relative;
    transition: 0.4s all linear;
    .img-container{
        width:100%;
        height:100%;
    }
    .item-link{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 30px;
        text-decoration: none;
        color:#000;
        border: 1px solid #000;
        padding: 10px 40px;
        transition: 0.4s all linear;
        opacity: 0.5; 
        background: rgba(250,250,250,0.5);
    }
    &:hover 
    {
        opacity: 0.7;
    }
    &:hover .item-link
    {
        opacity: 1;
    }
    .sh{
        font-size:17px;
        font-family: 'Montserrat', sans-serif!important;
        color:#000;
        font-weight:600;
    }
    
`