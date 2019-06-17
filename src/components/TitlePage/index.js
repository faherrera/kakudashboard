import React from 'react';


const TitlePage = ({ title, fontSize }) => {

  const TitlePageStyles = {
    fontSize: '3rem',
    color: 'black',
    margin: '1.2rem 0 ',
  }

  return (
    <h3
      style={TitlePageStyles}
    >
      {title || 'Titulo de la pagina'}

    </h3>
  )
}

export default TitlePage;