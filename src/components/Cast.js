import React, { Component } from 'react';
import styles from '../styles.module.css'


class Reviews extends Component {
    state = {
        casts: [],
    }
    
    componentDidMount() {       
        this.setState({
            casts: this.props.casts
        })
    }

    render() {

        const actorImgUrl = 'https://image.tmdb.org/t/p';
        return (            
            <ul className={styles.CastList}>
                {this.state.casts.map(({id, character, name, profile_path}) => (
                    <li className={styles.CastItem} key={id}>
                        <img src={`${actorImgUrl}/w200${profile_path}`} alt="" />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                        
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Reviews;