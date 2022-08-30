import React from "react";
import "style/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "views/home/home";
import CreateList from "views/home/create";
import ModifyList from "views/home/modify";

import Detail from "views/home/detail";
const GlobalStyle = {
    color: {
        hover: "#ff0000",
    },
};

const App = () => {
    return (
        <ThemeProvider theme={GlobalStyle}>
            <BrowserRouter>
                {/* url Routes */}
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/create" element={<CreateList />}></Route>
                    <Route path="/detail/:id" element={<Detail />}></Route>
                    <Route path="/modify/:id" element={<ModifyList />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
