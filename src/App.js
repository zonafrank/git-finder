import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/pages/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/:login" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
