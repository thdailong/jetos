import React from "react";
import classes from "./styles/index.module.css";
import Logo from "assets/img/Logo.svg";
import { NAVIGATES } from "lib/constants";
import NavItem from "./NavItem";
import clsx from "clsx";

const Sidebar = ({ showLogo = true, onClickItem }) => {
  return (
    <div
      className={clsx(classes.container, {
        [classes["remove-margin"]]: !showLogo,
      })}
    >
      {showLogo && (
        <img
          src={Logo}
          alt="Logo"
          width={160}
          height={"auto"}
          className={classes.img}
        />
      )}
      <div
        className={clsx(classes["nav-container"], {
          [classes["remove-margin"]]: !showLogo,
        })}
      >
        {NAVIGATES.map((item, index) => (
          <NavItem
            text={item.label}
            Icon={item.Icon}
            key={index}
            path={item.path}
            onClickItem={onClickItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
