import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
	margin: -1px 0 0 0;
	padding: 1rem;
	border: 1px solid #999;
	cursor: pointer;
`;
const Question = styled.h1`
	font-size: 1.5rem;
	margin: 1rem;
	padding: 0;
`;
const Answer = styled.p`
	font-size: 1.5rem;
	margin: 0 1rem 1rem;
	padding: 0;
`;

export function QnA({ defaultExpanded = false, children })
{
	const [expanded, setExpanded] = useState(defaultExpanded);
	const [Question, Answer] = React.Children.toArray(children);

	return (
		<Container
			onClick={() => setExpanded(!expanded)}
		>
			{Question}
			{expanded && Answer}
		</Container>
	);
}

export function Q({ children })
{
	return (
		<Question>
			{children}
		</Question>
	);
}

export function A({ children })
{
	return (
		<Answer>
			{children}
		</Answer>
	);
}
