import { useState } from "react";
import "./navbar.scss";
import {
	MdSearch,
	MdNotifications,
	MdOutlineArrowDropDown,
} from "react-icons/md";

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt="Logo"
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and popular</span>
					<span>My list</span>
				</div>
				<div className="right">
					<MdSearch className="icon" />
					<span>KID</span>
					<MdNotifications className="icon" />
					<img
						src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="Profile image"
					/>
					<div className="profile">
						<MdOutlineArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
