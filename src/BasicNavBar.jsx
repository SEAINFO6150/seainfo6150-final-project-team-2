import React from 'react';

const BasicNavBar = ({ gotoHomePage, gotoCartPage, userLogout, cartCount }) => {
	return(
		<div className="basicNavBar">
			<div className="toggle-btn">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav>
			  <ul>
				<li><a href="#Home" onClick={ () => gotoHomePage()}>Home</a></li>
				<li><a href="#Readme">Readme</a></li>
				<li><a href="#Contact">Contact</a></li>
				<li><a href="#Others">Others</a></li>
			  </ul>
			</nav>
			<a onClick={ () => gotoCartPage()} href="#Go to detail page">
				<img src="cart.png" alt="" className="cartImage"/>
				<span className="cartCount">{cartCount}</span>
			</a>
			<a onClick={ () => userLogout()} href="#userLogout">
				<img src="shutdown.png" alt="" className="shutdownImage"/>
			</a>
		</div>
	);
};

export default BasicNavBar;