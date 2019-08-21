import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PostBriefing from '../../components/PostBriefing';

export default ({
  location: { pathname },
  data: {
    posts: { nodes: posts }
  }
}) => {
  return (
    <Layout currentPage={pathname}>
      <section>
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
