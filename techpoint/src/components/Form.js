import React from 'react';
import { Container, TextField, Button, Box, Typography, Grid, Divider } from '@mui/material';

function FormularioContato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário enviado!');
  };

  return (

    <Container maxWidth="lg">
      <Divider sx={{ margin: '10px 0', borderColor: 'black' }} />
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" component="h1" gutterBottom id='contato'>
              Formulário de Contato
            </Typography>
            <Typography variant="body1" component="p">
              Preencha os dados ao lado. Em breve um de nossos atendentes irá entrar em contato.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
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
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Assunto"
                    variant="outlined"
                    fullWidth
                    margin="normal"
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
  );
}

export default FormularioContato;
