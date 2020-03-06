import React, { Component } from 'react';
import styles from "./App.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import Card from '../../components/Card/Card';

export default class App extends Component {
  render() {

    return (
      <div className={styles.app}>
        <h1>Pokemon finder</h1>
        <SearchBar />
        <Card />
      </div>
    );
  }
}


