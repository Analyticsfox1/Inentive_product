import React from 'react';

import FirebaseContext from './Context';

const Consumer = () => (
	<div>
		<FirebaseContext.Consumer>
			{firebase => {
				return <div>I've access to Firebase and render something.</div>;
			}}
		</FirebaseContext.Consumer>
	</div>
);

export default Consumer;