import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button(props) {
	const {buttonState, buttonFunction, buttonImg} = props;

	function handleButtonFunction(){
		if(buttonState === "unlocked"){
			buttonFunction();
		}
	}

	return(
		<StyledButton variant = {buttonState} onClick={handleButtonFunction}>
			<img src={buttonImg} alt="link" />
		</StyledButton>
	);
}

const buttonBackground = {
	locked: "#27272a",
	unlocked: "#EAB308",
	active: "#92400E"

};

const StyledButton = styled.button`
    	display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: auto;
		width: auto;
		padding: 8px;
		border-radius: 8px;
		background: ${(props => buttonBackground[props.variant])};
		border: 0px;

		${props => props.variant === "unlocked"? `

			&:hover {
				background: #FCD34D;
				cursor: pointer;
			}

			&:active {
				background: #92400E;
			}
			
 		 ` : ""}
		

        img {
			width: 30px;
		    height: 30px;
	    }
`;

Button.propTypes = {
	buttonState: PropTypes.string,
	buttonFunction: PropTypes.func,
	buttonImg: PropTypes.any
};
