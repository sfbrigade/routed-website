import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Card, Heading, Image, Text } from "theme-ui";

function TeamMember({ name, role, picture })
{
	return (
		<Card>
			<Image
				variant="avatar"
				src={picture}
				sx={{ mb: ".5rem" }}
			/>
			<Heading variant="name">
				{name}
			</Heading>
			<Text>
				{role}
			</Text>
		</Card>
	);
}

export default function TeamList()
{
	const {
		allContentfulTeamMember: { nodes }
	} = useStaticQuery(graphql`
		{
			allContentfulTeamMember(sort: { fields: fullName, order: ASC }) {
				nodes {
					fullName
					role
					imageUrl
				}
			}
		}
	`);

	return (
		<Box
			sx={{
				mt: "2rem",
				display: "flex",
				flexWrap: "wrap"
			}}
		>
			{nodes.map(({ fullName, role, imageUrl }) => (
				<TeamMember
					name={fullName}
					role={role}
					picture={imageUrl}
				/>
			))}
		</Box>
	);
}
