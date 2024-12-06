import React from 'react';
import Divider from '@mui/material/Divider';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; //biblioteca do mapa
import 'leaflet/dist/leaflet.css'; 
import { Typography } from '@mui/material';
import './MiniMapa.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const minimapStyle = {
    width: '500px',  
    height: '400px', 
    marginTop: '60px',
    marginLeft: '200px'
};

const MiniMapa = () => {
    return (
        <>
        <Divider component="div" role="presentation" style={{marginTop:'15px'}}> 
            <Typography variant='h4' component='h2' gutterBottom id='titulo-mapa'> <LocationOnIcon className='localiza'/>Nossa Localização  </Typography> 
        </Divider>
        <MapContainer
            style={minimapStyle}
            center={[-22.90920740180559, -43.18157146971745]} //centro do mapa
            zoom={17} //zoom no mapa
            scrollWheelZoom={true} //zoom com o scroll do mouse
        >
            
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //camada base do mapa
            />
            <Marker position={[-22.90920740180559, -43.18157146971745]}>
                <Popup>Estação de Metrô Carioca</Popup>
            </Marker>
        </MapContainer>
        <div className='sub-mapa'>
                <Typography id='frase-mapa' variant="h6" style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Montserrat, sans-serif' }}>
                    Estamos localizados em: Av. República do Chile, 330 - Centro, Rio de Janeiro - RJ, 20031-170
                </Typography>
                <Typography style={{ fontSize: '16px' , fontFamily: 'Montserrat, sans-serif', marginTop:'10px'}}>
                    Venha nos visitar para mais informações sobre nossos produtos!
                </Typography>
            </div>
      </>
    );
};
  
export default MiniMapa;