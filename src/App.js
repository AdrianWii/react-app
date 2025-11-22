import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Posts from "./pages/Posts";
import Login from "./pages/login/Login";
import PostDetail from "./pages/PostDetail/PostDetail";
import Nav from "./components/Nav/Nav";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
