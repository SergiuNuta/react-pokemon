import React, { Component } from "react";

import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Card.module.scss";


export default class Card extends Component {
    state = {
        stats: {
            hp: '',
            speed: '',
            attack: '',
            defense: '',
            specialAttack: '',
            specialDefense: ''
        },
        themeColor: '#EF5350'
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
        return (
            <div className="col">
                <section className={styles.wrapper}>
                <div className={styles.card}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-5">
                                <h6>{cardData.name.toUpperCase()}</h6>
                            </div>
                            <div className="col-6">
                                <div className="float-right">
                                    {this.pokemonIndex}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src={this.imageUrl}
                                    className="card-img-top rounded mx-auto mt-2"
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        HP
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar "
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.hp}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.hp}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Attack
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.attack}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.attack}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Defense
                  </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar "
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.defense}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.defense}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Speed
                  </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.speed}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.speed}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Sp Atk
                  </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar "
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.specialAttack}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow={this.state.stats.specialAttack}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.specialAttack}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Sp Def
                  </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar "
                                                role="progressbar"
                                                style={{
                                                    width: `${this.state.stats.specialDefense}%`,
                                                    backgroundColor: `#${this.state.themeColor}`
                                                }}
                                                aria-valuenow={this.state.stats.specialDefense}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{this.state.stats.specialDefense}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}


   /* // <div className={styles.cardWrapper}>
            //     <section className={styles.header}>
            //         <p>{cardData.name.toUpperCase()} </p>
            //         <p>{this.pokemonIndex}</p>
            //     </section>
            //     <img src={this.imageUrl} className={styles.picture} />
            //     <section className={styles.body}>
            //         <h6>HP</h6>
            //         <div className="progress">
            //             <div */
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.hp}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.hp}</small>
            //             </div>
            //         </div>
            //         </section>
            //         <section className={styles.body}>
            //         <h6>Speed</h6>
            //         <div className="progress">
            //             <div
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.speed}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.speed}</small>
            //             </div>
            //         </div>
            //         </section>
            //         <section className={styles.body}>
            //         <h6>Attack</h6>
            //         <div className="progress">
            //             <div
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.attack}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.attack}</small>
            //             </div>
            //         </div>
            //         </section>
            //         <section className={styles.body}>
            //         <h6>Defense</h6>
            //         <div className="progress">
            //             <div
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.defense}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.defense}</small>
            //             </div>
            //         </div>
            //         </section>
            //         <section className={styles.body}>
            //         <h6>SP attack</h6>
            //         <div className="progress">
            //             <div
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.specialAttack}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.specialAttack}</small>
            //             </div>
            //         </div>
            //         </section>
            //         <section className={styles.body}>
            //         <h6>SP defense</h6>
            //         <div className="progress">
            //             <div
            //                 className="progress-bar"
            //                 role="progressbar"
            //                 style={{
            //                     width: `${this.state.stats.specialDefense}%`,
            //                     backgroundColor: `blue`
            //                 }}
            //                 aria-valuenow="25"
            //                 aria-valuemin="0"
            //                 aria-valuemax="100"
            //             >
            //                 <small>{this.state.stats.specialDefense}</small>
            //             </div>
            //         </div>
            //         </section>
            // </div>