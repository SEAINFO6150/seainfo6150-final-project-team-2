import React from 'react';

const Register = ({ gotoLoginPage, updateRegisterName, updateRegisterPassword, 
	                updateRegisterConfirmPassword, registerName, registerPassword, 
	                registerConfirmPassword, createAccount, registerMessage }) =>{
	return(
		<div className="register-page">
		  <div className="register-Container">
			<input onChange={e => updateRegisterName(e.target.value)} value={registerName}
			       className="username" placeholder="Create your name"/>
			<input onChange={e => updateRegisterPassword(e.target.value)} value={registerPassword}
				   className="password" placeholder="Create your password" type="password"/>
			<input onChange={e => updateRegisterConfirmPassword(e.target.value)} value={registerConfirmPassword}
				   className="confirmPassword" placeholder="Confirm your password" type="password"/>
			<button onClick={ () => createAccount(registerName, registerPassword, registerConfirmPassword)}>CREATE</button>
			<p className="hint">Already registered?<a onClick={ () => gotoLoginPage()} href="#Sign In"> Sign In</a></p>
			<p className="registerMessage">{registerMessage}</p>
		  </div>
		</div>
	);
}

export default Register;