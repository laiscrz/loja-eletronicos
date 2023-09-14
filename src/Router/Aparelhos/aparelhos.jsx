import React from 'react';
import { listaAparelhos } from "../../Components/ListaAparelhos/listaAparelhos";
import { Link } from 'react-router-dom';

export default function Aparelhos() {
  const tablets = listaAparelhos.slice(5);

  return (
    <main>
      <div className="aparelhos-conteiner">
        <h1>Nossos Aparelhos</h1>

        <section className="smartphones">
          <h2>Celulares</h2>
          <div className="item-container">
            {listaAparelhos.slice(0, 5).map((prod) => (
              <div key={prod.id} className="produto">
                <img src={prod.imagem} alt={prod.modelo} />
                <h3>{prod.modelo}</h3>
                <Link to={`/VisualizarAparelho/${prod.id}`}>
                  <span><button>Visualizar</button></span>
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        <section className="tablets">
          <h2>Tablets</h2>
          <div className="item-container">
            {tablets.map((prod) => (
              <div key={prod.id} className="produto">
                <img src={prod.imagem} alt={prod.modelo} />
                <h3>{prod.modelo}</h3>
                <Link to={`/VisualizarAparelho/${prod.id}`}>
                  <span><button>Visualizar</button></span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

