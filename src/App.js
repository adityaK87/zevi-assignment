import React, { useState, useReducer, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import "./App.scss";
import ProductList from "./components/ProductList";
import FilterComponent from "./components/FilterComponent";
import LatestTrend from "./components/LatestTrend";
import { getData } from "./api";
import { reducer } from "./reducer";

const initialState = {
	productData: [],
	loading: false,
	errMessage: null,
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isInsideSearch, setIsInsideSearch] = useState(false);

	useEffect(() => {
		getData(dispatch);
	}, []);

	console.log("state.products", state.productData);
	return (
		<section className="homeElement">
			<SearchBox setIsInsideSearch={setIsInsideSearch} />

			{isInsideSearch ? (
				<LatestTrend />
			) : (
				<>
					<p className="searchResults">Search Results</p>
					<section className="sectionContainer">
						<FilterComponent />

						{state.productData.length > 0 ? (
							<ProductList productData={state.productData} />
						) : (
							<p>Loading...</p>
						)}
					</section>
				</>
			)}
		</section>
	);
};

export default App;
