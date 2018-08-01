import React from 'react';
import CardList from './CardList.js';
import {myRobList} from './Robots.js';
import SearchBox from './SearchBox.js';
import './App.css'
import Scroll from './Scroll.js';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: myRobList,			
			searchField: ''
		}
	}

	myEventHandler = (event) =>{
		this.setState({searchField: event.target.value});
	}

	render(){
		const filteredRobs = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return(
			<div>
				<h1 className= "tc f1 purple">RoboFriends</h1>
				<SearchBox searchChange= {this.myEventHandler} />
				<Scroll>
				<CardList robots= {filteredRobs} />
				</Scroll>
			</div>
		);
	}
}

export default App;