import React from 'react';
import './style.css';

const Card = ({name ,id , email}) =>{
    return(
        <div className="card">
            <img 
                alt="monester"
                src ={`https://robohash.org/${id}?size=200x200`}
                />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;

