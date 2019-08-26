const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/Post/index.js`);
  return graphql(
    `
      {
        posts: allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const {
      posts: { nodes: posts }
    } = result.data;

    posts.forEach(post => {
      createPage({
        path: `/blog${post.fields.slug}`,
        component: postTemplate,
        context: {
          slug: post.fields.slug
        }
      });
    });
  });
};
