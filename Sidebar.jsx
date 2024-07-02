import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div color="primary" onClick={toggleSidebar} className="ham-icon mb-2">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Offcanvas isOpen={isOpen} toggle={toggleSidebar} direction="start">
        <OffcanvasHeader toggle={toggleSidebar}>Sidebar</OffcanvasHeader>
        <OffcanvasBody>
          <Nav vertical>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/g3">Grade 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/g4">Grade 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/g5">Grade 5</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/g6">Grade 6</NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
