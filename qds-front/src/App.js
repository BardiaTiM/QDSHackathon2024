import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext';
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/index';
import { Login } from './pages/login';
import { PrivateRoute } from './routing/PrivateRoute';
import { SignUp } from './pages/signup';
import { CouncilorLogin } from './pages/councilorLogin';
import { Main } from "./pages/main";
import { NotFound } from './pages/404'; // Import the NotFound component

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/main" element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    }/>
                    <Route path="/councilorLogin" element={<CouncilorLogin />} />
                    <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
