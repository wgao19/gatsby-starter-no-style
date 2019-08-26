import React from 'react';
import Layout from '../../components/Layout';
import PostListing from '../../components/PostListing';

export default ({
  location: { pathname },
  data: {
    posts: { nodes: posts }
  }
}) => {
  return (
    <Layout currentPage={pathname}>
      <PostListing posts={posts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark {
      nodes {
        timeToRead
        excerpt
        id
        fields {
          slug
        }
        frontmatter {
          title
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
