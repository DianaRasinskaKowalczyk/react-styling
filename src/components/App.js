import React from "react";
import ResetStyle from "./styles/Reset";
import GlobalStyle from "./styles/Global";
import Page from "./Page/Page";

const App = () => {
	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<Page />
		</>
	);
};

export default App;
