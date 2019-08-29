import React from 'react';

import { Link } from 'react-router-dom';

const NoMatch = () => (
	<div>
		<h1>Hmm... can't seem to find that page.</h1>
		<Link to="/">Take me home</Link>
	</div>
);

export default NoMatch;
