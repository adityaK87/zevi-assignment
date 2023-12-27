import React from "react";
import SearchBox from "./components/SearchBox";
import "./App.scss";
import ProductList from "./components/ProductList";
import FilterComponent from "./components/FilterComponent";

const App = () => {
	return (
		<section className="homeElement">
			<SearchBox />
			<p className="searchResults">Search Results</p>
			<section className="sectionContainer">
				<FilterComponent />

				<ProductList />
			</section>
		</section>
	);
};

export default App;
