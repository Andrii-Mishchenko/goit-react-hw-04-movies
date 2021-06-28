import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.module.css';

const baseImgUrl = 'https://image.tmdb.org/t/p';

const MoviePreview = ({ poster_path, title, vote_average, release_date }) => (
  <div className={styles.MoviePreviewList}>
    <div className={styles.MoviePreviewThumb}>
      <img src={`${baseImgUrl}/w300${poster_path}`} alt={title} />
    </div>
    <div className={styles.MoviePreviewInfo}>
      <h3 className={styles.MoviePreviewTitle}>{title}</h3>
      <div className={styles.MoviePreviewDetails}>
        <p>Vote: { vote_average}</p>
        <p>Release: { release_date}</p>
      </div>
    </div>
  </div>
);

MoviePreview.propTypes = { 
    poster_path: PropTypes.string.isRequired,    
    title: PropTypes.string.isRequired,    
    vote_average: PropTypes.string.isRequired,    
    release_date: PropTypes.string.isRequired,    
}

export default MoviePreview;