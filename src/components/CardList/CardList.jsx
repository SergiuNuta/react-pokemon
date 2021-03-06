import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";



export default class CardList extends Component {
    render() {
        
        return(
            <>
                {this.props.cardData ?(
                <section className={styles.cards}>
                    {this.props.cardData.map((pet, index) => (
                             <Card cardData={pet} key={index} />                         
                         ))}      
                 </section>):(
                     <h1>Loading data...</h1>
                 )} 
            </>
        );
    }
}