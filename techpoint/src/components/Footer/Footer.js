import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';
import visa from '../../assets/visa.png';
import elo from '../../assets/elo.png';
import mastercard from '../../assets/mastercard.png';
import pix from '../../assets/pix.png';
import boleto from '../../assets/boleto.png';


const Footer = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Sobre Nós', url: '/about' },
    { name: 'Contato', url: '/contact' },
    { name: 'Política de Privacidade', url: '/privacy' }
  ];

  const social = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' }
  ];

  const pagamento = [
    {id: 1, name: 'Visa', imagem: visa},
    {id: 2, name: 'elo', imagem: elo},
    {id: 3, name: 'mastercard', imagem: mastercard},
    {id: 4, name: 'pix', imagem: pix},
    {id: 5, name: 'boleto', imagem: boleto}
  ]

  return (
    <Box component="footer" className="footer">
      <Divider sx={{ margin: '10px 0', borderColor: 'black' }} />
      <Container maxWidth="lg" className="footer-container">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="footer-title">Links Rápidos</Typography>
            <Box>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6" className="footer-title">Redes Sociais</Typography>
            <Box className="footer-social">
              {social.map((network, index) => (
                <Link
                  key={index}
                  href={network.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {network.icon === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Formas de pagamento */}

          <Grid item xs={12} sm={6} sx={{marginLeft:'900px', marginTop:'-124px'}}>
            <Typography variant="h6" className="footer-title">Formas de pagamento</Typography>
            <Box className="footer-social">
            <div className="paga">
                {pagamento.map((pagamento) => (
                    <div  key={pagamento.id} className="pay">
                        <img src={pagamento.imagem} alt={pagamento.name} /> 
                    </div>
                ))}
            </div> 
            </Box>
          </Grid>

        </Grid>
        <Box className="footer-text">
          <Typography variant="body2">
            © 2024 TechPoint. ® Todos os direitos reservados. 
          </Typography>
        </Box>     
      </Container>
    </Box>
  );
};

export default Footer;
