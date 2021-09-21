import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultKeywords: keywords
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;

const SEO = ({ title, description, image, keywords }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const {
        defaultTitle,
        titleTemplate,
        defaultKeywords,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        keywords: keywords || defaultKeywords,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };
    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta content="yes" name="mobile-web-app-capable" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link href="./favicon.ico" rel="shortcut icon"></link>
            {seo.keywords.length > 0 && (
                <meta content={seo.keywords.join(',')} name="keywords" />
            )}
            <meta content={seo.description} name="description" />
            <meta content={seo.title} property="og:site_name" />
            <meta content={seo.image} name="image" />
            {seo.url && <meta content={seo.url} property="og:url" />}
            {seo.url && <meta content={seo.url} property="al:web:url" />}
            {seo.image && <meta content={seo.image} property="og:image" />}
            <meta content="200" property="og:image:width"/>
            <meta content="200" property="og:image:height"/>
            <meta content={seo.title} property="og:image:alt" />
            {seo.title && <meta content={seo.title} property="og:title" />}
            {seo.description && (
                <meta content={seo.description} property="og:description" />
            )}
            <link href="https://fonts.gstatic.com" rel="preconnect"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.array,
    title: PropTypes.string,
};

SEO.defaultProps = {
    description: null,
    image: null,
    keywords: null,
    title: null,
};

export default SEO;
