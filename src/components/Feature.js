import React from "react";
import { Box } from "theme-ui";

export const Description = ({ children }) => (
	<Box
		sx={{
			px: "5rem",
			py: "2rem",
		}}
	>
		{children}
	</Box>
);

export function Feature({ children })
{
	return (
		<Box
			sx={{
				display: "grid",
				gridAutoFlow: "column",
				gridAutoColumns: "1fr",
				alignItems: "center",
				"& button": {
					bg: "highlight"
				},
				"& button:hover": {
					bg: "#007f8a"
				}
			}}
		>
			{children}
		</Box>
	);
}
