import React from 'react';
import styled from 'styled-components';
import Link from '../assets/images/Link.svg';

export default function SearchBar() {
	return (
		<>
			<Main>
				<input placeholder="Insira um link para encurtar..."></input>
				<button>
					<img src={Link} alt="link" />
				</button>
			</Main>
		</>
	);
}

const Main = styled.div`
	display: flex;
	align-items: flex-start;
	width: 90%;
	max-width: 474px;
	height: auto;
	gap: 16px;
	margin: auto;

	input {
		display: flex;
		padding: 12px 24px;
		flex-direction: column;
		align-items: flex-start;
		flex: 1 0 0;
		border-radius: 8px;
		border: 2px solid #d4d4d8;
		background: #fafafa;
		width: 100%;
		height: 46px;

		overflow: hidden;
		color: #a1a1aa;
		text-overflow: ellipsis;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	button {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: auto;
		width: auto;
		padding: 8px;
		border-radius: 8px;
		background: #27272a;
		border: 0px;
	}
	img {
		width: 30px;
		height: 30px;
	}
`;
