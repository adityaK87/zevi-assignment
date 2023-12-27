import React, { useState } from "react";
import "./index.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
	const [isAddedToWishlist, setIsAddedToWishList] = useState(true);
	const { title, image, price, rating } = product;

	let MRP = Math.floor(price * 83);

	let discontedPrice = Math.floor(MRP - (MRP * 30) / 100);
	return (
		<div className="productCard">
			<div className="imageContainer">
				<img src={image} alt="Product Name" className="productImage" />
				<button className="viewProductButton">View Product</button>
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
			<p className="productName">{title.slice(0, 20)}...</p>
			<p>
				<span className="productMRP">Rs.{MRP}</span>
				<span className="sellingPrice">
					Rs.
					{discontedPrice}
				</span>
			</p>
			<p className="rating">
				★★★★★ <span>({rating.count})</span>
			</p>
		</div>
	);
};

export default ProductCard;
