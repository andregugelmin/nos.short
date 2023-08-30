import React, { useEffect, useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";

import useCreateLink from "../hooks/api/useCreateLink";
import Button from "./Button";
import Link from "../assets/images/Link.svg";
import Clipboard from "../assets/images/Clipboard.svg";
import Check from "../assets/images/Check.svg";

export default function SearchBar() {
	// eslint-disable-next-line no-unused-vars
	const { createShortLinkData, loadingCreatingShortLink, createShortLink, crateShortLinkError} = useCreateLink();
	const [url, setURL] = useState("");
	const [inputDisabled, setInputDisabled] = useState(false);
	const [buttonState, setButtonState] = useState("locked");
	const [buttonImg, setButtonImg] = useState(Link);
	const [urlCreated, setUrlCreated] = useState(false);
	const [buttonFunction, setButtonFunction] = useState(()=>submitURL);

	let shortUrl = "";

	useEffect(() => {
		if(createShortLinkData){			
			handleShotUrl(createShortLinkData);
			console.log(createShortLinkData);
		}
	}, [createShortLinkData]);


	function handleShotUrl(data){
		setUrlCreated(true);				
		setURL(data.link_url);
		setButtonImg(Clipboard);	
		setButtonState("unlocked");		
		setButtonFunction(()=>copyUrl);
		shortUrl = data.link_url;
	}

	const handleChange = (event) => {		
		setURL(event.target.value);

		if(isValidUrl(event.target.value)){
			setButtonState("unlocked");
		}
		else setButtonState("locked");
		
	};	

	async function submitURL(){
		setInputDisabled(true);
		setButtonState("active");
		const signupData = {
			url,
			ttl: 600
		};
		await createShortLink(signupData);
	}

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

	function isValidUrl(url) {
		try {
			new URL(url);
			return true;
		} catch (err) {
			return false;
		}
	}

	return (
		<>
			{!urlCreated ? 
				<Main>
					<Bar>
						<div className="url-container">
							<input placeholder="Insira um link para encurtar..." onChange={handleChange} value={url} disabled={inputDisabled} />
						</div>
						<Button buttonImg = {buttonImg} buttonState = {buttonState} buttonFunction = {buttonFunction}></Button>
					</Bar>
					<a>Visualizar os últimos links encurtados</a>
				</Main>
				: 
				<Main>
					<Bar>
						<div className="url-container">
							<p>{url}</p> 
						</div>
						<Button buttonImg = {buttonImg} buttonState = {buttonState} buttonFunction = {buttonFunction}></Button>
					</Bar>
					<a>Visualizar os últimos links encurtados</a>
					<a>Voltar para encurtar mais links</a>
				</Main>
			}			
		</>
	);
}

const Main = styled.div`
	display: flex;
	flex-direction: column;

	a {
		color: #27272a;
		text-align: center;
		font-family: Open Sans;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 8px;
	}
	a:hover{
		cursor: pointer;
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

	p{
		padding: 12px 24px;
		color: #a1a1aa;
		text-overflow: ellipsis;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0;
		
	}

	input {
		padding: 12px 24px;
		border: none;
		width: 100%;
		height: 100%;
		outline: none;	
		color: #a1a1aa;
		text-overflow: ellipsis;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		line-height: normal;	
		font-weight: 400;
	}

	::placeholder {
		color: #a1a1aa;
		font-family: Open Sans;
		font-size: 1rem;
		font-style: normal;
		line-height: normal;	
		font-weight: 400;
	}

	
	
`;
