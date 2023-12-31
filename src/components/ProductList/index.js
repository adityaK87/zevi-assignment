import React from "react";
import "./index.scss";
import ProductCard from "../ProductCard";

const ProductList = ({ productData }) => {
	return (
		<div className="productList">
			{productData?.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</div>
	);
};

export default ProductList;
