import React from "react";
import "../style/style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const Header = (
    <div className="header">
      <h3>{props.text}</h3>
      <div>
        <FontAwesomeIcon icon={faSearch} color="#c5c7cd" />
        <FontAwesomeIcon icon={faBell} color="#c5c7cd" />
        <span></span>
        <p>Jones Fredinand</p>
        <img alt='avatar' src="https://i.pravatar.cc/150?img=5" />
      </div>
    </div>
  );

  return Header;
}

export default Header;
