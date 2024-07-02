import React from "react";
import "./product.css";

export default function Prodducts() {
	return (
		<div>
			<div className="text-center p-5  allp ">
				<h2>Our All Products </h2>
			</div>
			<div className="card-container">
				<div className="card">
					<div className="imagedi">
						<img src="/image/bottle.jpeg" alt="" />
					</div>
					<h2 className="">Cooking Oil </h2>
					<p>
						Canola oil, derived from rapeseeds, is pure and organic. It’s light,
						neutral-flavored, rich in healthy fats, and widely used for cooking
						and baking.
					</p>
					<div className="btdiv">
						<button className="btsss">view product</button>
					</div>
				</div>
				<div className="card">
					<div className="imagedi">
						<img src="/image/wheat.png" alt="" />
					</div>
					<h2>Wheat Porridge </h2>
					<p>
						Wheat porridge, made from cracked or whole wheat, is nutritious,
						rich in fiber, vitamins, and minerals, promoting digestive health
						and providing sustained energy.
					</p>
					<div className="btdiv">
						<button className="btsss">view product</button>
					</div>
				</div>
				<div className="card">
					<div className="imagedi">
						<img src="/image/soymlik.jpeg" alt="" />
					</div>
					<h2>Soy Milk </h2>
					<p>
						Soy milk, made from soybeans, is a dairy-free, plant-based milk
						alternative. Rich in protein, vitamins, and minerals, it's ideal for
						vegans and lactose-intolerant people.
					</p>
					<div className="btdiv">
						<button className="btsss">view product</button>
					</div>
				</div>
			</div>
		</div>
	);
}
