import React from 'react';
import './setUp.css';
import { switchRoutes } from '@modules/routes/helper';
import Menu from '@views/molecules/layout/Menu';
import { ViewDefault } from '@views/atoms/Custom';
import styled from 'styled-components';

function SetUp() {
	return (
		<View.Container>
			<View.InnerContainer>
				<View.TabMenuBox>
					<Menu />
				</View.TabMenuBox>
				<View.ContentsArea>
					<View.RouterBox>{switchRoutes()}</View.RouterBox>
				</View.ContentsArea>
			</View.InnerContainer>
		</View.Container>
	);
}

export default SetUp;

const View = {
	Container: styled(ViewDefault)`
		width: 100%;
		height: 100vh;
		flex-direction: column;
		background-color: rgb(248, 249, 250);
		overflow-y: scroll;
	`,
	InnerContainer: styled(ViewDefault)`
		margin: 0px auto;
		width: 100%;
		max-width: 1000px;
	`,
	TabMenuBox: styled(ViewDefault)`
		width: 100%;
		height: 70px;
		/* border-bottom: 1px black solid; */
		justify-content: center;
	`,
	ContentsArea: styled(ViewDefault)`
		flex: 1;

		width: 100%;
		/* height: 100%; */
	`,
	RouterBox: styled(ViewDefault)`
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;
	`,
};
