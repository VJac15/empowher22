import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar" class="nav-container">
    <Navbar light expand="md">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top primary-color" navbar data-testid="navbar-items">
    <a class="navbar-brand" href="#"><img src = "empowher-assets/img/logo.png"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="basicExampleNav">
    <ul class="navbar-nav ml-auto">
    
    <li class="nav-item">
    <NavItem>
    <PageLink href="/" className="nav-link" testId="navbar-home" class = "item">
    HOME
    </PageLink>
    </NavItem>
    </li>
    <li class="nav-item">
    <NavItem>
    <PageLink href = "/about" className="nav-link" testId = "navbar-abt">
    ABOUT
    </PageLink>
    </NavItem>
    </li>
    <li class="nav-item">
    <NavItem>
    <PageLink href = "/comp" className="nav-link" testId = "navbar-abt">
    COMPETITION
    </PageLink>
    </NavItem>
    </li>
    <li class="nav-item">
    <NavItem>
    <PageLink href = "/sub" className="nav-link" testId = "navbar-abt">
    SUBMISSION
    </PageLink>
    </NavItem>
    </li>
    <li class="nav-item">

    <NavItem>
    <PageLink href = "workshops" className="nav-link" testId = "navbar-abt">
    WORKSHOPS
    </PageLink>
    </NavItem>
    </li>
    <li class="nav-item">

    <NavItem>
    <PageLink href = "winners" className="nav-link" testId = "navbar-abt">
    WINNERS
    </PageLink>
    </NavItem>
    </li>

    <li class="nav-item">

    {user && (
      <>

      <NavItem>
      <PageLink href="/members" className="nav-link">
      MEMBERS AREA
      </PageLink>
      </NavItem>

      </>
      )}
    </li>


    <li>
    <Nav className="d-none d-md-block" navbar>
    {!isLoading && !user && (
      <NavItem id="qsLoginBtn">
      <AnchorLink
      href="/api/auth/login"
      className="announcement-button"
      tabIndex={0}
      testId="navbar-login-desktop">
      SIGN UP
      </AnchorLink>
      </NavItem>
      )}
    {user && (
      <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
      <DropdownToggle nav caret id="profileDropDown">
      <img
      src={user.picture}
      alt="Profile"
      className="nav-user-profile rounded-circle"
      width="50"
      height="50"
      decode="async"
      data-testid="navbar-picture-desktop"
      />
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem header data-testid="navbar-user-desktop">
      {user.name}
      </DropdownItem>
      <DropdownItem className="dropdown-profile" tag="span">
      <PageLink href="/profile" icon="user" testId="navbar-profile-desktop" class = "dropdown-item">
      Profile
      </PageLink>
      </DropdownItem>
      <DropdownItem id="qsLogoutBtn">
      <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop" class = "dropdown-item">
      Log out
      </AnchorLink>
      </DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>
      )}
    </Nav>
    {!isLoading && !user && (
      <Nav className="d-md-none" navbar>
      <AnchorLink
      href="/api/auth/login"
      className="btn btn-primary btn-block"
      tabIndex={0}
      testId="navbar-login-mobile">
      Log in
      </AnchorLink>
      </Nav>
      )}
    {user && (
      <Nav
      id="nav-mobile"
      className="d-md-none justify-content-between"
      navbar
      data-testid="navbar-menu-mobile">
      <NavItem>
      <span className="user-info">
      <img
      src={user.picture}
      alt="Profile"
      className="nav-user-profile d-inline-block rounded-circle mr-3"
      width="50"
      height="50"
      decode="async"
      data-testid="navbar-picture-mobile"
      />
      <h6 className="d-inline-block" data-testid="navbar-user-mobile">
      {user.name}
      </h6>
      </span>
      </NavItem>
      <NavItem>
      <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
      Profile
      </PageLink>
      </NavItem>
      <NavItem id="qsLogoutBtn">
      <AnchorLink
      href="/api/auth/logout"
      className="btn btn-link p-0"
      icon="power-off"
      testId="navbar-logout-mobile">
      Log out
      </AnchorLink>
      </NavItem>
      </Nav>
      )}
      </li>
      </ul>
    </div>
    
    
    


</nav>
    </Navbar>
    </div>
  );
};

export default NavBar;
