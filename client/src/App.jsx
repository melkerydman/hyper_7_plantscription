import './App.css';
import { Navbar, Footer } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
