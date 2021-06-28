import React, { Component } from 'react';


class Cast extends Component {
    state = {
        results: [],
    }
    
    componentDidMount() {      
        this.setState({
            results: this.props.results
        })
    }


    render() {
        const { results } = this.state;
        return (            
            <ul>
                <h1>Review</h1>
                {results.length ? this.state.results.map(({ id, author, content }) => (                 
                    <li key={id}>                        
                        <h3>{author}</h3>
                        <p>{content}</p>                        
                    </li>               
                )) : <p>We don't have any reviews for this movie (:</p>}
            </ul>
        );
    }
}
 
export default Cast;