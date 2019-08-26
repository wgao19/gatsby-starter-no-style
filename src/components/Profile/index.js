import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

export default ({ className }) => {
  const data = useStaticQuery(graphql`
    query ProfileImageQuery {
      file(relativePath: { eq: "absurd.png" }) {
        childImageSharp {
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `);
  const {
    file: {
      childImageSharp: { fixed }
    }
  } = data;
  return (
    <div>
      <h1 style={{ marginTop: '0' }}>Hi, I am Absurd</h1>
      <Image
        fixed={fixed}
        style={{ float: 'right', margin: '0 var(--spacing)' }}
      />
      <p>
        Elit occaecat eiusmod occaecat aliqua proident esse minim magna
        cupidatat enim nostrud occaecat. Cupidatat veniam ipsum sint nostrud
        incididunt labore labore laborum consequat commodo ipsum. Exercitation
        ipsum fugiat fugiat excepteur officia sint esse tempor consequat dolore
        exercitation ex. Elit veniam sit exercitation in.
      </p>
      <p>
        Aliquip aliqua consequat qui anim ad sint eu elit tempor non eu. Commodo
        non non et eiusmod consequat sit voluptate voluptate in aute non ad in.
        In magna mollit incididunt irure do eiusmod nisi fugiat amet labore.
      </p>
      <p>
        In minim qui amet velit amet ea minim nulla nisi mollit qui. Incididunt
        velit sint consequat non do adipisicing consectetur laborum minim et
        aliquip. Culpa ipsum incididunt amet ullamco exercitation ullamco mollit
        eu ea do nulla eu tempor. Commodo duis labore magna qui sit do laboris
        labore ullamco exercitation veniam elit do.
      </p>
    </div>
  );
};
