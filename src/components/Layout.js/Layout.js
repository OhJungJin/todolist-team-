import React from "react";
import Header from "components/Header/Header";

const Layout = ({ children }) => {
	return (
		<div className="flex">
			<Header />
			<div className="w-screen h-screen max-h-[100%]">{children}</div>
		</div>
	);
};

export default Layout;
