import React from 'react';
import './nav.css'

function Navegacao({ alterarPaginaSelecionada }) {
  return (
    <div className="navegacao">
      <button
        className="botao-navegacao"
        // Altera a variavel de estado
        onClick={() => alterarPaginaSelecionada(0)}>
        Pratos Principais
      </button>
      <button
        className="botao-navegacao"
        // Altera a variavel de estado
        onClick={() => alterarPaginaSelecionada(1)}>
        Sobremesas
      </button>
      <button
        className="botao-navegacao"
        // Altera a variavel de estado
        onClick={() => alterarPaginaSelecionada(2)}>
        Bebidas
      </button>
    </div>
  );
}

export default Navegacao;
