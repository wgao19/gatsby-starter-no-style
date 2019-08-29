import React from 'react';
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
    <article>
      <Image fluid={fluid} />
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
  <section>
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
