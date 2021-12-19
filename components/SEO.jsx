import Head from 'next/head'

export default function SEO({ title, description }) {
	return (
		<>
			<Head>
				<title>{title} | Arrigo.dev</title>
				<meta name='author' content='Arrigo Lupori' />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</>
	)
}
