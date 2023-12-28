export const getData = async (dispatch) => {
	dispatch({ type: "START_FETCHING_DATA" });
	try {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "GET_DATA", payload: data });
			});
	} catch (err) {
		dispatch({ type: "FETCH_FAILURE", payload: err.message });
		console.log(err.message);
	}
};
