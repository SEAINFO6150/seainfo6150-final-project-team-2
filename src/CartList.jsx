import React from 'react';

const CartList = ({ cart, removeFromCart, sumPrice }) => {
	return(
		<ol className="cartList">
			{cart.cartList.map( item => { return formatItem(item, item.id, removeFromCart)})}
			<div className="to-checkout">
				<div className="price-info">
					<p className="sumPrice">{"$" + sumPrice}</p>
				</div>
				<div className="checkout-btn">
					<button className="checkout">Checkout</button>
				</div>
			</div>
		</ol>
	);
};

const formatItem = ( item, id, removeFromCart ) => {
	return(
		<li key={id}>
				<div className="image-info">
					<img src={item.img+".jpg"} alt=""/> 
				</div>
				<div className="detail-info">
					<div className="name-info">
						<span className="itemName">{item.name}</span>	
					</div>
					<div className="price-info">
						<span className="itemPrice">{item.price}</span>
					</div>
					<button onClick={ () => removeFromCart(item)} className="remove-btn">Remove</button>
				</div>
				
		</li>
	);
};

export default CartList;