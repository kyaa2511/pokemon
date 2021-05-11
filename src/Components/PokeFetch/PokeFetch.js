import React, { Component } from 'react'
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      count: 10,
     
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  timer(){
    this.setState({
      count: 10
    })
    return this.count == 10 ? this.count -- : this.count; 
  }
  
  componentWillMount(){
    this.timer();
  }
    
  componentDidMount(){
    setInterval(() => this.state.count - 1)
      
    }
  
  

  render(){
    const {count} = this.state
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()} onSubmit={() => this.timer()} >Start!</button>
        <h1 className={'timer'} >Timer Display {count} </h1>
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}



export default PokeFetch;