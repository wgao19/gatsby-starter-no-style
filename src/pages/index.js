import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import s from './style.module.css';

export default ({ location: { pathname } }) => {
  return (
    <Layout currentPage={pathname} className={s.home}>
      <Profile />
    </Layout>
  );
};
