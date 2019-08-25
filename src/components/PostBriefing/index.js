import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import s from './style.module.css';

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
    <article className={s.post}>
      <Image fluid={fluid} className={s.image} />
      <section className={s.content}>
        <h2 className={s.title}>
          <Link to={`/blog${slug}`}>{title}</Link>
        </h2>
        <p>{excerpt}</p>
      </section>
    </article>
  );
};

export default PostBriefing;
