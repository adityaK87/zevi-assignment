import React from "react";
import "./index.scss";

const LatestProductCard = () => {
	return (
		<div className="latestCard">
			<img
				alt="latestProductName"
				src="https://www.feltright.in/cdn/shop/files/WhatsAppImage2023-08-09at5.02.23PM_2.jpg?v=1691580853&width=1000"
				className="latestProductImage"
			/>
			<p className="latestProductName">Flop turn ruler</p>
		</div>
	);
};

export default LatestProductCard;
