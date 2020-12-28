import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ViewDefault, TextDefualt } from '@views/atoms/Custom';

type itemType = {
	component: '' | React.ReactNode;
	path: string;
	fileName: string;
	title: string;
	author: string;
	date: string;
	categories: string;
	tags: string;
	toc: string;
	img: string;
	subTitle: string;
};

// !https://yeshtml5.com/
//utterances
type BlogCard = {
	item: itemType;
	index: number;
	onClickBlogItem: (i: itemType) => void;
};
function BlogCard({ item, index, onClickBlogItem }: BlogCard) {
	const [isMouseOver, setIsMouseOver] = useState(false);

	const onMouseOver = () => {
		setIsMouseOver(true);
	};
	const onMouseLeave = () => {
		setIsMouseOver(false);
	};
	return (
		<View.Container onClick={() => onClickBlogItem(item)}>
			<View.InnderContainer
				onMouseOver={onMouseOver}
				onMouseLeave={onMouseLeave}
				mouseOver={isMouseOver}
			>
				<View.ImgBox>
					<img
						style={{ width: '100%', height: '100%' }}
						src={item.img}
						alt="none"
					/>
				</View.ImgBox>
				<View.TextBox>
					<Text.Title>{item.title}</Text.Title>
					<Text.SubTitle>{item.subTitle}</Text.SubTitle>
					<Text.Date>{item.date + '  |  ' + item.categories}</Text.Date>
				</View.TextBox>
			</View.InnderContainer>
		</View.Container>
	);
}

export default BlogCard;

const View = {
	Container: styled(ViewDefault)`
		width: 50%;
		min-width: 500px;
		height: 470px;
		background-color: rgb(248, 249, 250);
		padding: 0px 10px;
	`,
	InnderContainer: styled(ViewDefault)`
		height: 500px;
		width: 100%;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;
		margin: 0px 0;
		transition: all 0.25s;
		${(props: ChangeMargin) => {
			if (!props.mouseOver) {
				return css`
					margin-top: 10px;
					box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 10px 0px;
				`;
			}
		}}
	`,
	ImgBox: styled(ViewDefault)`
		width: 100%;
		height: 300px;
		background-color: #999999;
		cursor: pointer;
	`,
	TextBox: styled(ViewDefault)`
		width: 100%;
		height: 200px;
		padding: 20px;
		background-color: white;
	`,
};

const Text = {
	Title: styled(TextDefualt)`
		font-size: 30px;
		color: #333333;
		cursor: pointer;
		font-weight: bold;
	`,
	SubTitle: styled(TextDefualt)`
		font-size: 20px;
		line-height: 1.2rem;
		height: 2.4rem;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 1rem 0;
		white-space: normal;
		text-align: left;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	`,
	Date: styled(TextDefualt)`
		font-size: 14px;
		height: 2.4rem;
		color: #333333;
		white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
	`,
};

type ChangeMargin = {
	mouseOver: boolean;
};
