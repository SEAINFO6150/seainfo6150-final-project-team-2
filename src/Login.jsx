import React from 'react';

const Login = ({ updateUserName, username, updatePassword, password, addNewUser, gotoRegisterPage, loginMessage }) => {
	return (
		<div className="login-page">
		  <div className="login-Container">
			<input onChange={e => updateUserName(e.target.value)} value={username} 
			       className="username" placeholder="Enter your name"/>
			<input onChange={e => updatePassword(e.target.value)} value={password}
				   className="password" placeholder="Enter your password" type="password"/>
			<button onClick={ () => addNewUser(username, password)}>Login</button>
			<p className="hint">Not register?<a onClick={ () => gotoRegisterPage()} href="#create accout"> Create an account</a></p>
		  	<p className="loginMessage">{loginMessage}</p>
		  </div>
		</div>
	);
};

export default Login;