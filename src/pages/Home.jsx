import React from 'react';
import styled from 'styled-components';

import LogoContainer from '../components/LogoContainer';
import TextContainer from '../components/TextContainer';
import FooterContainer from '../components/FooterContainer';
import SearchBar from '../components/SearchBar';

export default function Home() {
	return (
		<>
			<Main>
				<LogoContainer />
				<TextContainer />
				<SearchBar />
				<p>Visualizar os últimos links encurtados</p>
				<FooterContainer />
			</Main>
		</>
	);
}

const Main = styled.div`
	p {
		color: #27272a;
		text-align: center;
		font-family: Open Sans;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 8px;
	}
`;
