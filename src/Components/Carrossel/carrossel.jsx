import React, { useState, useEffect, useCallback } from 'react';

const Carrossel = ({ imagens }) => {
  const [indiceImagemAtual, setIndiceImagemAtual] = useState(0);

  const avancarSlide = useCallback(() => {
    setIndiceImagemAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
  }, [imagens]);

  const retrocederSlide = useCallback(() => {
    setIndiceImagemAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
    );
  }, [imagens]);

  useEffect(() => {
    const intervalo = setInterval(avancarSlide, 3000);

    return () => {
      clearInterval(intervalo);
    };
  }, [avancarSlide]);

  const selecionarSlide = (indice) => {
    setIndiceImagemAtual(indice);
  };

  return (
    <div className="carrossel">
      <img src={imagens[indiceImagemAtual]} alt={`Imagem ${indiceImagemAtual}`} />

      <div className="indicadores">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={indiceImagemAtual === index ? 'ativo' : ''}
            onClick={() => selecionarSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
