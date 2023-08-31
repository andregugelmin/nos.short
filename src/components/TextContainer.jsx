import React from "react";
import styled from "styled-components";

export default function TextContainer() {
	return (
		<>
			<Main>
				<h1>nós.short</h1>
				<p>O melhor encurtador de endereços</p>
			</Main>
		</>
	);
}

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 8px;
	margin-top: 20px;

	h1 {
		color: #09090b;
		font-family: Playfair Display;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	p {
		color: #09090b;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	@media (min-height: 800px) {
		margin-top: 70px;
	}

	@media (min-height: 1000px) {
		margin-top: 121px;
	}
`;
