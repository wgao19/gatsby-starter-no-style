import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
