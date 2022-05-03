require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "RoutED",
		titleTemplate: "RoutED · %s",
		description: "Directing patients to the most available care."
	},
	pathPrefix: "/gatsby-test",
	plugins: [
		"gatsby-plugin-theme-ui",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
//		"gatsby-plugin-sitemap",
//		"gatsby-plugin-sharp",
//		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
				defaultLayouts: {
					default: require.resolve("./src/components/DefaultLayout.js")
				}
			}
		},
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					"@": "src"
				}
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		},
//		{
//			resolve: "gatsby-plugin-google-analytics",
//			options: {
//				"trackingId": "CHANGEME"
//			}
//		},
	]
};
