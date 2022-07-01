import React from "react";
import { ReactComponent as Logo } from "../../assets/icon_logo.svg";
import { GrMailOption, GrHomeRounded } from "react-icons/gr";

import { useDispatch } from "react-redux";
import Actions from "../../store/Actions";

import "./header.styles.scss";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const [hometoggle, setHomeToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();

    setHomeToggle(false);
    dispatch(Actions.homeToggleAction());
  };
  console.log(hometoggle);
  return (
    <div className="header">
      <Logo />
      <div className="sub-topic">
        <h1>CRIPF</h1>
        <p>Showability and Buyability</p>
      </div>
      <div className="other-details">
        <GrMailOption />
        <p className="mail"> cripf.tools.gibl@ikea.com</p>
        <GrHomeRounded onClick={handleClick} />
      </div>
    </div>
  );
}

export default Header;
