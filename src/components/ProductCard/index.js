import React, { useState } from "react";
import "./index.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = () => {
	const [isAddedToWishlist, setIsAddedToWishList] = useState(true);

	return (
		<div className="productCard">
			<div className="imageContainer">
				<img
					src="https://www.feltright.in/cdn/shop/files/WhatsAppImage2023-08-09at5.02.23PM_2.jpg?v=1691580853&width=1000"
					alt="Product Name"
					className="productImage"
				/>

				{/* Add to wishlist  */}
				{isAddedToWishlist ? (
					<span
						className="wishlistButton"
						onClick={() =>
							setIsAddedToWishList(!isAddedToWishlist)
						}>
						<CiHeart />
					</span>
				) : (
					<span
						className="filled"
						onClick={() =>
							setIsAddedToWishList(!isAddedToWishlist)
						}>
						<FaHeart />
					</span>
				)}
			</div>
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
