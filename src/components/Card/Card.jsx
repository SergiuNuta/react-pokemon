import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardList from "../CardList/CardList";


export default class Card extends Component {
    render() {
        const cardData = this.props.cardData;
        return(
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>Name: {cardData.name} </p>
                    <p>HP: </p>
                </section>
                <img src="http://www.shorturl.at/byPZ9" className={styles.picture}/>
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