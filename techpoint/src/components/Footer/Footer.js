import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

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

  return (
    <Box component="footer" className="footer">
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
          <Grid item xs={12} sm={6}>
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
        </Grid>
        <Box className="footer-text">
          <Typography variant="body2">
            © 2024 Foguete Market. ® Todos os direitos reservados. 
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
