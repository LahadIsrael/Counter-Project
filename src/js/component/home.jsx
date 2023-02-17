import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [counter,setCounter] = useState(0)
	useEffect(()=>{
		setInterval(()=>{
			setCounter(currentValue=>currentValue+1)
		},1000)
	},[])
	console.log(counter)
	return (
		<div className="d-flex gap-5">
			<p>{Math.floor(counter/100000)%10}</p>
			<p>{Math.floor(counter/10000)%10}</p>
			<p>{Math.floor(counter/1000)%10}</p>
			<p>{Math.floor(counter/100)%10}</p>
			<p>{Math.floor(counter/10)%10}</p>
			<p>{counter%10}</p>
			
		</div>
	);
};

export default Home;
