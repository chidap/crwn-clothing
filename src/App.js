import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage.component";
import ShopPage from "./components/shop/shop.component";
import { auth } from "./firebase/firebase.utils"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentuser: user });
      console.log ("current user = ", user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path = "/" component = { HomePage} />
          <Route path = "/shop" component = { ShopPage } />
          <Route path = "/signin" component = { SignInAndSignUpPage } />
        </Switch> 
      </div>
    );
  }
  
}

export default App;
