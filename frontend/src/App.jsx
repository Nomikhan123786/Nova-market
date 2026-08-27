import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </>
  );
}

export default App;
