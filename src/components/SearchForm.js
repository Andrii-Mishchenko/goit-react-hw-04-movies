import React, { Component } from 'react';
import styles from '../styles.module.css'

class SearchForm extends Component {
    state = {
        query: ''
    }

    handleChange = e =>{
        this.setState({query: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
       
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})
    }

    render() { 
        return (
            <div className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                     className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search your movies"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <button className={styles.SearchFormButton} type="submit"></button>
                </form>
            </div>
         );
    }
}
 
export default SearchForm;