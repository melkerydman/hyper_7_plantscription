import './App.css';
import { Navbar, Products } from './components';
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
            <Products />
        </div>
    );
};

export default App;
