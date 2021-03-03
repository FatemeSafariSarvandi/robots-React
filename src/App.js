import React ,{Component} from 'react';
import CardList from './Component/CardList';
import SearchField from './Component/SearchField';
import {robots} from './robots';

class App extends Component{

    state={SearchTerm: '' , robotha:robots};
  
    onSearchChange=(e)=>{
        this.setState({SearchTerm:e.target.value});
    }

    render(){
    
        const {robotha , SearchTerm} = this.state;
        const filterRobots = robotha.filter((robot)=>{
             return robot.name
                .toLowerCase()
                .includes(SearchTerm.toLowerCase());
            });

        return(
            <div>
                <h1>Robots</h1>
                <SearchField onSearchChanged={this.onSearchChange}/>
                <CardList robot={filterRobots}/>
            </div>
        )
        
    }
}
export default App;
