import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import "./App.css";
import AllTheMain from "./AllTheMain";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponenteDiProva from "./components/ComponenteDiProva";
import DetailsFilm from "./components/DetailsFilm";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<AllTheMain />} />
          <Route path="/tv-show" element={<ComponenteDiProva />} />
          <Route path="/details/:filmID" element={<DetailsFilm />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
