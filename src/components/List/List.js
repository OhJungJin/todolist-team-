import React from "react";
import Card from "components/Card/Card";

function List() {
	return (
		<>
			<div className="h-20"></div>
			<div className="grid grid-cols-3 gap-3 place-items-center">
				<Card />
			</div>
		</>
	);
}

export default List;
