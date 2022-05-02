import './App.css';
import { Navbar, Footer } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import { Login, Product, Products, Register, About, Carts } from './pages';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/products" element={<Products />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/" />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
