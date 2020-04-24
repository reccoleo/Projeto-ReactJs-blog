import React, {Component} from 'react';
import './style.css';

// API = https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      //Aqui o nutri é uma array de states que criamos la embaixo
      nutri: []
    };
  }

  componentDidMount(){
    //Aqui vamos colocar nossa requisicao HTTP da API
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    
    //Se deu certo, fazemos um .then que transforma os dados em json e acessa os dados
    .then((r) => r.json())

    //Fizemos um .them de .then para saber se deu certo a conversao para json
    .then((json) => {
      //Usaremos os dados que pegamos da API e colocamos dentro de uma variavel state
      let state = this.state;
      
      //Passamos os dados convertidos em json para array state.nutri
      state.nutri = json;

      //Aqui passaremos os dados para o contructor
      this.setState(state);

      //Vamos ver os dados no console do navegador, apenas para ver os dados mesmo
      console.log(json);
    })

  }

  render(){
    return (
      <div className="container">
        <header>
          <strong>Nutri Max</strong>
        </header>
        {this.state.nutri.map((item) => {
          //Vamos colocar this.state.nutri tudo dentro da variavel "item"
          //Aqui o map vai fazer o programa retornar ate imprimir o ultimo dado do array
          return(
            <article key={item.id} className="post">
              <strong className="titulo"> {item.titulo} </strong>
              <img src={item.capa} className="capa"/>
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="botao" href="#" >Acessar</a>
            </article>
          );
        })}

      </div>
    );
  }
}

export default App;
