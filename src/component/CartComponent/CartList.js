import React from 'react'
import {ShoppingConsumer} from '../../context/context'
import {FaAngleLeft ,FaAngleRight,FaTrash} from 'react-icons/fa'
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom'

import Paypal from './paypal'
export default function CartList({history}) {
    return (
        <ShoppingConsumer>
            {value => {
                const {Cart,Increment,decrement,removeItem,Total,clearcart} = value;
                if(Cart.length == 0){
                    return(
                        <>
                        <h1 className="text-center text-capitalize my-5">
                            your cart is currently empty
                        </h1>
                        </>
                    )
                }
                return(
                    <div className="container text-center my-3">
                        {Cart.map(item =>{
                            return(
                                <div key={item.id} className="row bo text-center py-3 align-items-center">
                                    <div className="col-10 mx-auto col-lg-2 my-0">
                                        <img src={item.image} className="img-fluid" width="60" />
                                    </div>
                                    <div className="col-10 mx-auto col-lg-2 my-0 pt-3">
                                        <h5 className="text-main text-capitalize"> <span className="d-lg-none">Product :</span>{item.title}</h5>
                                    </div>
                                    <div className="col-10 mx-auto col-lg-2 my-0">
                                        <h5 className="text-main"><span className="d-lg-none">Price :</span> $ {item.price}</h5>
                                    </div>
                                    <div className="col-10 mx-auto col-lg-2 my-0">
                                        <div className="d-flex justify-content-center align-items-center ">
                                            <FaAngleLeft className="cu" onClick={() => decrement(item.id)} />
                                            <h5 className="px-2 text-main pt-2">{item.count}</h5>
                                            <FaAngleRight className="cu" onClick={() => Increment(item.id) } />
                                        </div>
                                    </div>
                                    <div className="col-10 mx-auto col-lg-2 my-0">
                                        <h5 className="text-main">
                                            <MdClose className="cu trash" onClick={ ()=> removeItem(item.id) } />
                                        </h5>
                                    </div>

                                </div>
                            )
                        })}
                        <div className="row py-3 text-right">
                            <div className="col">
                                <h2 className="py-4">Total : $ {Total}</h2>
                                <button className="pay mb-3" onClick={clearcart}>Clear Cart </button>
                                <Paypal 
                                    history={history}
                                    Total={Total}
                                    clearcart={clearcart}
                                />
                            </div>
                        </div>
                    </div>
                )
            }}
        </ShoppingConsumer>
    )
}
