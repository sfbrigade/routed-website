import React from "react";
import { Box, Button, Flex, Heading } from "theme-ui";

export default function Callout({ heading, subheading, cta })
{
	return (
		<Flex
			sx={{
				bg: "secondary",
				color: "white",
				p: 4,
				my: "4rem",
				border: "1px solid #aaa",
				borderWidth: "1px 0",
				borderColor: "gray.3",
				alignItems: "center",
				justifyContent: "space-between"
			}}
		>
			<Box>
				<Heading>
					{heading}
				</Heading>
				{subheading &&
					<Heading variant="subheading">
						{subheading}
					</Heading>
				}
			</Box>
			{cta &&
				<Button
					sx={{
						bg: "white",
						color: "primary",
						py: 2,
						"&:hover": {
							bg: "#e6e6e6",
							cursor: "pointer"
						}
					}}
				>
					{cta}
				</Button>
			}
		</Flex>
	);
}
