import Head from 'next/head'
import Hero from '../components/Hero'
import WhySub from '../components/WhySub'
import Details from '../components/Details'
import WhoAm from '../components/WhoAm'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Build a SaaS from Scratch for Free | Arrigo.dev</title>
				<meta name='author' content='Arrigo Lupori' />
				<meta
					name='description'
					content='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@ArrigoLupori' />
				<meta
					name='twitter:title'
					content='Build a SaaS from Scratch for Free | Arrigo.dev'
				/>
				<meta
					name='twitter:description'
					content='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
				/>
				<meta
					name='twitter:image'
					content='/arrigodev-featured-banner.jpg'
				/>
				<meta
					property='og:image'
					content='/arrigodev-featured-banner.jpg'
				/>
				<meta
					property='og:title'
					content='Build a SaaS from Scratch for Free | Arrigo.dev '
				/>
				<meta
					property='og:description'
					content='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='675' />
			</Head>
			<Hero />
			<Details />
			<WhySub />
			<WhoAm />
			<Footer />
		</div>
	)
}
