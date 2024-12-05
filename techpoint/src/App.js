import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import CarouselContainer from "./pages/CarouselContainer/CarouselContainer";
import GridProdutos from "./components/GridProdutos/GridProdutos";
import { Slider } from "@mui/material";
import Form from './components/Form'
import Departamentos from './components/Departamentos/Departamentos'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <div className="background">
        <Header />
        <CarouselContainer />
        <GridProdutos/>
        <Departamentos/>
        <Main/>
        <Form/>
        <Footer />
      </div>
    </>
  );
}

export default App;