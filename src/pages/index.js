import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import PostBriefing from '../components/PostBriefing';

export default ({
  data: {
    posts: { nodes: posts }
  }
}) => {
  return (
    <Layout>
      <section>
        <Profile />
      </section>
      <section>
        {posts.map((post, idx) => (
          <PostBriefing {...post} key={post.id} />
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
