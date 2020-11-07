import React, { useState } from 'react';
import Link from '../../Customs/gatsbyLink'
import Button from '@material-ui/core/Button';

type NavItem = {
  title: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    slug: '/home'
  },
  {
    title: 'Member',
    slug: '/member/'
  },
  {
    title: 'Live',
    slug: '/live/'
  },
  {
    title: 'Contact',
    slug: '/contact/'
  }, 
  {
    title: 'Link',
    slug: '/link/'
  }, 
];

const MainNav: React.FC = () => {
  return (
    <div id='menu'>
      {navItems.map((item) => (
        <div key={item.title}>
          <Link to={item.slug}>
            <Button>{item.title}</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainNav;
