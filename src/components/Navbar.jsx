import React from "react";
import "./navbar.css";
import { HashLink as Links } from "react-router-hash-link";
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<nav className="nav">
			<div className="logo">
				<h1>Zaibaa</h1>
			</div>
			<nav className="nav-bar">
				<ul className="nav-bar_ul">
					<li>
						<Links to="#Services">Services</Links>
					</li>
					<li>
						<Links to="#product">Best Product</Links>
					</li>
					<li>
						<Links to="#about">Abouts_Us</Links>
					</li>
					<li>
						<Links to="#contact">ContactUs</Links>
					</li>
				</ul>
			</nav>
			<div className="nav_button">
				<button>
					<Link to="/product">Product</Link>
				</button>
			</div>
		</nav>
	);
}
