import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Heading, Text } from "theme-ui";
import { BLOCKS } from "@contentful/rich-text-types";

const query = graphql`
	{
		allContentfulUserGuide {
			nodes {
				title
				app
				body {
					raw
					references {
						... on ContentfulAsset {
							contentful_id
							__typename
							gatsbyImageData
						}
					}
				}
			}
		}
	}
`;

	// create an options param for renderRichText() to specify how to render
	// embedded images
const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { gatsbyImageData, description } = node.data.target;

			return (
				<GatsbyImage
					image={getImage(gatsbyImageData)}
					alt={description}
					style={{ width: "507px" }}
				/>
			);
		}
	}
};

function UserGuide({ title, app, body })
{
	return (
		<Container
			sx={{
				"& h2": {
					fontSize: 5
				},
				"& ol": {
					fontSize: 3,
					display: "flex",
					flexFlow: "row wrap",
				},
				"& li": {
					flex: 1,
					mr: 3
				},
				"& li::marker": {
					fontWeight: "bold"
				}
			}}
		>
			<Heading>
				{title}
			</Heading>
			<Text>
				{body}
			</Text>
		</Container>
	);
}

export default function UserGuideList()
{
	const { allContentfulUserGuide: { nodes } } = useStaticQuery(query);

	return (
		<Container
			sx={{ mt: 5 }}
		>
			{nodes.map(({ title, app, body }, i) => (
				<UserGuide
					key={i}
					title={title}
					app={app}
					body={renderRichText(body, options)}
				/>
			))}
		</Container>
	);
}
