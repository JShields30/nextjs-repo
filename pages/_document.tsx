import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='stylesheet' href='https://use.typekit.net/sbg1kws.css' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					<link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
					<link rel='stylesheet' href='https://use.typekit.net/lxd3fak.css' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Barlow%20Condensed&family=Barlow%20Semi%20Condensed&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Playfair%20Display:wght@500&display=swap'
					/>
				</Head>
				<body className='block'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
// https://github.com/vercel/next.js/issues/9160
// https://gitlab.com/kachkaev/website-frontend/blob/ec20c3bfec24cde40d80194bcad5ba69b308a5ef/src/pages/_document.tsx#L31
