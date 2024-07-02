import React from "react";
import "./footer.css";
import { Icon } from "@iconify/react";
export default function Footer() {
	return (
		<footer className="footer">
			<div className="circles">
				<div className="circle1">
					<Icon
						icon="streamline:twitter-solid"
						width="2rem"
						height="2rem"
						style={{ color: "#0A7D25" }}
					/>
				</div>
				<div className="circle1">
					<Icon
						icon="grommet-icons:facebook"
						width="2rem"
						height="2rem"
						style={{ color: "#0A7D25" }}
					/>
				</div>
				<div className="circle1">
					<Icon
						icon="f7:logo-instagram"
						width="2rem"
						height="2rem"
						style={{ color: "#0A7D25" }}
					/>
				</div>
				<div className="circle1">
					<Icon
						icon="mingcute:whatsapp-fill"
						width="2rem"
						height="2rem"
						style={{ color: "#0A7D25" }}
					/>
				</div>
			</div>
			<div className="linkss">
				<ul>
					<li>Home</li>
					<li>Product</li>
					<li>Contact_us</li>
					<li>OurStory </li>
					<li>Best Selling </li>
				</ul>
			</div>
			<div className="copy">Copyright © Company by zaibaa</div>
		</footer>
	);
}
