// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext';
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/index';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { PrivateRoute } from './routing/PrivateRoute';
import { SignUp } from './pages/signup';
import { CouncilorLogin } from './pages/councilorLogin';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path={"signup"} element={<SignUp />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/main" element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    }/>
                    <Route path="/councilorLogin" element={<CouncilorLogin/> } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
