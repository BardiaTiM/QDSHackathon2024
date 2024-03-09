// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext';
import { useAuth } from './Authentication/AuthContext'; // Adjust the import path as necessary
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/index';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { PrivateRoute } from './routing/PrivateRoute';
import { SignUp } from './pages/signup';
import Chat from './pages/chat';

function App() {
    const { currentUser } = useAuth();

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path={"signup"} element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/main" element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    } />
                    <Route path="/chat" element={<Chat loggedInUserId={currentUser ? currentUser.id : null} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
