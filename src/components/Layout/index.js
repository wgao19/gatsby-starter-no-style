import * as React from 'react';
import { css, cx } from 'emotion';
import { Link } from 'gatsby';
import isCurrentPage from '../../utils/isCurrentPage';

export default ({ children, currentPage, className }) => (
  <div
    className={css`
      background: #efefef;
      @media (max-width: 979px) {
        --spacing: 1rem;
      }
    `}
  >
    <nav
      className={css`
        height: var(--navbar-height, 96px);
        line-height: var(--navbar-height, 96px);
        background: white;
        padding: 0 var(--spacing, 2rem);
      `}
    >
      {[
        {
          path: '/',
          title: 'Home'
        },
        {
          path: '/blog',
          title: 'Blog'
        }
      ].map(({ path, title }) => (
        <Link
          to={path}
          key={path}
          className={css`
            border-radius: var(--round-corner);
            margin-right: calc(var(--spacing) / 4);
            border-bottom: 3px solid
              ${isCurrentPage(currentPage, path) ? 'gold' : 'transparent'};
            &:hover {
              border-bottom: 3px solid lightgoldenrodyellow;
            }
          `}
        >
          {title}
        </Link>
      ))}
    </nav>
    <main
      className={cx(
        css`
          min-height: calc(100vh - var(--footer-height) - var(--navbar-height));
          padding: 0 var(--spacing, 2rem);
        `,
        className
      )}
    >
      {children}
    </main>
    <footer
      className={css`
        height: var(--footer-height);
        line-height: var(--footer-height);
        background: #1e1e1e;
        color: #777;
        text-align: center;
      `}
    >
      Built with{' '}
      <span role="img" aria-label="heart">
        💛
      </span>
    </footer>
  </div>
);
