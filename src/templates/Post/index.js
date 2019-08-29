import React from 'react';
import { css } from 'emotion';
import Image from 'gatsby-image';
import Layout from '../../components/Layout';

export default ({ data: { post }, location: { pathname } }) => {
  return (
    <Layout currentPage={pathname}>
      <Image
        fluid={post.frontmatter.cover.childImageSharp.fluid}
        className={css`
          background: white;
          margin: 0 calc(-1 * var(--spacing));
        `}
      />
      <div
        className={css`
          padding: var(--spacing);
          margin: var(--spacing) auto;
          max-width: 53rem;
          background: white;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 980, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      htmlAst
      fields {
        slug
      }
    }
  }
`;
