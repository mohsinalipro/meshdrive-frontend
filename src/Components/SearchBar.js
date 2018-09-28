import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {
  render() {
    return (
   
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..."/>
            <i className="search icon"></i>        
        </div>
        <div className="results"></div>
        </div>  
    )
  }
}

export default SearchBar;
