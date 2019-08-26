import * as React from 'react';
import { Link } from 'gatsby';
import { css, cx } from 'emotion';

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
    <nav
      className={css`
        height: var(--navbar-height);
        padding: 0 var(--spacing);
        background: white;
        display: flex;
        align-items: center;
      `}
    >
      {items.map(({ path, title }) => (
        <Link
          to={path}
          key={path}
          className={cx(
            css`
              border-bottom: 3px solid
                ${path === currentPage ? 'gold' : 'transparent'};
              transition: all 0.1s ease;
              margin-right: calc(var(--spacing) / 2);
            `
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
