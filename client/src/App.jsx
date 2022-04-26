import './App.css';
import { Navbar, Footer } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, Product } from './pages';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/" />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
