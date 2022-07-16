import React from "react";
import GokuImage from "./403225.jpg";

const ImageContainer = () => {
	return (
		<div className="image-container">
			<h3 className="living-room-camera">Living Room Camera</h3>
			<img src={GokuImage} alt="Goku" className="goku" />
		</div>
	);
};

export default ImageContainer;
