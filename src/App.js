
import React from 'react';
import axios from 'axios'
function App() {
	const loadbucket = async ()=>{
		const res =	await axios.get("https://teamhomwork.herokuapp.com/comment")
		return res.data
	}
	
	React.useEffect(()=>{
		loadbucket()
	},[])
	console.log(loadbucket())
	return <div className="App">
		asdasd
	</div>;
}

export default App;
