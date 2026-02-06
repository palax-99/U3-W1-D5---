import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import "./App.css";
import AllTheMain from "./AllTheMain";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />
      <AllTheMain />
      <MyFooter />
    </>
  );
}

export default App;
