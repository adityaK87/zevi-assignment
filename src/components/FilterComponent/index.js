import React from "react";
import "./index.scss";
import Checkbox from "./Checkbox";
const FilterComponent = () => {
	return (
		<div className="filterComponent">
			<section>
				<p className="filterName">BRAND</p>
				<Checkbox name="Mango" id="mango" />
				<Checkbox name="H&M" id="H&M" />
				<hr />
			</section>

			<section>
				<p className="filterName">PRICE RANGE</p>
				<Checkbox name="Under 500" id="priceRange" />
				<Checkbox name="1000 To 3000" id="1000to3000" />
				<hr />
			</section>

			<section>
				<p className="filterName">RATINGS</p>
				<Checkbox name="⭐⭐⭐⭐⭐" id="⭐⭐⭐⭐⭐" />
				<Checkbox name="⭐⭐⭐⭐" id="⭐⭐⭐⭐" />
				<Checkbox name="⭐⭐⭐" id="⭐⭐⭐" />
				<Checkbox name="⭐⭐" id="⭐⭐" />
				<Checkbox name="⭐" id="⭐" />
			</section>
		</div>
	);
};

export default FilterComponent;
