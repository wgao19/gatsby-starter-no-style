import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

export default ({ location: { pathname } }) => {
  return (
    <Layout currentPage={pathname}>
      <Profile />
    </Layout>
  );
};
