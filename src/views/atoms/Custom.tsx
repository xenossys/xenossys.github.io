import styled from 'styled-components';

type TextProps = {
	style?: {
		fontFamily?: string;
		fontSize?: string;
	};
};
export const TextDefualt = styled.div<TextProps>`
	font-size: 13px;
	box-sizing: border-box;
	display: flex;
`;

export const ViewDefault = styled.span`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;
export const ViewShadowDefault = styled.span`
	display: flex;
	flex-direction: column;
`;

export const TextInputDefault = styled.input.attrs((props) => ({
	type: 'text',
}))`
	width: 200px;
	height: 50px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
`;

export const ButtonDefault = styled.span`
	box-sizing: border-box;
	display: flex;
	width: 60px;
	height: 35px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: white;
	color: black;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
