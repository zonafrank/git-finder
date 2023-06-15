import "./App.css";
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/pages/User";
import GithubContext from "./context/github/githubContext";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import RootLayout from "./components/layout/RootLayout";

function App() {
  const { getUsers } = useContext(GithubContext);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line

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
