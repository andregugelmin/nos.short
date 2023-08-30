import React from "react";
import styled from "styled-components";

export default function FooterContainer() {
	return (
		<>
			<Main>
				<p>Todos os direitos reservados @ Nosso Olhar Solidário 2023</p>
			</Main>
		</>
	);
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	position: fixed;
	bottom: 16px;
	right: 0;
	left: 0;

	p {
		color: #27272a;
		text-align: center;

		/* Body/Normal */
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`;
