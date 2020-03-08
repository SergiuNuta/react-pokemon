import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardList from "../CardList/CardList";


export default class Card extends Component {
    state = {
        imageUrl: '',
        pokemonIndex: ''
    }

    componentDidMount() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        this.setState({
            imageUrl,
            pokemonIndex
        });
        // console.log(imageUrl);s
    }

    render() {
        const cardData = this.props.cardData;
        return (
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>{cardData.name.toUpperCase()} </p>
                    <p>HP: {this.state.pokemonIndex}</p>
                </section>
                <img src={this.state.imageUrl} className={styles.picture} />
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