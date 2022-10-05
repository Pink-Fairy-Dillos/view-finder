import React, { useState, useEffect } from 'react'

const Post = props => {

	return (
		<div className='postContainer'>
			{props.savedLocations.name}
		</div>
	)
}


export default Post;