import React, { useState, useEffect } from 'react'

const Post = props => {
	let locCard = [];
	if (props.savedLocations.category === 1){
		locCard.push(<div className='photospot'><div>{props.savedLocations.name}</div>
		<div>{props.savedLocations.street_address}</div>
		<div>{props.savedLocations.city}, {props.savedLocations.state} {props.savedLocations.zip_code}</div>
		<div>{props.savedLocations.caption}</div></div>)
	}
	else if (props.savedLocations.category === 2){
		locCard.push(<div className='food'><div>{props.savedLocations.name}</div>
		<div>{props.savedLocations.street_address}</div>
		<div>{props.savedLocations.city}, {props.savedLocations.state} {props.savedLocations.zip_code}</div>
		<div>{props.savedLocations.caption}</div></div>)
	}

	else if (props.savedLocations.category === 3){
		locCard.push(<div className='hiking'><div>{props.savedLocations.name}</div>
		<div>{props.savedLocations.street_address}</div>
		<div>{props.savedLocations.city}, {props.savedLocations.state} {props.savedLocations.zip_code}</div>
		<div>{props.savedLocations.caption}</div></div>)
	}

	else{
		locCard.push(<div className='other'><div>{props.savedLocations.name}</div>
		<div>{props.savedLocations.street_address}</div>
		<div>{props.savedLocations.city}, {props.savedLocations.state} {props.savedLocations.zip_code}</div>
		<div>{props.savedLocations.caption}</div></div>)
	}


	return (
		<div className='postContainer'>
			{props.savedLocations.name}
			{props.savedLocations.created_by_id}
			{props.savedLocations.category}
		</div>
	)
}


export default Post;