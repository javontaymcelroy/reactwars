import React from 'react';
import StarWarsData from './StarWarsData';
import './StarWars.css';

function StarWarsList (props) {
    return(
        <div className="character-container">
            {props.chars.map(chars =>
                <StarWarsData key={chars.name} chars={chars} />
            )}
        </div>
    )
}

export default StarWarsList;