import React, { Component } from 'react';
import axios from 'axios';

import styles from '../styles.module.css'
import MovieList from '../components/MovieList';



const KEY = '100f74c63626c7c72fd531fd4e5b6c0d';
const BASE_URL = 'https://api.themoviedb.org/3'

class HomePage extends Component {
    state = {
        movies: [],
    }
    
    async componentDidMount() {
        const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${KEY}`);
        this.setState({ movies: response.data.results });
    }

    render() {

        return (
            <>
                <h1 className={styles.HomeTitle}>Trending today</h1>
                <MovieList movies={this.state.movies }/>
            </>
        );
    }
}
 
export default HomePage;

