import * as React from 'react';
import PostBriefing from '../PostBriefing';

export default ({ posts }) => (
  <section>
    {posts.map((post, idx) => (
      <PostBriefing {...post} key={post.id} />
    ))}
  </section>
);
