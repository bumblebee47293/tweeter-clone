import React from 'react';
import Home from '../pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/profile/profile';
import Explore from '../pages/explore/explore';
import Bookmarks from '../pages/bookmarks/bookmarks';
import Authentication from '../pages/authentication/authentication'


function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bookmarks' element={<Bookmarks />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Authentication />}/>  
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesPage



