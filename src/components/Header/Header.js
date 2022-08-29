import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Header = () => {
	return (
		<div className="w-20 h-screen border-r border-black">
			<div className="relative flex flex-wrap flex-col items-center justify-between h-1/2">
				<Link to="/">Bucket</Link>
				<Link to="/" className="rotate-[270deg]">
					HOME
				</Link>
				<Link to="/add">
					<FaPlus />
				</Link>
			</div>
		</div>
	);
};

export default Header;
