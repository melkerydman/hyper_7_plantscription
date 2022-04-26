import './App.css';
import { Navbar } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/ProductsPage';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/" />
            </Routes>
            <Products />
        </div>
    );
};

export default App;
