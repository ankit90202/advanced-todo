import React from "react";
import { Link } from "react-router-dom";

const NavigationList = ({ navLinks }) => {
  return navLinks.map((nav) => (
    <li key={nav.id}>
      <Link to={nav.link}>{nav.name}</Link>
    </li>
  ));
};

export default NavigationList;
