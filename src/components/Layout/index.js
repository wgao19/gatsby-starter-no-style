import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import s from './style.module.css';

export default ({ children }) => (
  <div className={s.layout}>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
