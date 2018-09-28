import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

let firstDivStyle = {
    color: 'red',
    background: 'grey',
    height: '100%'
  };
  
class MainPage extends Component{

render(){
    return (
<div class="ui grid">
<div className="stretched row">
  <div className="ten wide column" style={firstDivStyle}> 
   
        <p className="large">
            Access all your data at one place.
        </p>

  </div>
  <div classaName="five wide column">
    <div >
    2
    </div>
  </div>
  </div>
</div>

    );
}}
export default MainPage;