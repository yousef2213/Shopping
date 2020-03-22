import React, { Component } from 'react'
import './App.css';
import {Route , Switch} from 'react-router-dom'
//page
import Home from './page/Home'
import Contact from './page/ContactPage'
import Cart from './page/Cart'
import Shopping from './page/Shopping'
import DefautlPage from './page/Default'

//component
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Hats from './component/Hats'
import Jacket from './component/Jacket'
import Sneaker from './component/Sneaker'
import Mens from './component/Mens'
import Singnin from './component/Signin'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shopping} />
          <Route exact path="/sign" component={Singnin} />
          <Route path="/hats" component={Hats} />
          <Route path="/jacket" component={Jacket} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/mens" component={Mens} />
          <Route path="/sneakers" component={Sneaker} />
          <Route component={DefautlPage} />
        </Switch>
      </>
    )
  }
}

