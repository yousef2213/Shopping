import React from 'react'
import CartItem from '../component/CartComponent/CartItem'
import CartList from '../component/CartComponent/CartList'
import Title from '../component/Title'
export default function cart(props){
    return (
        <>
            <Title title="Your Cart" center className="pt-4 text-main" />
            <CartItem />
            <CartList history={props.history}/>
        </>
    )
}