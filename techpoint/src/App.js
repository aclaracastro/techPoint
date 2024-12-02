import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import CarouselContainer from "./pages/CarouselContainer/CarouselContainer";
import GridProdutos from "./components/GridProdutos/GridProdutos";
import { Slider } from "@mui/material";
import Form from './components/Form'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <GridProdutos/>
      <Form/>
      <Footer />
    </>
  );
}

export default App;