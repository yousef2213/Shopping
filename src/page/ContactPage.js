import React from 'react'
import Title from '../component/Title'
import styled from 'styled-components'

export default function Contact() {
    return (
        <ContactShopping className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <Title title="contact us" center />
                </div>
                <div className="col-5 mx-auto mt-4">
                    <form className="mt-4"   action="https://formspree.io/xbjyabka" method="POST">
                        <div className="form-group">
                            <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="display name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="email@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="important !!"
                            />
                        </div>
                        <div className="form-group">
                        <input
                            type="submit"
                            name="button"
                            className="btn bu"
                            value="Send"
                        />
                        </div>
                    </form>    
                </div>
            </div>
        </ContactShopping>
    )
}


const ContactShopping = styled.div`
    .form-control{
        padding : 10px;
        margin-bottom:20px;
        border : 0;
        border-bottom : 1px solid #cccccc;
        font-size: 18px;
        outline:none
    }
    input::placeholder{
        text-transform:capitalize;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif !important;
        padding-bottom :4px
    }
    .btn{
        width:100%;
    } 
    .bu{
        background:#000;
        padding:7px 30px;
        color:#ddd;
        transition: .2s all ease-in-out;
        font-weight:500;
    }







`