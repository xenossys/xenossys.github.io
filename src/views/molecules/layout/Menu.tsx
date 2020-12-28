import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import './Menu.css';
import styled from 'styled-components';
import { ViewDefault, TextDefualt } from '@views/atoms/Custom';

function Menu() {
	const history = useHistory();
	const onClickAboutBtn = () => {
		history.push('/github-blog/about');
	};
	// const onClickPostsBtn = () => {
	// 	history.push('/github-blog/post');
	// };
	// const onClickCategorysBtn = () => {
	// 	history.push('/github-blog/category');
	// };
	return (
		<View.Container>
			<View.LogoBox>개발자</View.LogoBox>
			<Text.Title onClick={onClickAboutBtn}>about</Text.Title>
			{/* <li onClick={onClickPostsBtn}>posts</li> */}
			{/* <li onClick={onClickCategorysBtn}>category</li> */}
		</View.Container>
	);
}

export default Menu;

const View = {
	Container: styled(ViewDefault)`
		width: 100%;
		height: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`,
	LogoBox: styled(ViewDefault)`
		flex: 1;
		height: 100%;
		justify-content: center;
		font-size: 30px;
	`,
};

const Text = {
	Title: styled(TextDefualt)`
		font-size: 30px;
		color: #333333;
		cursor: pointer;
		font-weight: bold;
	`,
};
