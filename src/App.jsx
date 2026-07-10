// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Woods from "./routes/Woods/pages";
import Home from "./routes/Home";
import Header from "./components/compound/Header";
import Footer from "./components/compound/Footer";
import CMS from "./routes/cms";
import Login from "./routes/login";
import Cart from "./routes/Cart";
import FAQ from "./routes/FAQ";
import Blog from "./routes/Blog";
import Account from "./routes/Account";
import Checkout from "./routes/Checkout";

function App() {
  return (
    <CartProvider>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/woods" element={<Woods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" element={<Aboutus />} /> */}
          <Route path="/cms" element={<CMS />} />
            <Route path="/login" element={<Login />} />
      </Routes>
      <hr />
      <Footer />


    </CartProvider>
  );
}


export default App;