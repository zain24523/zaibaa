import React from "react";
import "./tech.css";
export default function Technology() {
	return (
		<section className="main_tech" id="Services">
			<div className="tech1">
				<h1>Our Vision</h1>
				<h2>Agriculture through technology</h2>
				<p>
					"Our vision is to be the leading provider of organic and pure
					farm-based products, empowering individuals and families to embrace a
					healthier and more sustainable lifestyle. We envision a world where
					everyone has access to natural, wholesome food that nourishes both
					body and soul. Through our commitment to quality, sustainability, and
					community, we aim to create a brighter future for generations to
					come."
				</p>
				<div className="tech1inside">
					<div className="techinside1">
						<h3 className="h2">99.9% Organic</h3>
						<p>
							Farm Treasure is an engaging farming adventure where players
							embark on a quest to discover hidden treasures on their farm.
							Along the way, they cultivate crops, raise animals, and complete
							exciting challenges.
						</p>
					</div>
					<div className="techinside1">
						<h3 className="h2">High Quality</h3>
						<p>
							Farm Treasure is an engaging farming adventure where players
							embark on a quest to discover hidden treasures on their farm.
							Along the way, they cultivate crops, raise animals, and complete
							exciting challenges.
						</p>
					</div>
				</div>
			</div>
			<div className="tech2">
				<div className="tech2_main"></div>
				<div className="image1">
					<img src="/image/Rectangle7.png" alt="" />
				</div>
				<div className="image2">
					<img className="image21" src="/image/Rectangle8.png" alt="" />
					<img className="image23" src="/image/Rectangle7.png" alt="" />
				</div>
			</div>
		</section>
	);
}
