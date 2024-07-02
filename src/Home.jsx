import React from "react";
import { Icon } from "@iconify/react";
import "./home.css";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import SellingProduct from "./components/SellingProduct";
import Stroy from "./components/Stroy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="homes">
			<Navbar />
			<div className="whatsapp">
				<a href="https://wa.me/+923019612828">
					<Icon icon="logos:whatsapp-icon" width="3rem" height="3rem" />
				</a>
			</div>
			<section className="hero">
				<div className="lf">
					<h2 className="">
						We Introduce to you Farm to table pure Organic Treasures
					</h2>
					<p>
						Farm Treasure is an engaging farming adventure where players embark
						on a quest to discover hidden treasures on their farm. Along the
						way, they cultivate crops, raise animals, and complete exciting
						challenges. As they unlock secrets and rare items, players enhance
						their farms.
					</p>
					<div className="btn123">
						<button>
							<Link to="/product">Products</Link>
						</button>
					</div>
				</div>
				<div className="rf">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-bs-ride="carousel"
						data-bs-interval="2000" // Change slide every 2 seconds
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="/image/home.png"
									className="d-block w-100"
									alt="Slide 1"
								/>
							</div>
							<div className="carousel-item">
								<img
									src="/image/Rectangle7.png"
									className="d-block w-100"
									alt="Slide 2"
								/>
							</div>
							<div className="carousel-item">
								<img
									src="/image/home.png"
									className="d-block w-100"
									alt="Slide 3"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Technology />
			<SellingProduct />
			<Stroy />
			<Contact />
			<Footer />
		</div>
	);
}
