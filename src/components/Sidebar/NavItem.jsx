import React from "react";
import classes from "./styles/NavItem.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const NavItem = ({ text, Icon, path }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate(path);
  };

  const isActivePath = () => {
    return location.pathname === path;
  };

  return (
    <div
      className={clsx(classes.container, { [classes.active]: isActivePath() })}
      onClick={onClickNavigate}
    >
      <Icon />
      <div className={classes.txt}>{text}</div>
      {isActivePath() && <div className={classes["block-note"]} />}
    </div>
  );
};

export default NavItem;
