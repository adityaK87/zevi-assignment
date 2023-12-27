import React from "react";
import "./index.scss";
import LatestProductCard from "./LatestProductCard";

const LatestTrend = () => {
	return (
		<div className="latestTrendContainer">
			<p className="latestTrendHeading"> Latest Trends</p>
			<section className="latestCards">
				<LatestProductCard />
				<LatestProductCard />
				<LatestProductCard />
				<LatestProductCard />
				<LatestProductCard />
			</section>

			<section>
				<p className="latestTrendHeading">Popular Suggestions</p>
				<ul>
					<li>Striped shirt dress</li>
					<li>Satin shirts</li>
					<li>Denim jumpsuit</li>
					<li>Leather dresses</li>
					<li>Solid shirts</li>
				</ul>
			</section>
		</div>
	);
};

export default LatestTrend;
