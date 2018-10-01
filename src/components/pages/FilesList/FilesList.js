import React from 'react';
import PropTypes from 'prop-types';
import FileItem from '../../../components/FileItem/FileItem';

 const FilesList = ({files})=>{


  const emptyMessage = (
    <p> Empty Dashboard </p>
  );

  const filesList = (

    files.map(
        element=>
         {
      return (
        <FileItem
         name={element.name} size={element.address.suite} drive={element.website} />      
        )
    }) 
  );

  return (
   
    <div class="flex-grow-1 d-flex flex-row">
    {files.length===0? emptyMessage:filesList}
    </div>
        
  
  );
  }

  FilesList.propTypes= {
  files: PropTypes.array.isRequired
}

export default FilesList;