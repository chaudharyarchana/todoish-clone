import React, { useState } from "react";
import Menubar from "./menu";
import Togglebutton from "./togglebutton";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      {collapsed ? (
        <Menubar toggleCollapsed={toggleCollapsed} />
      ) : (
        <Togglebutton toggleCollapsed={toggleCollapsed} styles="mt-10 ml-10"/>
      )}
    </>
  );
};
export default Sidebar;
