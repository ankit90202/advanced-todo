import React from "react";
import classes from "./Navigation.module.css";
import ProfileBlock from "../../shared/UI/ProfileBlock/ProfileBlock";
import NavigationList from "./NavigationList/NavigationList";

const nav = [
  { id: 1, link: "/", name: "Today" },
  { id: 2, link: "/tomorrow", name: "Tomorrow" },
  { id: 3, link: "/week", name: "Week" },
];

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <ProfileBlock />
      <ul className={classes.NavigationList}>
        <NavigationList navLinks={nav} />
      </ul>
    </div>
  );
};

export default Navigation;
