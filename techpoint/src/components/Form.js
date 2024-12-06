import React from 'react';
import { Container, TextField, Button, Box, Typography, Grid, Divider } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';

function FormularioContato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário enviado!');
  };

  const handleSuscribe = (event) => {
    event.preventDefault();
    console.log('Inscrição recebida!');
  }

  return (
  <>
    <Container maxWidth="lg">
      <Divider sx={{ marginTop: '250px'}} />
      <Box mt={4} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{marginLeft:'10px'}}>
            <Typography variant="h4" component="h1" gutterBottom id='contato' sx={{textAlign:'center', marginBottom:'20px'}}>
              Ficou com dúvidas?<SearchIcon style={{fontSize:'28px'}} />
            </Typography>
            <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
              Preencha os dados abaixo. Em breve retornaremos com uma resposta!
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


{/* inscrição de notícias */}

    <Grid container spacing={2} mt={4}>
      <Grid item xs={12} md={6} sx={{marginLeft:'600px'}}>
        <Typography variant='h5' component='h2' align='center' sx={{marginBottom:'20px', marginTop:'-360px', fontSize:'24px'}}>
          Gostaria de saber as notícias mais recentes? <NewspaperIcon/>
        </Typography>
        <Typography variant="body1" component="p" sx={{ textAlign: 'center', marginTop:'-10px' }}>
        Não perca nenhuma novidade! Inscreva-se e receba promoções exclusivas diretamente no seu email!
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} sx={{margin:'0 auto', marginLeft:'600px', marginTop:'-300px'}}>
        <form onSubmit={handleSuscribe}>
          <TextField
            label='Seu email'
            variant='outlined'
            fullWidth
            margin='normal'
            type='email'
          />

              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Inscreva-se já!
                </Button>
              </Box>
        </form>
      </Grid>
    </Grid>


    </Container>
    
  </>
  );
}

export default FormularioContato;
