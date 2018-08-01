import React from 'react';
import Card from './Card.js';

const CardList = function({robots}){
	return(
		robots.map(function(user,i){
			return <Card id={robots[i].id} name={robots[i].name}
			email={robots[i].email} />
		})
	);
}

export default CardList;