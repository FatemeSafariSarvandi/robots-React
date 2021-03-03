import React from 'react';
import './style.css';

const SearchField = (props)=>{
   
    return(
        <div>
            <input 
                type="text" 
                className="search"
                placeholder="search hear"
                onChange={props.onSearchChanged}
                />
        </div>
    );
};

export default SearchField;
