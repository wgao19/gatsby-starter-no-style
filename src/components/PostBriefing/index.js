import React from 'react';
import cx from 'classnames';
import Image from 'gatsby-image';
import s from './style.module.css';

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
    <article className={cx(s.article, heroic && s.heroic)}>
      <Image
        fixed={!heroic ? fixed : null}
        fluid={heroic ? fluid : null}
        className={s.image}
      />
      <section>
        <h2 className={s.title}>{title}</h2>
        <p>{excerpt}</p>
      </section>
    </article>
  );
};
