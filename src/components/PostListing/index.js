import * as React from 'react';
import PostBriefing from '../PostBriefing';
import s from './style.module.css';

export default ({ posts }) => (
  <section className={s.postListing}>
    {posts.map((post, idx) => (
      <PostBriefing {...post} key={post.id} />
    ))}
  </section>
);
