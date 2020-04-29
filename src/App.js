import { ReactComponent as PlusIcon } from "./assets/icons/plus-i.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as NotificationIcon } from "./assets/icons/notification.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/down-arrow.svg";
import { ReactComponent as ChevronIcon } from "./assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeftIcon } from "./assets/icons/chevron-left.svg";
import { ReactComponent as CogIcon } from "./assets/icons/cog.svg";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
function App() {
  return (
    <Navbar>
      <div className="">
        <h2>SHAHZAD</h2>
      </div>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<NotificationIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropDown />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropDown(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={100}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goTo={setActiveMenu}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={300}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ChevronLeftIcon />}
            goTo={setActiveMenu}
            goToMenu="main"
          ></DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />}>Dost</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropDownItem(props) {
  const { goToMenu, goTo } = props;
  return (
    <a
      href="#h"
      className="menu-item"
      onClick={() => goToMenu && goTo(goToMenu)}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

export default App;
