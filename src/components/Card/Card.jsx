import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardList from "../CardList/CardList";


export default class Card extends Component {
    state = {
        imageUrl: '',
        pokemonIndex: ''
    }

    get imageUrl() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        // return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonIndex}.png`
        return  `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    }

    get pokemonIndex() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        return pokemonIndex;
    }

    render() {
        const cardData = this.props.cardData;
        return (
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>{cardData.name.toUpperCase()} </p>
                    <p>HP: {this.pokemonIndex}</p>
                </section>
                <img src={this.imageUrl} className={styles.picture} />
                <section className={styles.header}>
                    <p>Skill</p>
                    <p>Number</p>
                </section>
                <p>Description</p>
                <section className={styles.header}>
                    <p>Skill</p>
                    <p>Number</p>
                </section>
                <p>Description</p>
            </div>
        )
    }
}