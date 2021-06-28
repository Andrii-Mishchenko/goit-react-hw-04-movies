import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import MoviePreview from '../components/MoviePreview';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css'


const KEY = '100f74c63626c7c72fd531fd4e5b6c0d';
const BASE_URL = 'https://api.themoviedb.org/3'

class MoviesPage extends Component {
    state = {
        movies: [],
        location: ''
    }

    componentDidMount() {        
        this.setState({
            location: this.props.location
        })
    }

    onChangeQuery = query => {
        axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`)
            .then(response => {             
              this.setState({ movies: response.data.results });
        })      
    }

    render() { 
        return ( 
          <>
                <SearchForm onSubmit={this.onChangeQuery}/>
                <ul className={styles.TrendingList}>
                    {this.state.movies.map(({id, poster_path, title, vote_average, release_date}) => (                        
                        <li className={styles.TrendingListItem} key={id}>
                            <Link to={{
                                pathname: `/movies/${id}`,
                                state: {
                                    from: this.state.location,
                                }
                            }}>
                                <MoviePreview
                                    poster_path={poster_path}
                                    title={title}
                                    vote_average={vote_average}
                                    release_date={release_date}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
           </>
        );
    }
}
 
export default MoviesPage;