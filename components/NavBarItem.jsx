import React from 'react';
import { useRouter } from 'next/router';


const NavBarItem = ({ children, href, className, icon, tabIndex, testId }) => {
  const router = useRouter();
  const activeClass = 'active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span>
      <span className={router.asPath === href ? activeClasses : className} tabIndex={tabIndex} data-testid={testId}>
        {children}
      </span>
    </span>
  );
};

export default NavBarItem;
