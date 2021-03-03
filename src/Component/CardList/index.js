import React from 'react';
import Card from '../Card';
import './style.css';
const CardList = ({robot}) =>{
    console.log({robot})
    return(
        <div className="card-list">
            {robot.map((robot)=>{
                return <Card name={robot.name} id={robot.id} email={robot.email}/>
            })}
        </div>
    );
};

export default CardList;
