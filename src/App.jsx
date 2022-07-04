import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="board/" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
