import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Router } from './posts';

type Prams = {
	postId: string;
};
function Post() {
	const { params } = useRouteMatch<Prams>();
	const [postId, setPostId] = useState('');
	useEffect(() => {
		if (params && params.postId) {
			const dummy = params.postId.split('-');
			const postId = params.postId.split('-')[dummy.length - 1];
			setPostId(postId);
		}
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flex: 1,
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				flexDirection: 'column',
			}}
		>
			{postId !== '' && Router[postId].component()}
		</div>
	);
}

export default Post;
