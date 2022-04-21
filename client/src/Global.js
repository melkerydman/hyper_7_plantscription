import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
	--primary-color: grey;
	--primary-text: white;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html{
		font-size: 62.5%;
		color: var(--primary-text)
	}
	
	a {
		text-decoration: none;
		color: var(--primary-text)
	}
`;
