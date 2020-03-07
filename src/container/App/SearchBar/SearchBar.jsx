import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
   
    render() {
        return(
            <section className={styles.searchDiv}>
            <input 
                className={styles.searchBar}
                placeholder="Enter name..."
                value={this.props.searchText}
                onChange={this.props.setSearchText}
            />
            </section>
        )
    }
}