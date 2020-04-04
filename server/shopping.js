const shoppingList = [
	{	id : 1,
		name : "iphone XS",
		img : "iphone",
		price : "$1000.00",
		info : "Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID.The smartest, most powerful chip in a smartphone. And a breakthrough dual-camera system with Depth Control. iPhone XS is everything you love about iPhone. Taken to the extreme.",
	},
	{	id : 2,
		name : "Switch",
		img : "Switch",
		price : "$299.99",
		info : "Get the gaming system that lets you play the games you want, wherever you are, however you like. This bundle includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy‑Con controllers—one red, one blue. It also includes all the extras you need to get started.",
	},
	{	id : 3,
		name : "AirJordan 1",
		img : "AJ1",
		price : "$230.50",
		info : "The Men’s Air Jordan 1 Mid is the mid-top edition of the iconic Air Jordan 1 silhouette. Michael Jordan’s first signature shoe from 1985 was remodeled in this form in the early 2000s as an alternative for those who love the look of the famous sneaker but prefer a slightly lower height.",
	},
	{
		id : 4,
		name : "Mac-Pro",
		img : "Mac-Pro",
		price : "$1999.00",
		info : "Apple - MacBook Pro - 13 Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD(Latest Model) - Space Gray",
	},
	{
		id : 5,
		name : "Cat Bed",
		img : "catBed",
		price : "$49.00",
		info : "MADE WITH LOVE: Handmade Premium Cat Cave from 100% Merino Wool. Perfect Gift for beloved cats and cat lovers. MODERN DESIGN: Warm, cozy and durable cat bed for your lovely cat and special touch to home decor. Perfect for cats to play, nap, rest, relax and sleep inside or on top",
	},
	{
		id : 6,
		name : "Cat Tree",
		img : "catTree",
		price : "$110.49",
		info : "Vesper Cat Tree Scratching Post with Condo - Oak Furniture. Natural scratching surfaces + Plush cushions + Natural oak color",
	},
	{
		id : 7,
		name : "Basketball",
		img : "basketball",
		price : "$31.06",
		info : "Official NBA size and weight: Size 7, 29.5 + Zi/O Tournament composite cover + Shipped inflated and game-ready + Designed for indoor and outdoor play + Recommended inflation is 8 PSI", 
	}
];

const cartLists = {

};

const users = {

};

const accountList = {
	"test":"test",
}

class Cart {
	constructor(name) {
		this.owner = name;
		this.cartList = [];
		this.count = 0;
		this.sumPrice = 0;
	}

	addCartList(item){
		for(let single of this.cartList){
			if(single.id === item.id){
				return;
			}
		}
		this.sumPrice = this.sumPrice + parseFloat((item.price).substring(1));
		this.addCount();
		this.cartList.push(item);
	}

	removeCartList(id){
		for(let index in this.cartList){
			if(this.cartList[index].id === id){
				this.sumPrice = this.sumPrice - parseFloat((this.cartList[index].price).substring(1))
				this.deleteCount();
				this.cartList.splice(index,1);
				return;
			}
		}
	}

	getCartList(){
		return this.cartList;
	}

	setCartList(cartList){
		this.cartList = cartList;
	}

	addCount(){
		this.count = this.count + 1;
	}

	deleteCount(){
		this.count = this.count - 1;
	}

	getCount(){
		return this.count;
	}

	setCount(count){
		this.count = count;
	}

	getSumPrice(){
		return this.sumPrice;
	}

}

function addUser( username ) {
  users[username] = username;
}

function userIsExist({username}){
	if(!users[username]) return false;
	else return true;
}

function createCart(name){
	if(users[name]){
		return;
	}
	else{
		cartLists[name] = new Cart(name);
		addUser(name);
	}	
}

function addToCart(username, item){
	cartLists[username].addCartList(item);
}

function removeFromCart(username, item){
	cartLists[username].removeCartList(item.id);
}

function searchNewShoppingList(searchWord){
	const curShoppingList = [];
	for(let item of shoppingList){
		if(checkSearch(item.name, searchWord)){
			curShoppingList.push(item);
		}
	}
	return curShoppingList;
}

function checkSearch(itemName, searchWord){
	const Lower1 = itemName.toLowerCase();
	const Lower2 = searchWord.toLowerCase();
	if(Lower1.indexOf(Lower2) != -1){
		return true;
	}else{
		return false;
	}
}

function getCartCount(username){
	return cartLists[username].getCount();
}

function addAccount(username, password){	
	if(accountList[username]){
		const errMessage = "User Already exists";
		return errMessage;
	}else{
		accountList[username] = password;
		const Message = "Sign up successfully";
		return Message;
	}
	
}

function checkAccount(username, password){
	if(!accountList[username]){
		const error = "User not exists";
		return error;
	}
	if(accountList[username] !== password){
		const error = "Password not correct";
		return error;
	}
	return "good";

}

function getSumPrice(username){
	return cartLists[username].getSumPrice();
}

const shopping = {
	shoppingList,
	cartLists,
	createCart,
	addToCart,
	removeFromCart,
	searchNewShoppingList,
	getCartCount,
	addAccount,
	checkAccount,
	getSumPrice,
};

module.exports = shopping;