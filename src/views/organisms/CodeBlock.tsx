import React from 'react';
import styled from 'styled-components';

function CodeBlock({ value }: any) {
	return (
		<View.Container style={{ background: '#000', color: '#fff', padding: 50 }}>
			<code>{value}</code>
		</View.Container>
	);
}

export default CodeBlock;

const View = {
	Container: styled.pre`
		background-color: #000;
		color: #fff;
		padding: 50px;
		width: 100%;
	`,
};
