import React, { Component, Suspense, lazy } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import GoBackButton from './GoBackButton';
import styles from '../styles.module.css'
import routers from './routes'

const Cast = lazy(()=>import('./Cast.js' /* webpackChunkName: "Cast" */)) 
const Reviews = lazy(()=>import('./Reviews.js' /* webpackChunkName: "Reviews" */)) 

const KEY = '100f74c63626c7c72fd531fd4e5b6c0d';
const BASE_URL = 'https://api.themoviedb.org/3'

class MovieDetailsPage extends Component {
    state = {
        poster_path:null,
        title: null,
        vote_average: null,
        overview: null,
        genres: [],
        credits: {},
        reviews: {}
    }    
    
    async componentDidMount() {
        const append = 'append_to_response='
 
        const { movieId } = this.props.match.params;
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US&${append}credits,reviews`);
     
        this.setState({ ...response.data });
    }

    handleGoBack = () => {
        const { location, history } = this.props;

        if (location.state && location.state.from) {
            return   history.push(location.state.from)
        }
        history.push(routers.HomePage)

        // нова фіча:
        // history.push(location?.state?.from || routers.HomePage)
    }

    render() {
        const { title, poster_path, vote_average, overview, genres } = this.state;
        const movieGenres = genres.flatMap((genre) => genre.name).join(' ');
        
        const baseImgUrl = 'https://image.tmdb.org/t/p';
        const { url } = this.props.match;
        const { path } = this.props.match;

  

        return (
            <div className={styles.container}>
                <GoBackButton onClick={this.handleGoBack} />
                
                <section className={styles.MainInfo}>
                    <div className={styles.ImageThumb}>
                        <img src={`${baseImgUrl}/w300${poster_path}`} alt="" />
                    </div>
                    <div className={styles.MovieInfo}>
                        <h1 className={styles.MovieInfoChild}>{title}</h1>
                        <p className={styles.MovieInfoChild}>User Score: {vote_average}</p>
                        <h3>Overview</h3>
                        <p className={styles.MovieInfoChild}>{overview}</p>
                        <h3>Genres</h3>
                        <p>{ movieGenres}</p>
                    </div>
                </section>

                <section className={styles.AddInfo}>
                    <h2>Additional information</h2>
                    <ul className={styles.AddInfoList}>
                        <li><NavLink to={`${url}/cast`} className={styles.NavLink} activeClassName={styles.NavLinkActive}>Cast</NavLink></li>
                        <li><NavLink to={`${url}/reviews`} className={styles.NavLink} activeClassName={styles.NavLinkActive}>Reviews</NavLink></li>
                    </ul>

                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Route
                            path={`${path}/cast`}                      
                            render={props => {
                                return this.state.credits.cast && <Cast {...props} casts={this.state.credits.cast} />
                            }} 
                        />
                        <Route
                            path={`${path}/reviews`}                      
                            render={props => {
                                return this.state.reviews.results ? <Reviews {...props} results={this.state.reviews.results}/>: <p>No rewiews</p>
                            }} 
                        />
                    </Suspense>    
                </section>
            </div>
        );
    }
}
 
export default MovieDetailsPage;