import React from "react";
import LeftSideBarContent from "./LeftSideBarContent/LeftSideBarContent";
import RightSideBarContent from "./RightSideBarContent/RightSideBarContent";
const SideBar = props => {
  return (
    <div style={styles}>
      {props.right ? (
        <RightSideBarContent>{props.children}</RightSideBarContent>
      ) : (
        <LeftSideBarContent />
      )}
    </div>
  );
};

const styles = {
  minWidth: "192px"
};
export default SideBar;
