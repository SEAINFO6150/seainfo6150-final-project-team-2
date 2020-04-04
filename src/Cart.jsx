import React from 'react';
import CartList from './CartList';

const Cart = ({ gotoHomePage, cart, removeFromCart, sumPrice }) => {
	return (
		<div className="cart-container">
			<div className="cart-outgoing">
				<button onClick={ () => gotoHomePage()} className="back-btn">Back</button>
			</div>
			<div className="cart-display">
				<CartList cart={cart} removeFromCart={removeFromCart} sumPrice={sumPrice}/>
			</div>
		</div>
	);
};

export default Cart;