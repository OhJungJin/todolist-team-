import React from "react";

const Layout = ({ children }) => {
	return (
		<>
			<div className="w-screen h-screen max-h-[100%] min-w-[80px] max-w-[1200px] absolute left-1/2 -translate-x-1/2">
				{children}
			</div>
		</>
	);
};

export default Layout;
