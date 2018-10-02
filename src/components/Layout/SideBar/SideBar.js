import React from "react";
import LeftSidebarContent from './LeftSidebarContent/LeftSidebarContent';
import RightSidebarContent from './RightSidebarContent/RightSidebarContent';
const SideBar = props => {
  return (
    <div style={styles}>
      {props.right ? (
        <RightSidebarContent>{props.children}</RightSidebarContent>
      ) : (
        <LeftSidebarContent />
      )}
    </div>
  );
};

const styles = {
  minWidth: "192px"
};
export default SideBar;
