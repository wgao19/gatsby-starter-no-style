import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default ({ children, currentPage, className }) => (
  <div>
    <Navbar currentPage={currentPage} />
    <main className={className}>{children}</main>
    <Footer />
  </div>
);
