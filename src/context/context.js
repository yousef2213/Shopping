import React, { Component } from 'react'
import {items} from './linked'
import {sections} from './10.1 directory.data.js'
import {hatsData ,jacketData,Sneaker,Men} from './Data'


const ShoppingContext = React.createContext();   

class ShoppingProvider extends Component {

    state = {
        SidebarOpen : false,
        links : items,
        hero : sections,
        hats : hatsData,
        jacket : jacketData,
        Sneakers : Sneaker,
        Mens : Men,
        Cart : [],
        CartItem:0,
        Total:0
    }
    componentDidMount(){
        this.setState({
            Cart : this.CartStorage()
        },()=>{
            this.addTotals()
        })
    }
    
    
    //CartStorage
    CartStorage = ()=>{
        return localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")): []
    }
    //handelSidebar
    handelSidebar = ()=>{
        this.setState({SidebarOpen:!this.state.SidebarOpen})
    }
    //closesidebar
    closesidebar = ()=>{
        this.setState({SidebarOpen:false})
    }
    // data
    synch = ()=>{
        localStorage.setItem("Cart",JSON.stringify(this.state.Cart))
    }
    //addTotals
    addTotals = ( )=>{
        let CartItems = 0;
        let subtotal = 0;
        this.state.Cart.forEach(item =>{
            CartItems += item.count;
            subtotal += item.total
        })
        subtotal = parseFloat(subtotal.toFixed(2));
        this.setState({
            CartItem : CartItems,
            Total : subtotal
        })
    };
    //addCart
    addCart = (id)=>{
        let tempCart = [...this.state.Cart];
        let tempHats = [...this.state.hats];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempHats.find(item => item.id ===id);
            let total = tempItem.price;
            let cartitems = {...tempItem,count:1,total}
            tempCart = [...tempCart, cartitems]
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }
        this.setState(()=>{
            return {Cart: tempCart}
        }, ()=>{
            this.synch();
            this.addTotals()
        })
    }
    // addCartJacket
    addCartJacket = (id)=>{
        let tempCart = [...this.state.Cart];
        let tempJacket = [...this.state.jacket];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempJacket.find(item => item.id ===id);
            let total = tempItem.price;
            let cartitems = {...tempItem,count:1,total}
            tempCart = [...tempCart, cartitems]
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }
        this.setState(()=>{
            return {Cart: tempCart}
        }, ()=>{
            this.synch();
            this.addTotals()
        })
    }
    //addCartSnaeakers
    addCartSnaeakers = (id)=>{
        let tempCart =[...this.state.Cart];
        let tempSneaker = [...this.state.Sneakers];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempSneaker.find(item => item.id === id);
            let total = tempItem.price;
            let item = {...tempItem,total,count:1};
            tempCart = [...tempCart,item]
        }else{
            tempItem.count++;
            tempItem.total = tempItem.count * tempItem.price;
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }
        this.setState(()=>{
            return {Cart: tempCart}
        }, ()=>{
            this.synch();
            this.addTotals()
        })
        
        
    }
    //addCartMen
    addCartMen = (id) =>{
        let tempCart = [...this.state.Cart];
        let tempMen = [...this.state.Mens];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempMen.find( item => item.id === id);
            let total = tempItem.price;
            let item ={...tempItem,count:1,total};
            tempCart = [...tempCart,item]
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState( ()=>{
            return {Cart : tempCart}
        }, ()=>{
            this.synch();
            this.addTotals();
        });
    } 
    //Increment
    Increment =(id)=>{
        let tempCart = [...this.state.Cart];
        let tempItem = tempCart.find(item => item.id === id);
        console.log(tempItem);
        tempItem.count++;
        tempItem.total = tempItem.count * tempItem.price;
        this.setState({
            tempCart : [...tempCart]
        },()=>{
            this.addTotals();
            this.synch()
        })
    }
    //decrement
    decrement =(id)=>{
        let tempCart = [...this.state.Cart];
        let tempItem = tempCart.find(item => item.id === id);
        console.log(tempItem);
        tempItem.count--;
        if(tempItem.count === 0){
            let tempCart = [...this.state.Cart];
            tempCart = tempCart.filter(item => item.id !== id);
            this.setState({
                Cart : [...tempCart]
            },()=>{
                this.synch();
                this.addTotals()
            })
        }
        tempItem.total = tempItem.count * tempItem.price;
        this.setState({
            tempCart : [...tempCart]
        },()=>{
            this.addTotals();
            this.synch()
        })
    }
    // removeItem 
    removeItem = (id)=>{
        let tempCart = [...this.state.Cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
            Cart : [...tempCart]
        },()=>{
            this.synch();
            this.addTotals()
        })
    }
    //clearcart
    clearcart = ()=>{
        this.setState({
            Cart : []
        },()=>{
            this.synch();
            this.addTotals()
        })
    }
    render() {
        return (
            <ShoppingContext.Provider value={{
                ...this.state,
                handelSidebar : this.handelSidebar,
                closesidebar : this.closesidebar,
                addCart : this.addCart,
                Increment: this.Increment,
                decrement :this.decrement,
                removeItem : this.removeItem,
                clearcart : this.clearcart,
                addCartJacket : this.addCartJacket,
                addCartSnaeakers : this.addCartSnaeakers,
                addCartMen : this.addCartMen
            }}>
                {this.props.children}
            </ShoppingContext.Provider>
        )
    }
}

const ShoppingConsumer = ShoppingContext.Consumer;

export {ShoppingConsumer,ShoppingProvider}
