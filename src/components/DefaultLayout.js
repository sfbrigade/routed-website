import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "theme-ui";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children, pageContext })
{
	const site = useSiteMetadata();
	const { title } = pageContext.frontmatter;

	return (
		<>
			<Helmet
				title={title}
				titleTemplate={site.titleTemplate}
			/>
			<Header
				siteTitle={site.title}
				siteDescription={site.description}
			/>
			<Box
				as="div"
				sx={{
					margin: "0 auto",
					maxWidth: "80%",
					padding: "0 1.0875rem 1.45rem",
				}}
			>
				<Box as="main">{children}</Box>
			</Box>
			<Footer
				siteTitle={site.title}
				siteDescription={site.description}
			/>
		</>
	);
}
