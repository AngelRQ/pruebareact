import logo from "./logo.svg";
import "./App.css";

import Title from "./components/Title"; //se importa el componente que se creo
import Imagen from "./components/Image";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Title />
        <Imagen />
      </header>
      <footer className="Fotter-class">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
