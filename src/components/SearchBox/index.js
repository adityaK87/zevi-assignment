import React from "react";
import "./index.scss";

const SearchBox = ({ setIsInsideSearch }) => {
	return (
		<input
			type="text"
			className="searchBox"
			placeholder="Search"
			onFocus={() => setIsInsideSearch(true)}
			onBlur={() => setIsInsideSearch(false)}
		/>
	);
};

export default SearchBox;
