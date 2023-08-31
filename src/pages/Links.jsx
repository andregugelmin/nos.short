import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import LogoContainer from "../components/LogoContainer";
import TextContainer from "../components/TextContainer";
import FooterContainer from "../components/FooterContainer";
import ShortnedLinks from "../components/ShortnedLink";

export default function Links() {
	const [links, setLinks] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		verifyUrls();
		setInterval(verifyUrls, 1000);
	}, []);

	function verifyUrls(){
		let list_url = JSON.parse(localStorage.getItem("nos-short-links") || "[]");
		let newList = [];
		let now = new Date().getTime()/1000;
		if(list_url.length>0){
			newList = list_url.map((element)=>{              
				let urlObj = element;
				urlObj.expireAt = urlObj.ttl - Math.round(now - element.createdAt);
				return urlObj;
			}).filter(unexpiredUrl);			
		}
		
		console.log(newList);
		setLinks(newList);
		
		localStorage.setItem("nos-short-links", JSON.stringify(newList));
	}

	function unexpiredUrl(element){		
		return element.expireAt>0;
	}

	return (
		<Main>
			<LogoContainer />
			<TextContainer />
			<div className="links">
				{links.map((e) => {
					return (
						<ShortnedLinks key ={e.createdAt} url={e.originalLink} shortUrl={e.shortLink} time={e.expireAt} />
					);
				})}
			</div>
			<Link onClick={() => navigate("/")}>Voltar para encurtar mais links</Link>
			<FooterContainer />			
		</Main>
	);
}
const Main = styled.div`
    .links{
        margin-top: 20px;
		max-height: 150px;
		overflow: scroll;

		@media (min-height: 600px) {
			max-height: 200px;
			margin-top: 30px;
		}

		@media (min-height: 700px) {
			max-height: 300px;
			margin-top: 40px;
		}

		@media (min-height: 1000px) {
			max-height: 420px;
			margin-top: 50px;
		}
    }
`;

const Link = styled.div`
   
    color: #27272a;
    text-align: center;
    font-family: Open Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto;
    margin-top: 8px;
	
	&:hover{
		cursor: pointer;
	}
`;
