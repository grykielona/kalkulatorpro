module.exports = {
  siteMetadata: {
    title: 'KalkulatorPro',
    description: 'Kalkulator hydrauliczny, kalkulator oporów liniowych',
    author: 'bkilinski',
    siteUrl: 'https://kalkulatorpro.pl',
    image: `/siteImage.png`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              quality: 70,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-plugin-catch-links`,
            options: {
              excludePattern: /(excluded-link|external)/,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-catch-links`,
    //   options: {
    //     excludePattern: /(excluded-link|external)/,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/Layout.jsx'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-remark-images`,
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'KalkulatorPro',
    //     short_name: 'KalkulatorPro',
    //     start_url: '/',
    //     background_color: '#663399',
    //     display: 'standalone',
    //     icon: 'src/images/calk_logo.png',
    //   },
    // },
  ],
}
