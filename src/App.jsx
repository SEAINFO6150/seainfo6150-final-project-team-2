import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import BasicNavBar from './BasicNavBar';
import SearchBox from './SearchBox';
import Register from './Register';
import { addNewUser, addToCart, removeFromCart, searchItem, initShoppingList, createAccount } from './services';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedin: false,
      isRegister: false,
      isInCart: false,
      isInDetail: false,
      username: '',
      password: '',
      shoppingList: [],
      cart: {},
      itemDetail: {},
      searchWord: '',
      cartCount: 0,
      registerName: '',
      registerPassword: '',
      registerConfirmPassword: '',
      registerMessage: '',
      loginMessage: '',
      sumPrice: 0,
    };

    this.updateUserName = this.updateUserName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.gotoLoginPage = this.gotoLoginPage.bind(this);
    this.gotoRegisterPage = this.gotoRegisterPage.bind(this);
    this.gotoCartPage = this.gotoCartPage.bind(this);
    this.gotoHomePage = this.gotoHomePage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.gotoItemDetailPage = this.gotoItemDetailPage.bind(this);
    this.updateSearchWord = this.updateSearchWord.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.searchOnKeyPress = this.searchOnKeyPress.bind(this);
    this.updateRegisterName = this.updateRegisterName.bind(this);
    this.updateRegisterPassword = this.updateRegisterPassword.bind(this);
    this.updateRegisterConfirmPassword = this.updateRegisterConfirmPassword.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  updateUserName(username){
    this.setState({
      username:username
    });
  }

  updatePassword(password){
    this.setState({
      password:password
    });
  }

  updateSearchWord(searchWord){
    this.setState({
      searchWord:searchWord
    });
  }

  updateRegisterName(registerName){
    this.setState({
      registerName:registerName
    });
  }

  updateRegisterPassword(registerPassword){
    this.setState({
      registerPassword:registerPassword
    });
  }

  updateRegisterConfirmPassword(registerConfirmPassword){
    this.setState({
      registerConfirmPassword:registerConfirmPassword
    });
  }

  addNewUser(username, password){
    if(!username){
      this.setState({
        loginMessage: "Please Enter name:)"
      });
    }
    else if(!password){
      this.setState({
        loginMessage: "Please Enter password:)"
      });
    }
    else{
      addNewUser(username, password)
      .then( ({ cart, shoppingList, cartCount, message, flag, sumPrice }) => {
        if(flag){
          this.setState({
            isLoggedin: true,
            cart: cart,
            shoppingList: shoppingList,
            cartCount: cartCount,
            sumPrice: sumPrice,
          });
        }
        else{
          this.setState({
            isLoggedin: false,
            loginMessage: message
          });
        }
      })
    }
  }

  createAccount(registerName, registerPassword, registerConfirmPassword){
    if(!registerName){
      this.setState({
        registerMessage: "Please Enter name:)"
      });
    }
    else if(!registerConfirmPassword){
      this.setState({
        registerMessage: "Please Enter password:)"
      });
    }
    else if(registerPassword !== registerConfirmPassword){
      this.setState({
        registerMessage: "Oops! Password does not matches"
      });
    }
    else{
      createAccount(registerName, registerPassword)
      .then( ({ message }) =>{
        this.setState({
          registerMessage: message
        });
      });
    }
  }

  searchItem(searchWord){
    if(!searchWord){
      this.gotoHomePage();
    }
    searchItem(searchWord)
    .then( ({ curShoppingList }) => {
      this.setState({
        shoppingList: curShoppingList,
        searchWord:'',
      });
    })
  }

  searchOnKeyPress(e,searchWord){
    if(e.keyCode !== 13){
      return;
    }
    if(!searchWord){
      this.gotoHomePage();
    }
    searchItem(searchWord)
    .then( ({ curShoppingList }) => {
      this.setState({
        shoppingList: curShoppingList,
        searchWord:'',
      });
    })
  }

  userLogout(){
    this.setState({
      isLoggedin: false,
      isInCart: false,
      isInDetail: false,
      username: '',
      password: '',
      loginMessage: '',
    });
  }

  gotoCartPage(){
    this.setState({
      isInCart: true,
      isInDetail: false,
    });
  }

  gotoHomePage(){
    initShoppingList()
    .then( ({ shoppingList }) => {
      this.setState({
        isInCart: false,
        isInDetail: false,
        shoppingList: shoppingList,
    });
    })
  }

  gotoItemDetailPage(item){
    this.setState({
      isInDetail: true,
      itemDetail: item,
    });
  }

  gotoRegisterPage(){
    this.setState({
      isLoggedin: true,
      isRegister: true,
      username: '',
      password: '',
      loginMessage: ''
    });
  }

  gotoLoginPage(){
    this.setState({
      isLoggedin: false,
      isRegister: false,
      registerName: '',
      registerPassword: '',
      registerConfirmPassword: '',
      registerMessage: '',
    });
  }

  addToCart(item){
    addToCart(this.state.username, item)
    .then( ({ cart, cartCount, sumPrice }) => {
      this.setState({
        cart: cart,
        cartCount: cartCount,
        sumPrice: sumPrice,
      });
    });
  }

  removeFromCart(item){
    removeFromCart(this.state.username, item)
    .then( ({ cart, cartCount, sumPrice }) => {
      this.setState({
        cart: cart,
        cartCount: cartCount,
        sumPrice: sumPrice,
      });
    })
  }

  render() {
    if(!this.state.isLoggedin){
      return(
        <div className="shopping-app">
          <Login updateUserName={this.updateUserName} username={this.state.username} 
                 updatePassword={this.updatePassword} password={this.state.password}
                 addNewUser={this.addNewUser} gotoRegisterPage={this.gotoRegisterPage} 
                 loginMessage={this.state.loginMessage}/>
        </div>
      );
    }
    else if(this.state.isRegister){
      return(
        <div className="shopping-app">
          <Register gotoLoginPage={this.gotoLoginPage} updateRegisterName={this.updateRegisterName}
                    updateRegisterPassword={this.updateRegisterPassword}
                    updateRegisterConfirmPassword={this.updateRegisterConfirmPassword}
                    registerName={this.state.registerName} registerPassword={this.state.registerPassword}
                    registerConfirmPassword={this.state.registerConfirmPassword}
                    createAccount={this.createAccount} registerMessage={this.state.registerMessage}/>
        </div>
      );
    }
    else if(this.state.isInCart){
      return(
        <div className="shopping-app">
          <BasicNavBar gotoHomePage={this.gotoHomePage} gotoCartPage={this.gotoCartPage} 
                       userLogout={this.userLogout} cartCount={this.state.cartCount}/>
          <Cart gotoHomePage={this.gotoHomePage} cart={this.state.cart}
                removeFromCart={this.removeFromCart} sumPrice={this.state.sumPrice}/>
        </div>
      );
    }
    else if(this.state.isInDetail){
      return(
        <div className="shopping-app">
          <BasicNavBar gotoHomePage={this.gotoHomePage} gotoCartPage={this.gotoCartPage} 
                       userLogout={this.userLogout} cartCount={this.state.cartCount}/>
          <ItemDetail gotoHomePage={this.gotoHomePage} itemDetail={this.state.itemDetail}
                      addToCart={this.addToCart} gotoCartPage={this.gotoCartPage}/>
        </div>
      );
    }
    else{
      return(
        <div className="shopping-app">
          <BasicNavBar gotoHomePage={this.gotoHomePage} gotoCartPage={this.gotoCartPage} 
                       userLogout={this.userLogout} cartCount={this.state.cartCount}/>
          <SearchBox updateSearchWord={this.updateSearchWord} searchWord={this.state.searchWord}
                     searchItem={this.searchItem} searchOnKeyPress={this.searchOnKeyPress}/>
          <Home userLogout={this.userLogout} gotoCartPage={this.gotoCartPage} 
                shoppingList={this.state.shoppingList} addToCart={this.addToCart}
                gotoItemDetailPage={this.gotoItemDetailPage}/>
        </div>
      );
    }
  }

}

export default App;
