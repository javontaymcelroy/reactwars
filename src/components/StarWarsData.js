import React from 'react';
import './StarWars.css';

const StarWarsData = props => {
    return(
        <div className="character-cards">
            <h1 className="chars-name">Name: {props.chars.name}</h1>
            <p className="chars-birth_year">Birth year: {props.chars.birth_year}</p>
            <p className="chars-height">Height: {props.chars.height}</p>
            <p className="chars-gender">Gender: {props.chars.gender}</p>
            <p className="chars-eye_color">Eye color: {props.chars.eye_color}</p>
        </div>
    )
}

export default StarWarsData;