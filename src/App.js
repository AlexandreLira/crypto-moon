import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/usersList/UserList";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter className="App">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
