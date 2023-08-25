import React from 'react';
import './Team.css';

const Team = (props) => {
    const team = props.team;
    console.log(team);
    // const salary = team.map((teamSalary) => {
    //     let newSalary =0;
    //     newSalary = teamSalary.salary + ;
    // })
    let salary = 0;
    for (let i = 0; i < team.length; i++) {
         salary = team[i].salary+salary;
        
    }
    return (
        <div className='MainTeam'>
        <h2>Selected Team Members</h2>
        <h4>Total Salary: ${salary}</h4>
        <div className='Team'>
            {
                team.map((player) =>
                    <div className="TeamPlayer">
                        <img src={player.image} alt="" />
                        <h3>{player.name}</h3>
                        <p className='text-warning'>Salary: ${player.salary}</p>
                    </div>
                )
            }

        </div>
        </div>
    );
};

export default Team;