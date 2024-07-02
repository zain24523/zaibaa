import React from "react";
import "./selling.css";

export default function SellingProduct() {
	return (
		<section className="selling" id="product">
			<div className="selling_header">
				<h2>On My Best </h2>
				<h3>Selling Products</h3>
			</div>
			<div className="selling_main">
				<div className="l">
					<img src="/image/Rectangle11.png" alt="" />
				</div>
				<div className="r">
					<div className="cir">
						<div className="quote">,,</div>
						<p>
							Farm products are the backbone of the economy, sustaining both our
							lives and livelihoods Agricultural products are fundamental to our
							daily nutrition and economic well-being
						</p>
						<div className="quotes">,,</div>
					</div>
					<div className="imagess">
						<img src="/image/bottle.jpeg" alt="" className="iamge-w" />
						<img src="/image/soymlik.jpeg" alt="" className="iamge-w" />
						<img src="/image/wheat.png" alt="" className="iamge-w  dsss" />
					</div>
				</div>
			</div>
		</section>
	);
}
