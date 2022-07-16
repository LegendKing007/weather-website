import React, { Component } from "react";
import "./App.css";
import Background from "./background";
import MenuIcons from "./menuIcons";
import ImageContainer from "./imageContainer";
import GridIcons from "./gridIcons";
import WeatherBackground from "./weather";

class App extends Component {
	state = {
		connected: false,
		color1: "",
		color2: "",
		color3: "",
		color4: "",
		grid1: "Not Connected",
		grid2: "Not Connected",
		grid3: "Not Connected",
		grid4: "Not Connected",
	};

	checkGrid1 = (value) => {
		if (value !== this.state.grid1) {
			this.setState({ color: "Connected" });
			this.setState({ color1: "turquoise" });
		} else {
			this.setState({ grid1: "Not Connected" });
			this.setState({ color1: "" });
		}
	};
	checkGrid2 = (value) => {
		if (value !== this.state.grid2) {
			this.setState({ grid2: "Connected" });
			this.setState({ color2: "turquoise" });
		} else {
			this.setState({ grid2: "Not Connected" });
			this.setState({ color2: "" });
		}
	};
	checkGrid3 = (value) => {
		if (value !== this.state.grid3) {
			this.setState({ grid3: "Connected" });
			this.setState({ color3: "turquoise" });
		} else {
			this.setState({ grid3: "Not Connected" });
			this.setState({ color3: "" });
		}
	};
	checkGrid4 = (value) => {
		if (value !== this.state.grid4) {
			this.setState({ grid4: "Connected" });
			this.setState({ color4: "turquoise" });
		} else {
			this.setState({ grid4: "Not Connected" });
			this.setState({ color4: "" });
		}
	};
	render() {
		return (
			<div>
				<WeatherBackground />
				<GridIcons
					grid1={this.state.grid1}
					grid2={this.state.grid2}
					grid3={this.state.grid3}
					grid4={this.state.grid4}
					checkGrid1={this.checkGrid1}
					checkGrid2={this.checkGrid2}
					checkGrid3={this.checkGrid3}
					checkGrid4={this.checkGrid4}
					color1={this.state.color1}
					color2={this.state.color2}
					color3={this.state.color3}
					color4={this.state.color4}
				/>
				<ImageContainer />
				<MenuIcons />
				<Background />
			</div>
		);
	}
}
export default App;
