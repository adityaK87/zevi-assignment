import React from "react";
import "./index.scss";

const ProductCard = () => {
	return (
		<div className="productCard">
			<img
				src="https://www.feltright.in/cdn/shop/files/WhatsAppImage2023-08-09at5.02.23PM_2.jpg?v=1691580853&width=1000"
				alt="Product Name"
				className="productImage"
			/>
			<p className="productName">Flop turn ruler</p>
			<p>
				<span className="productMRP">Rs.549</span>
				<span className="sellingPrice">Rs.649</span>
			</p>
			<p className="rating">
				★★★★★ <span>(210)</span>
			</p>
		</div>
	);
};

export default ProductCard;
