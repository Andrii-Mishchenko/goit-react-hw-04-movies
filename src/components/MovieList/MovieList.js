import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from '../../styles.module.css'
import MoviePreview from '../MoviePreview';

const MovieList = ({movies, location}) => {
    return (
        <ul className={styles.TrendingList}>
            {movies.map(({id, poster_path, title, vote_average, release_date }) => (
                <li key={id} className={styles.TrendingListItem}>
                    <Link to={{
                        pathname: `/movies/${id}`,
                        state: {
                            from: location,
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
     );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,    
    location: PropTypes.string.isRequired,    
}

export default withRouter(MovieList);

