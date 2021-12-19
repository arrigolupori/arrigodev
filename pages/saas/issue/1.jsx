import Link from 'next/link'
import ReactPlayer from 'react-player'
import SEO from '@/components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '@/components/mode/useDarkMode'
import { lightTheme, darkTheme } from '@/components/mode/Themes'
import { GlobalStyles } from '@/components/mode/GlobalStyles'
import Navigation from '@/components/ui/Navigation'
import Details from '@/components/saas/Details'
import Footer from '@/components/ui/Footer'
import styles from '@/styles/Home.module.css'

export default function SingleIssue() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<>
			<SEO
				title='Build a SaaS from Scratch for Free'
				description='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
			/>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<div className={styles.container}>
					<p>
						<Link href='/'>
							<a>« back to home page</a>
						</Link>
					</p>
					<Navigation
						theme={theme}
						themeToggler={themeToggler}
						showLogin
					/>
					<select className={styles.lessonSelect}>
						<option value='Hello world'>Hello world</option>
					</select>
					<div className={styles.vidPlayerBox}>
						<ReactPlayer
							className={styles.vidPlayer}
							url='https://vimeo.com/656704401'
							width='100%'
							height='100%'
							controls
						/>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Autem porro hic omnis doloremque beatae deserunt nam
						magnam, sint corporis. Veritatis esse dolor rem
						reiciendis.
					</p>
				</div>
			</ThemeProvider>
		</>
	)
}
