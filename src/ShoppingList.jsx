import React from 'react';

const ShoppingList = ({ shoppingList, addToCart, gotoItemDetailPage }) => {
	return (
		<ol className="shoppingList">
			{ shoppingList.map( item => { return formatItem(item, item.id, addToCart, gotoItemDetailPage)}) }
		</ol>
	);
};

const formatItem = ( item, id, addToCart, gotoItemDetailPage ) => {
	return(
		<li key={id}>
			<div className="itemList">
				<div className="image-info">
					<a onClick={ () => gotoItemDetailPage(item)} href="#Go to detail page">
						<img src={item.img+".jpg"} alt=""/>
					</a>
				</div>
				<div className="others">
					<div className="details">
					  <div className="name-info">
					    <span className="itemName">{item.name}</span>
					  </div>
					  <div className="price-info">
						<span className="itemPrice">{item.price}</span>
					  </div>
					</div>
					<button onClick={ () => addToCart(item)}>Add to Cart</button>
				</div>
			</div>
		</li>
	);
};

export default ShoppingList;
