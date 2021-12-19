import Link from 'next/link'
import SEO from '../components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../components/mode/useDarkMode'
import { lightTheme, darkTheme } from '../components/mode/Themes'
import { GlobalStyles } from '../components/mode/GlobalStyles'
import Navigation from '../components/ui/Navigation'
import Hero from '../components/sections/Hero'
import WhySub from '../components/sections/WhySub'
import WhoFor from '../components/sections/WhoFor'
import WhoAm from '../components/sections/WhoAm'
import Footer from '../components/ui/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
<<<<<<< HEAD
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
=======
		<>
			<SEO
				title='Build a SaaS from Scratch for Free'
				description='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
			/>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<div className={styles.container}>
					<p>
						<Link href='/blog'>
							<a>Read the latest updates »</a>
						</Link>
					</p>
					<Navigation
						theme={theme}
						themeToggler={themeToggler}
						showLogin
					/>
					<Hero />
					<WhoFor />
					<WhySub />
					<WhoAm />
					<Footer />
				</div>
			</ThemeProvider>
		</>
>>>>>>> main
	)
}
