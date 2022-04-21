import './App.css';
import { Navbar } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" />
            </Routes>
        </div>
    );
}

export default App;
