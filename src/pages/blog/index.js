import React from 'react';
import { cx, css } from 'emotion';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

import Image from 'gatsby-image';

const PostBriefing = ({
  excerpt,
  fields: { slug },
  frontmatter: {
    title,
    cover: {
      childImageSharp: { fluid }
    }
  },
  className
}) => {
  return (
    <article
      className={css`
        @media (min-width: 980px) {
          &:first-child {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 100px calc(100% / 15);
            grid-auto-flow: dense;
            margin-bottom: calc(2 * var(--spacing));
            .image {
              grid-column: span 2;
            }
          }
        }
      `}
    >
      <Image
        fluid={fluid}
        className={cx(
          'image',
          css`
            background: white;
            border-radius: var(--round-corner);
            box-shadow: #efefef 2px 2px 1px 0;
          `
        )}
      />
      <section>
        <h2>
          <Link to={`/blog${slug}`}>{title}</Link>
        </h2>
        <p>{excerpt}</p>
      </section>
    </article>
  );
};

const PostListing = ({ posts }) => (
  <section
    className={css`
      margin: var(--spacing) auto;
      border-radius: 2px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: calc(100% / 15);
      grid-auto-flow: dense;

      @media (max-width: 979px) {
        display: block;
      }
    `}
  >
    {posts.map((post, idx) => (
      <PostBriefing {...post} key={post.id} />
    ))}
  </section>
);

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
