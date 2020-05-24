import React from "react";
import classes from "./ProfileBlock.module.css";
import ProfilePic from "../ProfilePic/ProfilePic";

const ProfileBlock = () => {
  return (
    <ul className={classes.ProfileBlock}>
      <li className={classes.ProfilePic}>
        <ProfilePic />
      </li>
      <li>
        <i className="fa fa-search" />
      </li>
      <li>
        <i className="fa fa-refresh" />
      </li>
      <li>
        <i className="fa fa-bell" />
      </li>
    </ul>
  );
};

export default ProfileBlock;
