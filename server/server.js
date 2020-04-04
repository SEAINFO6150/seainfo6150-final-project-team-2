const express = require('express');
const app = express();
const PORT = 4000;
const shopping = require('./shopping');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.post('/addUser', express.json(), (req,res) => {
  const { username, password } = req.body;
  const message = shopping.checkAccount(username, password);
  let sumPrice = 0;
  let flag = false;
  let carCount = 0;
  if(message === "good"){
    shopping.createCart(username);
    carCount = shopping.getCartCount(username);
    flag = true;
    sumPrice = shopping.getSumPrice(username);
  }
  res.json({ cart:shopping.cartLists[username], shoppingList:shopping.shoppingList, cartCount:carCount, message:message, flag:flag, sumPrice:sumPrice });
});

app.post('/addToCart', express.json(), (req,res) => {
  const{ username, item } = req.body;
  shopping.addToCart(username, item);
  res.json({ cart:shopping.cartLists[username], cartCount:shopping.getCartCount(username), sumPrice:shopping.getSumPrice(username)});
});

app.post('/removeFromCart', express.json(), (req,res) => {
  const{ username, item } = req.body;
  shopping.removeFromCart(username, item);
  res.json({ cart:shopping.cartLists[username], cartCount:shopping.getCartCount(username), sumPrice:shopping.getSumPrice(username)});
});

app.post('/search', express.json(), (req,res) => {
  const{ searchWord } = req.body;
  const curShoppingList = shopping.searchNewShoppingList(searchWord);
  res.json({ curShoppingList : curShoppingList});
});

app.get('/init', (req, res) => {
  res.json({ shoppingList:shopping.shoppingList });
});

app.post('/createAccount', express.json(), (req,res) => {
  const { registerName, registerPassword } = req.body;
  const message = shopping.addAccount(registerName, registerPassword);
  res.json({ message });
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );
