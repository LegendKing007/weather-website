import React from "react";

const GridIcons = ({
	grid1,
	grid2,
	grid3,
	grid4,
	checkGrid1,
	checkGrid2,
	checkGrid3,
	checkGrid4,
	color1,
	color2,
	color3,
	color4,
}) => {
	return (
		<div>
			<div
				className="grid-1"
				style={{ backgroundColor: `${color1}` }}
				onClick={() => checkGrid1("Connected")}
			>
				<h3 className="air-conditioner">Air</h3>
				<h3 className="connected">{grid1}</h3>
			</div>
			<div
				className="grid-2"
				style={{ backgroundColor: `${color2}` }}
				onClick={() => checkGrid2("Connected")}
			>
				<h3 className="air-conditioner">Andriod Tv</h3>
				<h3 className="connected">{grid2}</h3>
			</div>
			<div
				className="grid-3"
				style={{ backgroundColor: `${color3}` }}
				onClick={() => checkGrid3("Connected")}
			>
				<h3 className="air-conditioner">Air Purifier</h3>
				<h3 className="connected">{grid3}</h3>
			</div>
			<div
				className="grid-4"
				style={{ backgroundColor: `${color4}` }}
				onClick={() => checkGrid4("Connected")}
			>
				<h3 className="air-conditioner">Ambient Light</h3>
				<h3 className="connected">{grid4}</h3>
			</div>
		</div>
	);
};

export default GridIcons;
