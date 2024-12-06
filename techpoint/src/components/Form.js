import React from 'react';
import { Container, TextField, Button, Box, Typography, Grid, Divider } from '@mui/material';

function FormularioContato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário enviado!');
  };

  return (
  <>
    <Container maxWidth="lg">
      <Divider sx={{ marginTop: '250px'}} />
      <Box mt={4} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{marginLeft:'10px'}}>
            <Typography variant="h4" component="h1" gutterBottom id='contato' sx={{textAlign:'center', marginBottom:'20px'}}>
              Ficou com dúvidas?
            </Typography>
            <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
              Preencha os dados ao lado. Em breve retornaremos com uma resposta!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-start' }} >
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', marginLeft:'40px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Seu nome"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Número de Telefone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensagem"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </>
  );
}

export default FormularioContato;
