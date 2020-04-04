# Final Project - Shopping Site 

## Summary
Our team implemented a shopping site based on React. 

## Configurations and Code

### Installation
* `npm run server` will begin the server, please follow it, Thank you so much!

## Interface introduction

### Login
* The first interface is Login, for convenience, If you think registration is too much trouble, we set an account for tester: username: "test", password: "test"
* You should create an account to login, if there is no text in username and password input box, or username does not match password, The page will display an error red message

### Register
* Click `Create an account` will go to Register
* If there is no text in username, password and confirmpassword input box, or password does not equal to confirmpassword, the page will dispaly an error red message
* By click Create button, it successfully created an account object in /server/shopping.js

### Home
* If you successfully create an account, you can go to Home page by enter correct username and password and click LOGIN button
* In home page, you can see 7 shopping items listed which was created in /server/shopping.js
* There is a black navigation bar(every page will have one) on the top of the home page. There are 5 parts in navigation bar:
  * (1) Side menu
  * (2) Home/Readme/Contact/Others: If you are at other pages, you can easily go back to home page by click it. Other parts will lead you to other pages
  * (3) Search Icon(only in home page to make a search): When you move your cursor over this icon, the navigation bar will show.       You can type the text to make a search(by click search icon or type "Enter")
  * (4) Cart Icon: Go to Cart page by clicking it. And You can see how many shopping items you already added to your cart
  * (5) Shutdown Icon: Logout and go back to Login page
* You can click the image of the shopping item to go to the detail page of the item
* You can click "Add To Cart" to add it to your shopping cart and you would see the changes of the count in Cart Icon

### Cart
* Click Cart Icon to go to Cart Page
* The navigation bar is still there, if you already added some products, you can see items in your cart
* You can remove the item when click "Remove" button, and it will change the count in Cart Icon
* You can see the total price of your cart, the "checkout" button is disable

### Item Detail Page
* Click Item Image to go to the detail Page
* In this Page you can see the details information of the item, you can also click "Add to Cart" to add the item you like to your cart
* Click title in navigation bar to go to other pages
  
### Others
* In case of your computer or browser can not show image(so you can not click icon to go to other pages) You can just commented out the code after Line 600 in /src/App.css, we also set some button to make pages connections
* The users data will be retained even if you logout, so if you added your shopping items to your cart, you can see them again in next logedin
