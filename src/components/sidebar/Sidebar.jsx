import React, { useState } from 'react';
import Menubar from './menu';
import Togglebutton from './togglebutton';
// import Doubler from '../../UserStore';


const Sidebar = () => {
  // const stores = new Doubler(2)
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
    {collapsed? <Menubar toggleCollapsed={toggleCollapsed}/> : <Togglebutton toggleCollapsed={toggleCollapsed}/>}
   
   

    </>

  ) 
};
export default Sidebar;