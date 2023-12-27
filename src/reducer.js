export const reducer = (state, action) => {
	switch (action.type) {
		case "START_FETCHING_DATA":
			return { ...state, loading: true };
		case "GET_DATA":
			return { ...state, productData: action.payload };
		case "FETCH_FAILURE":
			return { ...state, errMessage: action.payload };
		default:
			break;
	}
};
