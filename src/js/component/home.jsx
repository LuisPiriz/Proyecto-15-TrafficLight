import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color1,setColor1]= useState("red");
	const [color2,setColor2]= useState("yellow");
	const [color3,setColor3]= useState("green");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("btn-secondary")
		}else{
		setColor1("btn-danger")
		setColor2("btn-secondary")
		setColor3("btn-secondary")
	}
}
function encenderAmarillo() {

	if(color2 === "btn-warning"){
		setColor2("btn-secondary")
	}else{
	setColor2("btn-warning")
	setColor1("btn-secondary")
	setColor3("btn-secondary")
}
}
function encenderVerde() {

	if(color3 === "btn-success"){
		setColor3("btn-secondary")
	}else{
	setColor3("btn-success")
	setColor2("btn-secondary")
	setColor1("btn-secondary")
}
}
	return (
		<div className="text-center d-flex flex-column bg-dark m-auto mt-5 p-3 rounded" style={{height: 240, width: 100 }}>
			<button className={"btn rounded-circle btn-secondary "+color1} style={{height: 50, width: 50, margin: 10 }} onClick={encenderRojo}></button>
			<button className={"btn rounded-circle btn-secondary "+color2} style={{height: 50, width: 50, margin: 10 }} onClick={encenderAmarillo}></button>
			<button className={"btn rounded-circle btn-secondary "+color3} style={{height: 50, width: 50, margin: 10 }} onClick={encenderVerde}></button>
		</div>
	);

};

export default Home;
