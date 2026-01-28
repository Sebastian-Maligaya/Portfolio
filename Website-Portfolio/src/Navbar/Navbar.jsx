import React from 'react'
import './Navbar.css'

function Navbar() {
	return (
		<nav className="navbar">
			<a className="logo" href="#home">Portfolio</a>
			<ul className="nav-links">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About me</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar

