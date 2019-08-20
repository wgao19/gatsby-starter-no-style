import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
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
    <>
      <p>Hi, I am Absurd</p>
      <Image fixed={fixed} />
    </>
  );
};
