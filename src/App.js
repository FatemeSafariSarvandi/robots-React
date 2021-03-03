// import React from 'react';
// class App extends React.Component()

import React ,{Component} from 'react';//aghar faghat mikhaym dpendensi khasti ro estefade konim
import CardList from './Component/CardList';
import SearchField from './Component/SearchField';
import {robots} from './robots';
//      dar in halat bayad esme khodash ra bedahim
class App extends Component{

    state={SearchTerm: '' , robotha:robots};//state
    //event Handeler
    onSearchChange=(e)=>{
        this.setState({SearchTerm:e.target.value});
    }

    render(){
        
        // const robatha = this.state.robotha;
        // const robatha = this.state.SearchTerm;
        const {robotha , SearchTerm} = this.state;
        const filterRobots = robotha.filter((robot)=>{
             return robot.name
                .toLowerCase()
                .includes(SearchTerm.toLowerCase());
            });

        //console.log(this.state.SearchTerm)
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
