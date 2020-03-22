import React from 'react'
import Title from './Title'
import styled from 'styled-components'
import { ShoppingConsumer } from '../context/context'

export default function Hats() {
    return (
        <ShoppingConsumer>
        {value =>{
            const {Sneakers , addCartSnaeakers} = value;
            return(
                <div className="container-fluid px-5">
                    <Title title="Sneakers" center />
                    <WrapperHats>
                        <div className="items">
                            {Sneakers.map(item =>{
                                return(
                                    <div key={item.id} className="jacket-item">
                                        <div className="item-hat">
                                            <div className="img-container">
                                                <img src={item.image} alt="Hats-1" className="imgs" />
                                            </div>
                                            <button className="item-link" onClick={ ()=> addCartSnaeakers(item.id) }>add to cart</button>
                                        </div>
                                        <div className="detils">
                                            <h4 className="title">{item.title}</h4>
                                            <h4 className="price">$ {item.price}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </WrapperHats>
                </div>
            )
        }}
        </ShoppingConsumer>
    )
}

const WrapperHats =styled.div`
    .img-container{
        width: 100%;
        height: 100%;
    }
    .item-hat{
        width:100%;
        height: 400px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }
    .item-link{
        position: absolute;
        outline:none;
        top: 80%;
        left: 50%;
        width: 70%;
        text-align: center;
        border:0;
        text-transform: capitalize;
        transform: translate(-50%,-50%);
        font-size: 25px;
        text-decoration: none;
        color: #000;
        padding: 10px;
        transition: 0.4s all linear;
        opacity: 0;
        background: rgba(250,250,250,0.5);
    }
    .item-hat:hover 
        {
            opacity: 0.9;
        }
        .item-hat:hover .item-link{
            opacity:1;
        }
        .detils{
            display:flex;
            justify-content:space-between;
            margin-bottom:30px;
            padding-top:20px;
        }
        .title{
            font-family: 'Montserrat', sans-serif; 
            letter-spacing:3px;
            text-transform:capitalize;
            font-weight:500;
        }
        .price{
            font-weight: 100;
            font-size:21px
        }
`