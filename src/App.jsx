// Import sem chaves geralmente usado quando importamos algo por padrao susando export defaut no arquivo imoprtado
import React from 'react';
import './App.css';
import hashtauranteImg from './assets/hashtaurante.jpg';
import Navegacao from './componentes/navegacao/navegacao.jsx';
import ItemCardapio from './itemCardapio/ItemCardapio.jsx';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';

function App() {
  // .useState(valor inicial da varivael de estado) - usado para criar uma variavel de estado
  // Necessario sempre que a pagina precise ser alterada a partir de um evento
  // [variavel de estado, funão que altera a variavel de estado]
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  // Uma lista que contem a lista com o contjunto chave/valor de cada item 
  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    //Tag fantasma para conseguir retonar o html
    <>
      <div className='main'>
        <img src={hashtauranteImg} className="capa"></img>
        {/* Passamos a funão que altera a variavel de estado */}
        <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
        <div className="menu">
          {/* Dependendo do indice passado em nav.jsx vai trocar a lista com o tipo de prato escolhido */}
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
    </>
    
  );
}

export default App;
