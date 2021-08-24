import React from 'react'
import { Link } from "react-router-dom";

const Logo = () => (
	<Link to="/">
		{/* Corrigir a logo */}
		<img src="imagens\logo.png" alt="Logo Editora Tamborete." />
		<h1 className="logo">
			<span>Editora Tamborete</span>
		</h1>
	</Link>
);

export default Logo;
