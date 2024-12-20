import React from "react";
import './Categorias.css';
import MenuIcon from '@mui/icons-material/Menu';
//imports das imagens
import arCondicionado from '../../assets/ar-condicionado.webp';
import fone from '../../assets/fone.jpg';
import relogio from '../../assets/relogio.webp';
import notebook from '../../assets/notebook.webp';
import monitor from '../../assets/monitor.jpg';
import telefone from '../../assets/telefone.png';
import mouse from '../../assets/mouse.jpg';


const Categoria = () => {
    const categorias = [
        { id: 1, Nome: 'Ar condicionado', imagem: arCondicionado },
        { id: 2, Nome: 'Headfone', imagem: fone },
        { id: 3, Nome: 'Relógio', imagem: relogio },
        { id: 4, Nome: 'Notebook', imagem: notebook },
        { id: 5, Nome: 'Monitor', imagem: monitor },
        { id: 6, Nome: 'Telefone', imagem: telefone },
        { id: 7, Nome: 'Mouse', imagem: mouse },
    ];


    return(
        <div className="container">
            <h2 className="titulo">
                <MenuIcon className="menu"/> CATEGORIAS
            </h2>
            <div className="departamentos">
                {categorias.map((categorias) => (
                    <div  key={categorias.id} className="categ">
                        <img src={categorias.imagem} alt={categorias.Nome} />
                        <p className="subtitulo">{categorias.Nome}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}


export default Categoria;