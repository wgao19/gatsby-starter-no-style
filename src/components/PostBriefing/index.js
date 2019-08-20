import React from 'react';
import Image from 'gatsby-image';

export default ({
  heroic,
  excerpt,
  frontmatter: {
    title,
    cover: {
      childImageSharp: { fixed, fluid }
    }
  }
}) => {
  return (
    <article>
      <Image fixed={!heroic ? fixed : null} fluid={heroic ? fluid : null} />
      <section>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </section>
    </article>
  );
};
