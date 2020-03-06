import React, { Component } from "react";
import styles from "./Card.module.scss";


export default class Card extends Component {
    render() {
        return(
            <div className={styles.cardWrapper}>
                <section className={styles.header}>
                    <p>Name: </p>
                    <p>HP: </p>
                </section>
                <img src="" />
                <section className={styles.header}>
                    <p>Skill</p>
                    <p>Number</p>
                </section>



               
            </div>
        )
    }
}