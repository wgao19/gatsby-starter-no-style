import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default ({ children, currentPage }) => (
  <div>
    <Navbar currentPage={currentPage} />
    <main>{children}</main>
    <Footer />
  </div>
);
