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

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
