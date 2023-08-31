import React, { useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

import Button from "./Button";
import Clipboard from "../assets/images/Clipboard.svg";
import Check from "../assets/images/Check.svg";

export default function ShortnedLinks(props) {
	const {url, shortUrl, time} = props;
	console.log(url, shortUrl, time);
	const [buttonState, setButtonState] = useState("unlocked");
	const [buttonImg, setButtonImg] = useState(Clipboard);	

	function copyUrl(){
		copy(shortUrl);
		setButtonImg(Check);
		setButtonState("active");
		setTimeout(resetButton, 2000);
	}

	function resetButton(){
		setButtonImg(Clipboard);
		setButtonState("unlocked");
	}

	return (
		<Main>
			<div className="infos">
				<p>Link original: {url} </p>
				<p>Expira em: {time} segundos</p>
			</div>
			<Bar>
				<div className="url-container">
					<p className="url">{shortUrl}</p> 
				</div>
				<Button buttonImg = {buttonImg} buttonState = {buttonState} buttonFunction = {copyUrl}></Button>
			</Bar>
		</Main>		
	);
}

const Main = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    .infos{
        width: 90%;
        max-width: 474px;
    }
    .infos p{
		color: #a1a1aa;
        font-family: Open Sans;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const Bar = styled.div`
	display: flex;
	align-items: flex-start;
	width: 90%;
	max-width: 474px;
	height: auto;
	gap: 16px;
	margin: auto;

	.url-container{		
		border-radius: 8px;
		border: 2px solid #d4d4d8;
		background: #fafafa;
		width: 100%;
		height: 46px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;		
	}

	.url{
		padding: 12px 24px;
		color: #909090;
		text-overflow: ellipsis;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0;
		
	}
`;


ShortnedLinks.propTypes = {
	url: PropTypes.string,
	shortUrl: PropTypes.string,
	time: PropTypes.number
};