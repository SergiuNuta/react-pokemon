import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";



export default class CardList extends Component {
    render() {
        // console.log(this.props.cardData);
        return(
            <React.Fragment>
                {this.props.cardData ?(
                <section className={styles.cards}>
                    {this.props.cardData.map((pet, id) => (
                             <Card cardData={pet} key={id} />
                             
                         ))}
                 </section>):(
                     <h1>Loading data...</h1>
                 )}
                    
                
            </React.Fragment>
        );
    }
}