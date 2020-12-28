import React from 'react';
import BlogCard from '@views/organisms/Card/BlogCard';
import { Router } from './posts';
import { useHistory } from 'react-router-dom';

function Home() {
	const history = useHistory();
	const onClickBlogItem = (item: any) => {
		console.log(item);
		history.push(`/github-blog/posts/${item.title + '-' + item.fileName}`);
	};
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flex: 1,
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				alignSelf: 'flex-start',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			{Object.keys(Router).map((item: any, index: number) => {
				return (
					<BlogCard
						onClickBlogItem={onClickBlogItem}
						item={Router[item]}
						index={index}
					/>
				);
			})}
		</div>
	);
}

export default Home;
