(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(3),o=a.n(n),i=(a(15),a(4)),c=a(5),m=a(8),u=a(6),l=a(7),g=a(1),d=(a(16),function(e){var t=e.updateUserName,a=e.username,r=e.updatePassword,n=e.password,o=e.addNewUser,i=e.gotoRegisterPage,c=e.loginMessage;return s.a.createElement("div",{className:"login-page"},s.a.createElement("div",{className:"login-Container"},s.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:a,className:"username",placeholder:"Enter your name"}),s.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:n,className:"password",placeholder:"Enter your password",type:"password"}),s.a.createElement("button",{onClick:function(){return o(a,n)}},"Login"),s.a.createElement("p",{className:"hint"},"Not register?",s.a.createElement("a",{onClick:function(){return i()},href:"#create accout"}," Create an account")),s.a.createElement("p",{className:"loginMessage"},c)))}),h=function(e,t,a,r){return s.a.createElement("li",{key:t},s.a.createElement("div",{className:"itemList"},s.a.createElement("div",{className:"image-info"},s.a.createElement("a",{onClick:function(){return r(e)},href:"#Go to detail page"},s.a.createElement("img",{src:e.img+".jpg",alt:""}))),s.a.createElement("div",{className:"others"},s.a.createElement("div",{className:"details"},s.a.createElement("div",{className:"name-info"},s.a.createElement("span",{className:"itemName"},e.name)),s.a.createElement("div",{className:"price-info"},s.a.createElement("span",{className:"itemPrice"},e.price))),s.a.createElement("button",{onClick:function(){return a(e)}},"Add to Cart"))))},p=function(e){var t=e.shoppingList,a=e.addToCart,r=e.gotoItemDetailPage;return s.a.createElement("ol",{className:"shoppingList"},t.map(function(e){return h(e,e.id,a,r)}))},f=function(e){var t=e.userLogout,a=e.gotoCartPage,r=e.shoppingList,n=e.addToCart,o=e.gotoItemDetailPage;return s.a.createElement("div",{className:"home-container"},s.a.createElement("div",{className:"home-display"},s.a.createElement(p,{shoppingList:r,addToCart:n,gotoItemDetailPage:o})),s.a.createElement("div",{className:"home-outgoing"},s.a.createElement("button",{onClick:function(){return a()},className:"cart-btn"},"My Cart"),s.a.createElement("button",{onClick:function(){return t()},className:"logout-btn"},"Logout")))},P=function(e,t,a){return s.a.createElement("li",{key:t},s.a.createElement("div",{className:"image-info"},s.a.createElement("img",{src:e.img+".jpg",alt:""})),s.a.createElement("div",{className:"detail-info"},s.a.createElement("div",{className:"name-info"},s.a.createElement("span",{className:"itemName"},e.name)),s.a.createElement("div",{className:"price-info"},s.a.createElement("span",{className:"itemPrice"},e.price)),s.a.createElement("button",{onClick:function(){return a(e)},className:"remove-btn"},"Remove")))},v=function(e){var t=e.cart,a=e.removeFromCart,r=e.sumPrice;return s.a.createElement("ol",{className:"cartList"},t.cartList.map(function(e){return P(e,e.id,a)}),s.a.createElement("div",{className:"to-checkout"},s.a.createElement("div",{className:"price-info"},s.a.createElement("p",{className:"sumPrice"},"$"+r)),s.a.createElement("div",{className:"checkout-btn"},s.a.createElement("button",{className:"checkout"},"Checkout"))))},E=function(e){var t=e.gotoHomePage,a=e.cart,r=e.removeFromCart,n=e.sumPrice;return s.a.createElement("div",{className:"cart-container"},s.a.createElement("div",{className:"cart-outgoing"},s.a.createElement("button",{onClick:function(){return t()},className:"back-btn"},"Back")),s.a.createElement("div",{className:"cart-display"},s.a.createElement(v,{cart:a,removeFromCart:r,sumPrice:n})))},C=function(e){var t=e.gotoHomePage,a=e.itemDetail,r=e.addToCart,n=e.gotoCartPage;return s.a.createElement("div",{className:"detail-container"},s.a.createElement("div",{className:"image-info"},s.a.createElement("img",{src:a.img+".jpg",alt:""})),s.a.createElement("div",{className:"detail-others"},s.a.createElement("div",{className:"detail-info"},s.a.createElement("div",{className:"name-info"},s.a.createElement("span",{className:"itemName"},a.name)),s.a.createElement("div",{className:"description"},s.a.createElement("span",{className:"itemDescription"},a.info)),s.a.createElement("div",{className:"price-info"},s.a.createElement("span",{className:"itemPrice"},a.price))),s.a.createElement("button",{onClick:function(){return r(a)},className:"addToCart-btn"},"Add to Cart"),s.a.createElement("button",{onClick:function(){return t()},className:"home-btn"},"Back to Home"),s.a.createElement("button",{onClick:function(){return n()},className:"cart-btn"},"Go to Cart")))},N=function(e){var t=e.gotoHomePage,a=e.gotoCartPage,r=e.userLogout,n=e.cartCount;return s.a.createElement("div",{className:"basicNavBar"},s.a.createElement("div",{className:"toggle-btn"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#Home",onClick:function(){return t()}},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"#Readme"},"Readme")),s.a.createElement("li",null,s.a.createElement("a",{href:"#Contact"},"Contact")),s.a.createElement("li",null,s.a.createElement("a",{href:"#Others"},"Others")))),s.a.createElement("a",{onClick:function(){return a()},href:"#Go to detail page"},s.a.createElement("img",{src:"cart.png",alt:"",className:"cartImage"}),s.a.createElement("span",{className:"cartCount"},n)),s.a.createElement("a",{onClick:function(){return r()},href:"#userLogout"},s.a.createElement("img",{src:"shutdown.png",alt:"",className:"shutdownImage"})))},b=function(e){var t=e.updateSearchWord,a=e.searchWord,r=e.searchItem,n=e.searchOnKeyPress;return s.a.createElement("div",{className:"search-box"},s.a.createElement("input",{className:"input-box",placeholder:"search",onChange:function(e){return t(e.target.value)},value:a,onKeyDown:function(e){return n(e,a)}}),s.a.createElement("a",{className:"search-btn",href:"#to-search",onClick:function(){return r(a)}},s.a.createElement("img",{src:"search.png",alt:"",className:"searchImage"})))},w=function(e){var t=e.gotoLoginPage,a=e.updateRegisterName,r=e.updateRegisterPassword,n=e.updateRegisterConfirmPassword,o=e.registerName,i=e.registerPassword,c=e.registerConfirmPassword,m=e.createAccount,u=e.registerMessage;return s.a.createElement("div",{className:"register-page"},s.a.createElement("div",{className:"register-Container"},s.a.createElement("input",{onChange:function(e){return a(e.target.value)},value:o,className:"username",placeholder:"Create your name"}),s.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:i,className:"password",placeholder:"Create your password",type:"password"}),s.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:c,className:"confirmPassword",placeholder:"Confirm your password",type:"password"}),s.a.createElement("button",{onClick:function(){return m(o,i,c)}},"CREATE"),s.a.createElement("p",{className:"hint"},"Already registered?",s.a.createElement("a",{onClick:function(){return t()},href:"#Sign In"}," Sign In")),s.a.createElement("p",{className:"registerMessage"},u)))},j=function(e){return fetch("/search",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({searchWord:e})}).catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})})},O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={isLoggedin:!1,isRegister:!1,isInCart:!1,isInDetail:!1,username:"",password:"",shoppingList:[],cart:{},itemDetail:{},searchWord:"",cartCount:0,registerName:"",registerPassword:"",registerConfirmPassword:"",registerMessage:"",loginMessage:"",sumPrice:0},e.updateUserName=e.updateUserName.bind(Object(g.a)(Object(g.a)(e))),e.updatePassword=e.updatePassword.bind(Object(g.a)(Object(g.a)(e))),e.addNewUser=e.addNewUser.bind(Object(g.a)(Object(g.a)(e))),e.userLogout=e.userLogout.bind(Object(g.a)(Object(g.a)(e))),e.gotoLoginPage=e.gotoLoginPage.bind(Object(g.a)(Object(g.a)(e))),e.gotoRegisterPage=e.gotoRegisterPage.bind(Object(g.a)(Object(g.a)(e))),e.gotoCartPage=e.gotoCartPage.bind(Object(g.a)(Object(g.a)(e))),e.gotoHomePage=e.gotoHomePage.bind(Object(g.a)(Object(g.a)(e))),e.addToCart=e.addToCart.bind(Object(g.a)(Object(g.a)(e))),e.removeFromCart=e.removeFromCart.bind(Object(g.a)(Object(g.a)(e))),e.gotoItemDetailPage=e.gotoItemDetailPage.bind(Object(g.a)(Object(g.a)(e))),e.updateSearchWord=e.updateSearchWord.bind(Object(g.a)(Object(g.a)(e))),e.searchItem=e.searchItem.bind(Object(g.a)(Object(g.a)(e))),e.searchOnKeyPress=e.searchOnKeyPress.bind(Object(g.a)(Object(g.a)(e))),e.updateRegisterName=e.updateRegisterName.bind(Object(g.a)(Object(g.a)(e))),e.updateRegisterPassword=e.updateRegisterPassword.bind(Object(g.a)(Object(g.a)(e))),e.updateRegisterConfirmPassword=e.updateRegisterConfirmPassword.bind(Object(g.a)(Object(g.a)(e))),e.createAccount=e.createAccount.bind(Object(g.a)(Object(g.a)(e))),e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"updateUserName",value:function(e){this.setState({username:e})}},{key:"updatePassword",value:function(e){this.setState({password:e})}},{key:"updateSearchWord",value:function(e){this.setState({searchWord:e})}},{key:"updateRegisterName",value:function(e){this.setState({registerName:e})}},{key:"updateRegisterPassword",value:function(e){this.setState({registerPassword:e})}},{key:"updateRegisterConfirmPassword",value:function(e){this.setState({registerConfirmPassword:e})}},{key:"addNewUser",value:function(e,t){var a=this;e?t?function(e,t){return fetch("/addUser",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:e,password:t})}).catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})})}(e,t).then(function(e){var t=e.cart,r=e.shoppingList,s=e.cartCount,n=e.message,o=e.flag,i=e.sumPrice;o?a.setState({isLoggedin:!0,cart:t,shoppingList:r,cartCount:s,sumPrice:i}):a.setState({isLoggedin:!1,loginMessage:n})}):this.setState({loginMessage:"Please Enter password:)"}):this.setState({loginMessage:"Please Enter name:)"})}},{key:"createAccount",value:function(e,t,a){var r=this;e?a?t!==a?this.setState({registerMessage:"Oops! Password does not matches"}):function(e,t){return fetch("/createAccount",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({registerName:e,registerPassword:t})}).catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})})}(e,t).then(function(e){var t=e.message;r.setState({registerMessage:t})}):this.setState({registerMessage:"Please Enter password:)"}):this.setState({registerMessage:"Please Enter name:)"})}},{key:"searchItem",value:function(e){var t=this;e||this.gotoHomePage(),j(e).then(function(e){var a=e.curShoppingList;t.setState({shoppingList:a,searchWord:""})})}},{key:"searchOnKeyPress",value:function(e,t){var a=this;13===e.keyCode&&(t||this.gotoHomePage(),j(t).then(function(e){var t=e.curShoppingList;a.setState({shoppingList:t,searchWord:""})}))}},{key:"userLogout",value:function(){this.setState({isLoggedin:!1,isInCart:!1,isInDetail:!1,username:"",password:"",loginMessage:""})}},{key:"gotoCartPage",value:function(){this.setState({isInCart:!0,isInDetail:!1})}},{key:"gotoHomePage",value:function(){var e=this;fetch("/init").catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})}).then(function(t){var a=t.shoppingList;e.setState({isInCart:!1,isInDetail:!1,shoppingList:a})})}},{key:"gotoItemDetailPage",value:function(e){this.setState({isInDetail:!0,itemDetail:e})}},{key:"gotoRegisterPage",value:function(){this.setState({isLoggedin:!0,isRegister:!0,username:"",password:"",loginMessage:""})}},{key:"gotoLoginPage",value:function(){this.setState({isLoggedin:!1,isRegister:!1,registerName:"",registerPassword:"",registerConfirmPassword:"",registerMessage:""})}},{key:"addToCart",value:function(e){var t=this;(function(e,t){return fetch("/addToCart",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:e,item:t})}).catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})})})(this.state.username,e).then(function(e){var a=e.cart,r=e.cartCount,s=e.sumPrice;t.setState({cart:a,cartCount:r,sumPrice:s})})}},{key:"removeFromCart",value:function(e){var t=this;(function(e,t){return fetch("/removeFromCart",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:e,item:t})}).catch(function(e){return Promise.reject({error:"service-error",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"service-complaint",err:e.statusText})})})(this.state.username,e).then(function(e){var a=e.cart,r=e.cartCount,s=e.sumPrice;t.setState({cart:a,cartCount:r,sumPrice:s})})}},{key:"render",value:function(){return this.state.isLoggedin?this.state.isRegister?s.a.createElement("div",{className:"shopping-app"},s.a.createElement(w,{gotoLoginPage:this.gotoLoginPage,updateRegisterName:this.updateRegisterName,updateRegisterPassword:this.updateRegisterPassword,updateRegisterConfirmPassword:this.updateRegisterConfirmPassword,registerName:this.state.registerName,registerPassword:this.state.registerPassword,registerConfirmPassword:this.state.registerConfirmPassword,createAccount:this.createAccount,registerMessage:this.state.registerMessage})):this.state.isInCart?s.a.createElement("div",{className:"shopping-app"},s.a.createElement(N,{gotoHomePage:this.gotoHomePage,gotoCartPage:this.gotoCartPage,userLogout:this.userLogout,cartCount:this.state.cartCount}),s.a.createElement(E,{gotoHomePage:this.gotoHomePage,cart:this.state.cart,removeFromCart:this.removeFromCart,sumPrice:this.state.sumPrice})):this.state.isInDetail?s.a.createElement("div",{className:"shopping-app"},s.a.createElement(N,{gotoHomePage:this.gotoHomePage,gotoCartPage:this.gotoCartPage,userLogout:this.userLogout,cartCount:this.state.cartCount}),s.a.createElement(C,{gotoHomePage:this.gotoHomePage,itemDetail:this.state.itemDetail,addToCart:this.addToCart,gotoCartPage:this.gotoCartPage})):s.a.createElement("div",{className:"shopping-app"},s.a.createElement(N,{gotoHomePage:this.gotoHomePage,gotoCartPage:this.gotoCartPage,userLogout:this.userLogout,cartCount:this.state.cartCount}),s.a.createElement(b,{updateSearchWord:this.updateSearchWord,searchWord:this.state.searchWord,searchItem:this.searchItem,searchOnKeyPress:this.searchOnKeyPress}),s.a.createElement(f,{userLogout:this.userLogout,gotoCartPage:this.gotoCartPage,shoppingList:this.state.shoppingList,addToCart:this.addToCart,gotoItemDetailPage:this.gotoItemDetailPage})):s.a.createElement("div",{className:"shopping-app"},s.a.createElement(d,{updateUserName:this.updateUserName,username:this.state.username,updatePassword:this.updatePassword,password:this.state.password,addNewUser:this.addNewUser,gotoRegisterPage:this.gotoRegisterPage,loginMessage:this.state.loginMessage}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.27ed86ca.chunk.js.map