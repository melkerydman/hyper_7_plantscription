import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
	--primary-color: blue;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html{
		font-size: 62.5%;
	}
`;
