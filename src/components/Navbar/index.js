import * as React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import s from './style.module.css';

const items = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/blog',
    title: 'Blog'
  }
];

export default ({ currentPage }) => {
  return (
    <nav className={s.navbar}>
      {items.map(({ path, title }) => (
        <Link
          to={path}
          key={path}
          className={cx(currentPage === path ? s.active : s.normal, s.link)}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
