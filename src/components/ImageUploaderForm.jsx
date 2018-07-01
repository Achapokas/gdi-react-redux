import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a form element with class name ImageUploaderForm
// write one input element and button element inside.
// export the component!

const ImageUploaderForm = () => {
	return (
		<div className="ImageUploaderForm">
			<input type="text" placeholder="upload image"/>
			<button>Upload</button>
		</div>
	)
}

export default ImageUploaderForm
