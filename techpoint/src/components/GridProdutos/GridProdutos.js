import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './GridProdutos.css';
import Divider from '@mui/material/Divider';

const GridProdutos = () => {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(response => {
        setProduto(response); // sem o .data porque a API retorna diretamente os produtos
      })
      .catch(error => console.log('Erro ao buscar produtos', error));
  }, []);

  return (
    <>
      <Divider component="div" role="presentation" style={{marginTop:'15px'}}>
        <Typography variant='h4' component='h2' gutterBottom id='produtos' style={{ alignItems: 'center' , marginTop: '30px', fontFamily: 'Montserrat, sans-serif'}} >Nossos Produtos</Typography> 
      </Divider>

      <Grid container spacing={2} justifyContent= 'center' >
        {produto.map((produto) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={produto.id} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginLeft: '20px'}} >

            <div style={{ width: '100%',  height: '250px', marginBottom: '10px',  overflow: 'hidden' }} >
              <img src={produto.image} alt={produto.title} style={{ width: '250px', height: 'auto', marginLeft: '25px', borderRadius: '8px', objectFit: 'cover' }}/>
            </div>
            
            <h3 className='tituloProduto'>{produto.title}</h3>
            <p className='preco'>R${produto.price.toFixed(2)}</p>
            <p className='pix'>10% de desconto no PIX!</p>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridProdutos;