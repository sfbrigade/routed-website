import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { QnA, Q, A } from "./QnA";

const query = graphql`
	{
		allContentfulFaq(sort: { fields: createdAt, order: ASC }) {
			nodes {
				question
				answer {
					raw
				}
			}
		}
	}
`;

export default function FAQList()
{
	const { allContentfulFaq: { nodes } } = useStaticQuery(query);

	return (
		<>
			{nodes.map(({ question, answer }, i) => (
				<QnA key={i}>
					<Q>{question}</Q>
					<A>{renderRichText(answer)}</A>
				</QnA>
			))}
		</>
	);
}
