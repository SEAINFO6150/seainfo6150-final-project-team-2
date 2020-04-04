import React from 'react';

const ItemDetail = ({ gotoHomePage, itemDetail, addToCart, gotoCartPage }) => {
	return(
		<div className="detail-container">
			<div className="image-info">
			  <img src={itemDetail.img+".jpg"} alt=""/>
			</div>
			<div className="detail-others">
				<div className="detail-info">
				  <div className="name-info">
					<span className="itemName">{itemDetail.name}</span>
				  </div>
				  <div className="description">
				  	<span className="itemDescription">{itemDetail.info}</span>
				  </div>
				  <div className="price-info">
				    <span className="itemPrice">{itemDetail.price}</span>
				  </div>
				</div>
				<button onClick={() => addToCart(itemDetail)} className="addToCart-btn">Add to Cart</button>
				<button onClick={() => gotoHomePage()} className="home-btn">Back to Home</button>
				<button onClick={() => gotoCartPage()} className="cart-btn">Go to Cart</button>
			</div>
		</div>
	);
};

export default ItemDetail;