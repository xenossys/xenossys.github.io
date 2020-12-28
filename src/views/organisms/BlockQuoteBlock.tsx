import React from 'react';
import styled from 'styled-components';
import { ViewDefault } from '@views/atoms/Custom';

function BlockQuoteBlock({ children }: any) {
	return <View.Container>{children}</View.Container>;
}

export default BlockQuoteBlock;

const View = {
	Container: styled(ViewDefault)`
		border-left: 5px blue solid;
		padding-left: 30px;
		background-color: rgb(248, 249, 250);
		margin: 30px 0;
	`,
};
