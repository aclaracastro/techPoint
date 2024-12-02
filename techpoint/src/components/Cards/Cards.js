import React from "react";

const conjuntoUniforme = [
    {
        id: 1 ,
        cor: "azul" ,
        descricao: "" ,
        url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xs.jpg",
    },
    {
        id: 2,
        cor: "branco" ,
        descricao: "" ,
        url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xs.jpg",
      },
      {
        id: 3,
        cor: "preto" ,
        descricao: "" ,
        url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xs.jpg",
      },

];

const Card = () => {
    return (
      <>
        {conjuntoUniforme.map((uniforme) => (
          <img src={uniforme.url} />
        ))}
      </>
    );
  };

  export default Card;