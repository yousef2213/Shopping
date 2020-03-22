import React, { Component } from 'react'
import styled from 'styled-components'
import Thank from './thank'

var firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyBmINN0X1sYAfrwEVmyB1mM-Pv5yVBBXpU",
    authDomain: "shopping-409ef.firebaseapp.com",
    databaseURL: "https://shopping-409ef.firebaseio.com",
    projectId: "shopping-409ef",
    storageBucket: "shopping-409ef.appspot.com",
    messagingSenderId: "448532963098",
    appId: "1:448532963098:web:d9b0ca7d3265f31983d6a3",
    measurementId: "G-3B4954DL5X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default class Signin extends Component {
    // signin
    signin(){
        var email = this.refs.email2.value;
        var password = this.refs.password2.value;
        var auth = firebase.auth();
        var promise = auth.signInWithEmailAndPassword(email,password);
        var hhh = document.getElementById("hh");
        
        promise.then(users =>{
            var hhh = document.getElementById("hh");
            hhh.textContent = "Sign Out";
            hhh.addEventListener("click",()=>{
                hhh.textContent = "Sign In";
                this.setState({
                    isLogin: false
                })
            })
            this.setState({
                login : true,
                done : true
            })
            this.props.history.push('/');
        })

        promise.catch(e =>{
            var err = e.message;
            this.setState({err})
        })
    }

    // signup
    signup(){
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        var auth = firebase.auth();
        var promise = auth.createUserWithEmailAndPassword(email,password);
        
        promise.then(users =>{
            var name = this.refs.name.value;
            var mess = "Welcome "+ name;
            firebase.database().ref("users/"+ users.user.uid).set({
                email : users.user.email,
                Name : users.user.displayName,
            })
            this.setState({
                mess : mess,
                isLogin :false,
                signUpher :false
            });
        })

        promise.catch(e =>{
            var mess = e.message;
            this.setState({mess});
        })
    }
    
    change(){
        this.setState({
            signUpher : true,
            isLogin: true,
        })
    }

    constructor(props){
        super(props);
        this.state = {
            err : '',
            mess :'',
            isLogin : false,
            signUpher : false,
            done:false
        }
        this.signup= this.signup.bind(this);
        this.signin = this.signin.bind(this);
        this.change = this.change.bind(this)
    }


    render() {
        var signin;
        var signup;
        var done;
        if(this.state.isLogin === false){
        signin = 
        <div className="container">
            <div className="row py-5">
                <div className="col-10 mx-auto col-md-6 pt-5">
                    <h3 className="px-5">I already have an acount </h3>
                    <p className="px-5 text-capitalize pb-4">sign in your email and password</p>
                    {/* email */}
                    <div className="form-group px-5 mb-5">
                        <input type="email" id="email" className="form-control" ref="email2" placeholder="Enter Your Email" />
                    </div>
                    {/* pass */}
                    <div className="form-group px-5 mb-5">
                        <input type="password" id="password" className="form-control" ref="password2" placeholder="Enter Your Password" />
                    </div>
                    <p className="px-5 text-center text-capitalize">{this.state.err}</p>
                    {/* Submit */}
                    <div className="form-group px-5 flex-wrap">
                        <input type="submit" onClick={this.signin} value="sign in" className="bt text-center mr-2 mb-3" />
                        <input type="submit" onClick={this.change} value="sign up" className="bt her text-center" />
                    </div>
                </div>
            </div>
        </div>
        signup = '';
        done = '';
        }
        if(this.state.signUpher === true){
            signin = '';
            done = '';
            signup = 
            <div className="container">
                <div className="row py-5">
                    <div className="col-10 mx-auto col-md-6 pt-5">
                        <h3 className="px-5">I haven't an acount </h3>
                        <p className="px-5 text-capitalize pb-4">sign in your email and password</p>
                        {/* Name */}
                        <div className="form-group px-5 mb-5">
                            <input type="text" id="name" className="form-control" ref="name" placeholder="Display Name" />
                        </div>
                    {/* Email */}
                        <div className="form-group px-5 mb-5">
                            <input type="email" id="email-sign" className="form-control" ref="email" placeholder="Enter Your Email" />
                        </div>
                    {/* Pass */}
                        <div className="form-group px-5 mb-5">
                            <input type="password" id="password-sign" className="form-control" ref="password" placeholder="Enter Your Password" />
                        </div>
                        <p className=" px-5 text-capitalize">{this.state.mess}</p>
                        {/* Submit */}
                        <div className="form-group px-5">
                            <input type="submit" onClick={this.signup} value="sign up" className="bt btu" />
                        </div>
                    </div>
                </div>
            </div>
        }
        if(this.state.done === true){
            done = <Thank />
            signup ='';
            signin =''
        }

        return (
            <Sign>
                {signin}
                {signup}
                {done}
            </Sign>
        )
    }
}

const Sign = styled.div`
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
    .bt{
        background:#000;
        outline:none;
        padding:14px 35px;
        color: #fff;
        border:0;
        font-family: 'Montserrat', sans-serif !important;
        text-transform:uppercase;
        font-size: 13px;
    }
    .bts{
        background:#3859f7;
        margin:10px 0;
    }
    .her{
        width: 60%
    }
    .h33{
        font-size:28px;
        color:#fff;
        padding-top:230px;
    }
`
