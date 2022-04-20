import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

// Note: You can change "images" to whatever you'd like.

const EcosystemLogo = props => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
              extension
              publicURL
            }
          }
        }
      }
    `}
        render={data => {
            // Handles SVG extension

            const extension = props.filename.match(/[^\\]*\.(\w+)$/)[1]

            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });

            if (!image) {
                return null;
            }

            if (extension === "svg" || extension === "gif") {
                return <img src={image.node.publicURL} alt={props.alt}/>
            }


            //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
            return <GatsbyImage alt={props.alt} image={image.node.childImageSharp.gatsbyImageData} imgStyle={{}} />;
        }}
    />
);

export default EcosystemLogo;
