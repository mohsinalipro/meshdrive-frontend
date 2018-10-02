import React from "react";
import LeftSidebarContent from "./LeftSideBarContent/LeftSideBarContent";
import RightSidebarContent from "./RightSideBarContent/RightSideBarContent";
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
