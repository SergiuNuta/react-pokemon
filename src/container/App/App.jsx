import React, { Component } from 'react';
import axios from "axios";
import styles from "./App.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import CardList from '../../components/CardList/CardList';

export default class App extends Component {
  state = {
    pokemons: [],
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=500',
    searchText: "",
    filteredPokemon: []

  }

  setSearchText = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredPokemon);
    // console.log(searchText);
  }

  filteredPokemon = () => {
    let filteredPokemon = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchText);
      
    });
    this.setState({ filteredPokemon });
    // console.log(filteredPokemon);
  }

  async componentDidMount() {
    const res = await axios.get(this.state.apiUrl);
    this.setState({ pokemons: res.data['results'] });
    // console.log(this.state.pokemons);
  }
  

  // componentDidMount() {

  //   fetch("apiUrl")
  //     .then((query) => query.json())
  //     .then((result) => {
  //       this.setState({ filteredUsers: result.pokemons, pokemons: result.pokemons });
  //     }); 
       
  // }


  render() {


    return (
      <div className={styles.app}>
        <h1>Pokemon finder</h1>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        <CardList cardData={this.state.filteredPokemon}/>
      </div>
    );
  }
}


