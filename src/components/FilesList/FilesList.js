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
        name={element.name}
        size={element.username}
        drive={element.website}
      />
    );
  });

  return (
    <div className="flex-grow-1 d-flex flex-row">
      {files.length === 0 ? emptyMessage : filesList}
    </div>
  );
};

FilesList.propTypes = {
  files: PropTypes.array.isRequired
};

export default FilesList;
