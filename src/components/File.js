import React from "react";
import { Link } from "react-router-dom";
import {Row,Col,
Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button 
} from "reactstrap";

class File extends React.Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
  
    return (
    <div class="column">
      <div class="ui raised card">
        <div class="content">
          <img class="left floated mini ui image" src="./pictures/thumbnails.jpg"/>
            <div class="header">
              {this.props.name}
            </div>
            <div class="meta">
              {this.props.size}
            </div>
            <div class="description">
              {this.props.drive}
            </div>
          </div>
          <div class="extra content">
     
        <button class="ui circular icon button basic positive ">
            <i class="download icon"></i>
        </button>
        <button class="ui circular icon button basic negative">
            <i class="trash icon"></i>
        </button>
        <button class="ui circular icon button basic primary">
            <i class="file icon"></i>
        </button>
    
    </div>
  </div>
</div>
    
 
    );
  }
  }
export default File;
