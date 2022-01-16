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

import useScript from '../hooks/useScript';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <nav class="navbar navbar-expand-xl navbar-dark navbar-fixed-top primary-color" navbar data-testid="navbar-items">
    <a class="navbar-brand" href=""><img src = "empowher-assets/img/logo.png"/></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#basicExampleNav"
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
      PARTICIPANTS
      </PageLink>
      </NavItem>

      </>
      )}
    </li>
    <li class="nav-item profile">
    {!isLoading && !user && (
      <NavItem class = "signup-space">
      <AnchorLink
      href="/api/auth/login"
      className="announcement-button">
      SIGN UP
      </AnchorLink>
      </NavItem>
      )}
    {user && (

      <>
      <UncontrolledDropdown>
      <DropdownToggle nav caret>
      <img
      src={user.picture}
      alt="Profile"
      class="nav-user-profile rounded-circle"
      />
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem header class = "dropdown-text">
      {user.name}
      </DropdownItem>
      <DropdownItem>
      <PageLink href="/profile" icon="user" testId="navbar-profile-desktop" className = "dropdown-item dd">
      Profile
      </PageLink>
      </DropdownItem>
      <DropdownItem>
      <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop" className = "dropdown-item">
      Log out
      </AnchorLink>
      </DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>
        </>
      )}
      </li>
      </ul>
    </div>
</nav>
</>
  );
};

export default NavBar;