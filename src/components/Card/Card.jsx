import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardList from "../CardList/CardList";
import axios from "axios";


export default class Card extends Component {
    state = {
        stats: {
            hp: '',
            speed: '',
            attack: '',
            defense: '',
            specialAttack: '',
            specialDefense: ''
        }
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

    async componentDidMount() {
        const url = this.props.cardData.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        const pokemonRes = await axios.get(pokemonUrl);
        let { hp, speed, attack, defense, specialAttack, specialDefense } = '';

        pokemonRes.data.stats.map(stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
                default:
                    break;
            }
        });

        this.setState({
            stats: {
                hp,
                speed,
                attack,
                defense,
                specialAttack,
                specialDefense
            }
        })
    }


    render() {
        const cardData = this.props.cardData;
        console.log(this.state.stats.hp)
        return (
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>{cardData.name.toUpperCase()} </p>
                    <p>{this.pokemonIndex}</p>
                </section>
                <img src={this.imageUrl} className={styles.picture} />
                <section className={styles.body}>
                    <h6>HP</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.hp}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.hp}</small>
                        </div>
                    </div>
                    </section>
                    <section className={styles.body}>
                    <h6>Speed</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.speed}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.speed}</small>
                        </div>
                    </div>
                    </section>
                    <section className={styles.body}>
                    <h6>Attack</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.attack}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.attack}</small>
                        </div>
                    </div>
                    </section>
                    <section className={styles.body}>
                    <h6>Defense</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.defense}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.defense}</small>
                        </div>
                    </div>
                    </section>
                    <section className={styles.body}>
                    <h6>SP attack</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.specialAttack}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.specialAttack}</small>
                        </div>
                    </div>
                    </section>
                    <section className={styles.body}>
                    <h6>SP defense</h6>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${this.state.stats.specialDefense}%`,
                                backgroundColor: `blue`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <small>{this.state.stats.specialDefense}</small>
                        </div>
                    </div>
                    </section>

                    {/* {this.state.stats.hp} */}
                    {/* <p>Speed</p>
                    {this.state.stats.speed}
                    <p>Attack</p>
                    {this.state.stats.attack}
                    <p>Defence</p>
                    {this.state.stats.defense}
                    <p>Special attack</p>
                    {this.state.stats.specialAttack}
                    <p>Special defence</p>
                    {this.state.stats.specialDefense}
                </section> */}
            </div>
        )
    }
}