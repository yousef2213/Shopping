import React from 'react'
import {Link} from 'react-router-dom'

export default function thank() {
    return (
        <>
        <div className="container-fluid thank">
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h3 className="text-main h33 text-capitalize" >Thank you to register</h3>
                    <Link to='/' className="btn bt my-3" >Back to Home</Link>
                </div>
            </div>
        </div>
        </>
    )
}
