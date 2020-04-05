import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardList from "../CardList/CardList";
import axios from "axios";


export default class Card extends Component {
    state = {
        imageUrl: '',
        pokemonIndex: '',
        experience: ''
    }

    get imageUrl() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        // return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonIndex}.png`
        return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    }

    get pokemonIndex() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        return pokemonIndex;
    }

    // async componentDidMount() {
    //     const url = this.props.cardData.url;
    //     const pokemonIndex = url.split('/')[url.split('/').length - 2];
    //     const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

    //     const pokemonRes = await axios.get(pokemonUrl);

    //     const experience = pokemonRes.data.base_experience;
    //     this.setState({ experience });
    //     console.log(experience)
    // }

    render() {
        const cardData = this.props.cardData;
        // console.log(cardData.url)
        return (
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>{cardData.name.toUpperCase()} </p>
                    <p>{this.pokemonIndex}</p>
                </section>
                <img src={this.imageUrl} className={styles.picture} />
                <section className={styles.header}>
                    {/* <p>Skill {this.state.experience}</p> */}
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