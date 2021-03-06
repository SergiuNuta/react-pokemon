import React, { Component } from 'react';
import axios from "axios";
import styles from "./App.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import CardList from '../../components/CardList/CardList';
import image from "../../data/images/329215.jpg";


export default class App extends Component {
  state = {
    pokemons: [],
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=100',
    searchText: "",
    filteredPokemon: []
  }

  setSearchText = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredPokemon);
  }

  filteredPokemon = () => {
    let filteredPokemon = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchText);

    });
    this.setState({ filteredPokemon });
  }

  async componentDidMount() {
    const res = await axios.get(this.state.apiUrl);
    this.setState({ pokemons: res.data['results'], filteredPokemon: res.data['results'] });
  }

  render() {
    return (
      <div className={styles.app}>
        <img src={image} className={styles.image} alt="icon" />
        <h1>Pokemon finder</h1>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        <CardList cardData={this.state.filteredPokemon}/>
      </div>
    );
  }
}


