import "./register.scss";

const Register = () => {
	return (
		<div className="register">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt="Netflix logo"
					/>
					<button className="loginButton">Sign In</button>
				</div>
			</div>
			<div className="container">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter ypur email to create or restart you membership.
				</p>
				<input type="email" placeholder="email address" />
				<button className="registerButton">Get Started</button>
			</div>
		</div>
	);
};

export default Register;
