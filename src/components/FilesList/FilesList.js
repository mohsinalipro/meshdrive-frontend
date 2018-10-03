import React from "react";
import PropTypes from "prop-types";
import FileItem from "../../components/FileItem/FileItem";

const FilesList = ({ files }) => {
  const emptyMessage = <p> Empty Dashboard </p>;

  console.log(files);

  const filesList = files.map(element => {
    return (
      <FileItem
        key={element.id}
        id={element.id}
        name={element.name}
        drive={element.drive}
        size={element.username}
      />
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap align-items-start p-2">
      {files.length === 0 ? emptyMessage : filesList}
    </div>
  );
};

FilesList.propTypes = {
  files: PropTypes.array.isRequired
};

export default FilesList;
