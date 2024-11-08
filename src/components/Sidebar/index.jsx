import React from "react";
import classes from "./styles/index.module.css";
import Logo from "assets/img/Logo.svg";
import { NAVIGATES } from "lib/constants";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <img
        src={Logo}
        alt="Logo"
        width={160}
        height={"auto"}
        className={classes.img}
      />
      <div className={classes["nav-container"]}>
        {NAVIGATES.map((item, index) => (
          <NavItem
            text={item.label}
            Icon={item.Icon}
            key={index}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
