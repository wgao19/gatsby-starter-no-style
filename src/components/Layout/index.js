import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
