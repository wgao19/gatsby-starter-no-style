import React from 'react';
import Image from 'gatsby-image';
import Layout from '../../components/Layout';

export default ({ data: { post }, location: { pathname } }) => {
  return (
    <Layout currentPage={pathname}>
      <Image fluid={post.frontmatter.cover.childImageSharp.fluid} />
      <div>
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
