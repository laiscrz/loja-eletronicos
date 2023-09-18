import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { listaAparelhos } from "../../Components/ListaAparelhos/listaAparelhos";
import { Link } from 'react-router-dom';

export default function VisualizarAparelho() {
  const lista = listaAparelhos;
  const { id } = useParams();

  const produto = lista.find(prod => prod.id == id);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  
  const [descricaoAberta, setDescricaoAberta] = useState(false);

  
  const alternandoDescricao = () => {
    setDescricaoAberta(!descricaoAberta);
  };

  return (
    <main>
      <div className="visu-container">
        <div className="prod-principal">
          <div className="image-detalhes">
            <Link to="/aparelhos" className='fixed-button'>
              <span><button className='btnVoltar'>Voltar</button></span><br />
            </Link>
            <img src={produto.imagem} alt={produto.modelo} />
          </div>
          <div className='prod-detalhes'>
            <h2 className='title-model'>{produto.modelo}</h2>
            <h3>Marca: {produto.marca}</h3><br />
            <h3>Preço:</h3><br />
            <p className='price'>R$ {produto.preco}</p>
            <button id='btnCompra'>Comprar</button>
          </div><br />
        </div>
        <div className="prod-vermais">
          <div className="accordion-title" onClick={alternandoDescricao}>
            <h3>Descrição</h3>
            <span className={`accordion-icon ${descricaoAberta ? 'active' : ''}`}></span>
          </div>
          <div className={`accordion-content ${descricaoAberta ? 'active' : ''}`}>
            <p>{produto.descricao}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
