import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }) => {
	return (
		<nav className="menu">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				{isAuthenticated && (
					<li>
						<Link to="/cadastrar">Cadastrar</Link>
					</li>
				)}

				{isAuthenticated && (
					<li>
						<button
							className="btnLink"
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Logout
						</button>
					</li>
				)}

				{!isAuthenticated && (
					<li>
						<Link to="/login">Login</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Header;
