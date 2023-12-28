import React from "react";
import "./index.scss";

const Checkbox = ({ name, id }) => {
	return (
		<div className="checkbox">
			<input type="checkbox" name={name} id={id} />
			<label htmlFor={id} className="">
				{name}
			</label>
			<br />
		</div>
	);
};

export default Checkbox;
