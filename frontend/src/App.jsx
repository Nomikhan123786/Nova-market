import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-bone text-charcoal">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
