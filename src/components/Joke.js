import React, { Component } from 'react';
import axios from 'axios';

class Joke extends Component {

	state = {
		joke: ''
	  };

	  fetchJoke = () => {
		axios
			.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' },
			})
			.then(res => {
				console.log(res.data);
				this.setState({joke: res.data});
			})
			.catch(err => console.log(err));
	};
	  
	  componentDidMount() {
		  this.fetchJoke();
	  }
	  
	//   componentDidUpdate() {
	// 	  this.fetchJoke();
	//   }
	  componentWillUnmount() {
		  this.fetchJoke();
	  }

	render() {
		return (
			<div className="mt-4">
				<div className="card">
					<h5 className="card-header">Dad Joke</h5>
					<div className="card-body">
						<p className="card-text">{this.state.joke.joke}</p>
						<a className="btn btn-primary text-white" onClick={this.fetchJoke}>
							Get Another Joke
						</a>
					</div>
				</div>
			</div>			
		)
	}

}

export default Joke;

// export default function Joke() {
	// useState is a hook to set the inital state of the component
	// [something, setSomething] 
	// const [joke, setJoke] = useState('');

	// useEffect(() => {
	// 	fetchJoke();
	// 	//look any changes in this component with []
	// }, []);

	// const fetchJoke = () => {
	// 	axios
	// 		.get('https://icanhazdadjoke.com/', {
	// 			headers: { Accept: 'application/json' },
	// 		})
	// 		.then(res => setJoke(res.data))
	// 		.catch(err => console.log(err));
	// };

// 	return (
// 		<div className="mt-4">
// 			<div className="card">
// 				<h5 className="card-header">Dad Joke</h5>
// 				<div className="card-body">
// 					<p className="card-text">{joke.joke}</p>
// 					<a className="btn btn-primary text-white" onClick={fetchJoke}>
// 						Get Another Joke
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
