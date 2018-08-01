import React from 'react';

const Card = function(props){
	return(
		<div className= "tc br4 pa3 dib ma2 grow bw2 shadow-5 bg-light-green">
			<img alt="myimg" src={`https://robohash.org/${props.id}`}/>
			<h2> {props.name} </h2>
			<p> {props.email} </p>
		</div>
	);
}

export default Card;