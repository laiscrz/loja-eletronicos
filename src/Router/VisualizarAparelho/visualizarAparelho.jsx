import React from 'react';
import { useParams } from 'react-router-dom';
import { listaAparelhos } from "../../Components/ListaAparelhos/listaAparelhos";
import {Link} from 'react-router-dom'

export default function VisualizaAparelho() {
  const lista = listaAparelhos;
  const { id } = useParams();

  const produto = lista.find(prod => prod.id == id);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }
  return (
    <main>
    <div className="visu-container">
      <div>
        <Link to="/aparelhos">
          <span><button>Voltar</button></span>
        </Link> 
        <img src={produto.imagem} alt={produto.modelo} />
      </div>
      <div>
        <h2>{produto.modelo}</h2>
        <p>Marca: {produto.marca}</p>
        <p>Descrição: {produto.descricao}</p>
        <p>Preço: R$ {produto.preco}</p>
        <button>Comprar</button>
      </div>
    </div>
  </main>

  );
}
