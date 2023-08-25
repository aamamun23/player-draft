import React, { useState } from 'react';
import './Players.css';
import fakePlayers from '../../fakeData/players.json';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import Team from '../Team/Team';

const Players = () => {
const [players, setPlayers] = useState(fakePlayers);

const [team, setTeam] = useState([]);

const handlePlayers = (player) => {
    setTeam([...team, player]);
    console.log(player);
}
    
    return (
        <div className='Players'>
            <div className="PlayerList">
            {
               players.map((player) => 
                <SinglePlayer player={player} handlePlayers={handlePlayers}></SinglePlayer>
               )
            }
            </div>
            <div className="AddPlayer">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Players;