import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [traffic1, setTraffic1] = useState(false);
	const [traffic2, setTraffic2] = useState(false);
	const [traffic3, setTraffic3] = useState(false);

	return (
		<div className=" container ">
			<div
				className="container "
				style={{
					background: "black",
					width: "10px",
					height: "50px",
				}}></div>
			<div
				className="container rounded-2   "
				style={{
					background: "black",
					width: "100px",
					height: "250px",
				}}>
				{" "}
				<div
					className="rojo rounded-circle "
					onClick={() => {
						setTraffic1(true);
						setTraffic2(false);
						setTraffic3(false);
					}}
					style={{
						background: traffic1 == true ? "red" : "#8B0000",
						width: "80px",
						height: "70px",
					}}></div>
				<div
					className="amarillo rounded-circle mt-2 "
					onClick={() => {
						setTraffic1(false);
						setTraffic2(true);
						setTraffic3(false);
					}}
					style={{
						background: traffic2 == true ? "yellow" : "#A17D08",
						width: "80px",
						height: "70px",
					}}></div>
				<div
					className="verde rounded-circle mt-2"
					onClick={() => {
						setTraffic1(false);
						setTraffic2(false);
						setTraffic3(true);
					}}
					style={{
						background: traffic3 == true ? "#47EE08" : "#2D8B09",
						width: "80px",
						height: "70px",
					}}></div>
			</div>
		</div>
	);
};

export default Home;
