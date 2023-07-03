import styled from "styled-components";

const StyledProgressBarBox = styled.div`
	height: 20px;
	margin: 10px;
	width: 50%;
	margin: 0 auto;
	margin-bottom: 20px;
	background-color: #e4ebf5;
	border-radius: 10px;
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
`;

const StyledProgressBar = styled.div`
	height: 100%;
	border-radius: 10px;
	background-color: #5b0eeb;
	/* background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%); */
	transition: width 0.3s ease-in-out;
`;

export { StyledProgressBarBox, StyledProgressBar };
