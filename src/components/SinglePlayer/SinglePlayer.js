import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = (props) => {
    const player = props.player;
    return (
        <div className='singlePlayer'>
            <img src={player.image} alt={player.name} />
            <h2>{player.name}</h2>
            <p>Email: {player.email}</p>
            <p>Salary: ${player.salary}</p>
            <p>Address: {player.address}</p>
            <button onClick={() => props.handlePlayers(props.player)}>Add player</button>
        </div>
    );
};

export default SinglePlayer;