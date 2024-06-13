import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Cart from './page/Cart/Cart'
import Like from './page/like/Like'
import Footer from "./components/footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
