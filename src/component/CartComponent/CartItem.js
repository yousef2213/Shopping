import React from 'react'

export default function CartItem() {
    return (
        <div className="container d-none d-lg-block text-center my-3">
            <div className="row text-center py-3 align-items-center bo">
                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-capitalize text-main">products</h5>
                </div>
                {/* name products */}
                <div className=" col-10 mx-auto col-lg-2">
                    <h5 className="text-capitalize text-main">description</h5>
                </div>
                {/* price */}
                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-capitalize text-main">price</h5>
                </div>
                {/* quantity */}
                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-capitalize text-main">quantity</h5>
                </div>
                {/* remover */}
                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-capitalize text-main">remover</h5>
                </div>
            </div>
        </div>
    )
}
