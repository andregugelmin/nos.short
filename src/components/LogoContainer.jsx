import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/images/Logo.svg';

export default function LogoContainer() {
	return (
		<>
			<Main>
				<img src={Logo} alt="logo" />
			</Main>
		</>
	);
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 182px;
	flex-shrink: 0;
	margin-top: 16px;

	img {
		width: 128px;
		height: 128px;
		flex-shrink: 0;
	}
`;
