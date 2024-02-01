import React from 'react';
import './App.css';
import hashtauranteImg from './assets/hashtaurante.jpg';
import Navegacao from './componentes/navegacao/navegacao.jsx';
import ItemCardapio from './itemCardapio/ItemCardapio.jsx';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <div className='main'>
      <img src={hashtauranteImg} className="capa"></img>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      <div className="menu">
        {secoesMenu[paginaSelecionada].map((prato) => (
          <ItemCardapio
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
