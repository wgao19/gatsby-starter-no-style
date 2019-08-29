import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Image from 'gatsby-image';

export default ({ location: { pathname } }) => {
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
    <Layout currentPage={pathname}>
      <div>
        <h1>Hi, I am Absurd</h1>
        <Image fixed={fixed} />
        <p>
          Elit occaecat eiusmod occaecat aliqua proident esse minim magna
          cupidatat enim nostrud occaecat. Cupidatat veniam ipsum sint nostrud
          incididunt <a href="#">labore labore laborum consequat</a> commodo
          ipsum. Exercitation ipsum fugiat fugiat excepteur officia sint esse
          tempor consequat dolore exercitation ex. Elit veniam sit exercitation
          in.
        </p>
        <p>
          Aliquip aliqua consequat qui anim ad sint eu elit tempor non eu.
          Commodo non non et eiusmod consequat sit voluptate voluptate in aute
          non ad in. In magna mollit incididunt irure do eiusmod nisi fugiat
          amet labore.
        </p>
        <p>
          In minim qui amet velit amet ea minim nulla nisi mollit qui.
          <a href="#">
            Incididunt velit sint consequat non do adipisicing consectetur
            laborum minim et aliquip.
          </a>{' '}
          Culpa ipsum incididunt amet ullamco exercitation ullamco mollit eu ea
          do nulla eu tempor. Commodo duis labore magna qui sit do laboris
          labore ullamco exercitation veniam elit do.
        </p>
      </div>
    </Layout>
  );
};
