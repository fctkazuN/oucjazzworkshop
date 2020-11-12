module.exports = {
  siteMetadata: {
    title: `小樽商科大学ジャズ研究会`,
    description: `小樽商科大学ジャズ研究会ホームページ`,
    author: `小樽商科大学ジャズ研究会`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `小樽商科大学ジャズ研究会`,
        short_name: `商大ジャズ研`,
        start_url: `/Home`,
        background_color: `#667EEA`,
        theme_color: `#667EEA`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: "kaeru-pyoko-hosting",
          protocol: "https",
          hostname: "http://kaeru-pyoko-hosting.s3-website-ap-northeast-1.amazonaws.com",
      },
    }
  ]
};
