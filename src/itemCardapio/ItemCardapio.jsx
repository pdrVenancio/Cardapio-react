import React from 'react';
import './ItemCardapio.css'

function ItemCardapio({ nome, descricao, preco, imagem }) {
  return (
    <div className="container-item-cardapio">
      <div className="informacoes-item-cardapio">
        <h2>{nome}</h2>
        <p className='descricao'>{descricao}</p>
        <p className='preco'>{preco}</p>
      </div>
      <img src={imagem} className="imagem-item-cardapio" />
    </div>
  );
}

export default ItemCardapio;
