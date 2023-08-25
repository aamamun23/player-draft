import React from 'react';

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
        <div className='Team'>
            <h2> ${salary}</h2>
            {
                team.map((player) =>
                    <div className="TeamPlayer">
                        <h3>{player.name}</h3>
                        <p>${player.salary}</p>
                    </div>
                )
            }

        </div>
    );
};

export default Team;