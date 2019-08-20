import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import PostBriefing from '../components/PostBriefing';
import s from './style.module.css';

export default ({
  data: {
    posts: { nodes: posts }
  }
}) => {
  return (
    <Layout>
      <section className={s.page1}>
        <Profile />
      </section>
      <section className={s.page2}>
        {posts.map((post, idx) => (
          <PostBriefing {...post} key={post.id} heroic={idx === 0} />
        ))}
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    posts: allMarkdownRemark {
      nodes {
        timeToRead
        excerpt
        id
        frontmatter {
          title
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 320, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
