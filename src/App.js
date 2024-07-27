import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;