import React from "react";
import ResetStyle from "./styles/Reset";
import GlobalStyle from "./styles/Global";
import Page from "./Page/Page";
import PageWrapper from "./PageWrapper/PageWrapper";

const App = () => {
	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<PageWrapper />
		</>
	);
};

export default App;
