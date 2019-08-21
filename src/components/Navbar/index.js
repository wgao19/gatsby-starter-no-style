import * as React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

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
    <nav>
      {items.map(({ path, title }) => (
        <Link
          to={path}
          key={path}
          className={cx(currentPage === path ? 'active' : 'normal', 'link')}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
