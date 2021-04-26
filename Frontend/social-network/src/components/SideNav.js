//import useState hook to create menu collapse state
import React, { useState } from "react";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { FaUserFriends, FaSignOutAlt} from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {IoIosNotifications} from "react-icons/io";
import {AiFillMessage, AiFillHome, AiFillSetting} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNav.css";


const SideNav = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <img src={logo1}/> : <img src={logo2}/>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<AiFillHome />}>Home</MenuItem>
              <MenuItem icon={<IoIosNotifications />}>Notifications</MenuItem>
              <MenuItem icon={<MdAccountCircle />}>Profile</MenuItem>
              <MenuItem icon={<FaUserFriends />}>Friends</MenuItem>
              <MenuItem icon={<AiFillMessage />}>Messages</MenuItem>
              <MenuItem icon={<AiFillSetting />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;