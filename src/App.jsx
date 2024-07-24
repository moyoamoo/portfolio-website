import Header from "./Components/Header";
import "../node_modules/nes.css/css/nes.css";
import "../src/css/generics.css";
import Main from "./Components/Main";
import "../src/css/index.scss";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
};

export default App;
