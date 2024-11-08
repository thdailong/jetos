import React from "react";
import classes from "./styles/DashboardCard.module.css";

const DashboardCard = ({ value, label, Icon }) => {
  return (
    <div className={classes.card}>
      <div className={classes["box-icon"]}>
        <Icon />
      </div>
      <div>
        <div className={classes.label}>{label}</div>
        <div className={classes.value}>{value}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
