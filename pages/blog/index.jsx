import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../../components/useDarkMode'
import { lightTheme, darkTheme } from '../../components/Themes'
import { GlobalStyles } from '../../components/GlobalStyles'
import PostItem from '../../components/PostItem'
import Toggle from '../../components/ThemeToggler'
import styles from '../../styles/Home.module.css'
import sortByDate from '../../utils/sortByDate'

export default function Home({ posts }) {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className={styles.container}>
				<Head>
					<title>
						Get Help on SaaS &amp; Content Marketing | Arrigo.dev
					</title>
					<meta name='author' content='Arrigo Lupori' />
					<meta
						name='description'
						content="Learn the latest in Software-as-a-Service &amp; market your online business to success with Arrigo's blog posts."
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Toggle theme={theme} toggleTheme={themeToggler} />
				<p>
					<Link href='/'>
						<a>« back to home page</a>
					</Link>
				</p>
				{posts.map((post, index) => (
					<PostItem key={index} post={post} />
				))}
			</div>
		</ThemeProvider>
	)
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'))
	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '')
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		)
		const { data: frontmatter } = matter(markdownWithMeta)
		return {
			slug,
			frontmatter,
		}
	})

	return {
		props: {
			posts: posts.sort(sortByDate).slice(0, 6),
		},
	}
}
