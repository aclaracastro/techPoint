import React, { useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import produto0 from '../../assets/notebook.webp';
import produto1 from '../../assets/ar-condicionado.webp';
import produto2 from '../../assets/relogio.webp';
import produto3 from '../../assets/telefone.png';
import produto4 from '../../assets/fone.jpg';
import produto5 from '../../assets/teclado.webp';
import produto6 from '../../assets/mouse.jpg';
import produto7 from '../../assets/monitor.jpg';


const GridProdutos = () => {
    const [produto , setProduto] = useState([]);
    useEffect(() => {
        // fetch('./assets')
        // .then(response => response.json())
        // .then(response => {
        //     setProduto(response.data)
            
        // })
        // .catch(error => console.log('Erro ao buscar produtos',error))
        setProduto([
            { id: 1, imagem: produto0, nome: 'Notebook'},
            { id: 2, imagem: produto1, nome: 'Ar Condicionado'},
            { id: 3, imagem: produto2, nome: 'Relógio'},
            { id: 4, imagem: produto3, nome: 'Telefone'},
            { id: 5, imagem: produto4, nome: 'Fone'},
            { id: 6, imagem: produto5, nome: 'Teclado'},
            { id: 7, imagem: produto6, nome: 'Mouse'},
            { id: 8, imagem: produto7, nome: 'Monitor'}
        ])
    }, []);

    return(
        <>
        <Typography variant='h4' component='h1' gutterBottom id='produtos' style={{marginLeft:'20px', marginTop: '30px', textDecoration:'underline'}} >Nossos Produtos</Typography>
        <Grid container spacing={2} justifyContent='center'>
            {produto.map((produto, index) => (
                
                   <Grid sx={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <div>
                            <img src={produto.imagem} key={index} alt={`Produto${produto.nome}`} style={{ width: '250px', height: 'auto', marginLeft: '25px', borderRadius: '8px', objectFit: 'cover' }}/> {/*cover == imagem sem distorção*/}
                        </div>
                        {/* <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }} >{produto.nome}</Typography> */}
                    </Grid>
            ))}
        </Grid>
           
        </>
    );

}

export default GridProdutos;