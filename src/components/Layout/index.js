import * as React from 'react';
import { Link } from 'gatsby';
import isCurrentPage from '../../utils/isCurrentPage';

export default ({ children, currentPage, className }) => (
  <div>
    <nav>
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
          className={isCurrentPage(currentPage, path) ? 'active' : 'normal'}
        >
          {title}
        </Link>
      ))}
    </nav>
    <main className={className}>{children}</main>
    <footer>
      Built with{' '}
      <span role="img" aria-label="heart">
        💛
      </span>
    </footer>
  </div>
);
