import React, { createRef, useLayoutEffect } from 'react';

type IUtterancesProps = {
	repo: string;
};
function Utterances({ repo }: IUtterancesProps) {
	const containerRef = createRef<HTMLDivElement>();

	useLayoutEffect(() => {
		const utterances = document.createElement('script');

		const attributes = {
			src: 'https://utteranc.es/client.js',
			repo,
			'issue-term': 'pathname',
			label: 'comment',
			theme: 'github-light',
			crossOrigin: 'anonymous',
			async: 'true',
		};

		Object.entries(attributes).forEach(([key, value]) => {
			utterances.setAttribute(key, value);
		});

		containerRef.current!.appendChild(utterances);
	}, [repo]);
	return <div ref={containerRef} />;
}

Utterances.displayName = 'Utterances';

export default Utterances;
