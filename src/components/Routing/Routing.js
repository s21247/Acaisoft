import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import Favorites from "../../Pages/Favorites";

const Routing = () => {
    const favoritesPage = '/favorites';
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={favoritesPage} element={<Favorites/>}/>
        </Routes>
    );
};

export default Routing;