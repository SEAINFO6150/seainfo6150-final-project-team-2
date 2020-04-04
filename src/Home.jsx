import React from 'react';
import ShoppingList from './ShoppingList';

const Home = ({ userLogout, gotoCartPage, shoppingList, addToCart, gotoItemDetailPage }) => {
	return (
		<div className="home-container">
			<div className="home-display">
				<ShoppingList shoppingList={shoppingList} addToCart={addToCart} gotoItemDetailPage={gotoItemDetailPage}/>
			</div>
			<div className="home-outgoing">
				<button onClick={ () => gotoCartPage()} className="cart-btn">My Cart</button>
				<button onClick={ () => userLogout()} className="logout-btn">Logout</button>
			</div>
		</div>
	);
};

export default Home;