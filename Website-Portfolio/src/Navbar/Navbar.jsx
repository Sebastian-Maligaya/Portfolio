import React from 'react'
import './Navbar.css'

import { useEffect, useState } from "react";


function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav className={`navbar ${scrolled ? "navbar--solid" : " "}`}>
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

