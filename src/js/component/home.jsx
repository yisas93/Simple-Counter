import React, { useState, useEffect } from "react";
import Seconds from "./seconds.jsx";
//create your first component

const Home = () => {
	const [seconds, setSeconds] = useState(0)
	useEffect(()=>{
		var intervalId = setInterval(()=>{
			
				setSeconds(seconds+1)
				return clearInterval(intervalId)

			},1000)
			
	})
	
	
	
	
	return <div>
		
		<Seconds seconds={seconds} />
	</div>
}

export default Home;
