import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import s from './style.module.css';

export default ({ children, currentPage, className }) => (
  <div className={s.layout}>
    <Navbar currentPage={currentPage} />
    <main className={className}>{children}</main>
    <Footer />
  </div>
);
