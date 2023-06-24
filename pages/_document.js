import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
