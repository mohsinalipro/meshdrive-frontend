import React from "react";
import LeftSidebarContent from "./LeftSidebarContent/LeftSidebarContent";
import RightSidebarContent from "./RightSidebarContent/RightSidebarContent";
const SideBar = props => {
  return (
    <div style={styles}>
      {props.left ? (
        <LeftSidebarContent>{props.children}</LeftSidebarContent>
      ) : (
        <RightSidebarContent>{props.children}</RightSidebarContent>
      )}
    </div>
  );
};

const styles = {
  minWidth: "192px"
};
export default SideBar;
