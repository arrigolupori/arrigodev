import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import SEO from '../../components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../../components/mode/useDarkMode'
import { lightTheme, darkTheme } from '../../components/mode/Themes'
import { GlobalStyles } from '../../components/mode/GlobalStyles'
import PostItem from '../../components/PostItem'
import Navigation from '../../components/ui/Navigation'
import styles from '../../styles/Home.module.css'
import sortByDate from '../../utils/sortByDate'

export default function BlogPage({ posts }) {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<>
			<SEO
				title='Get Help on SaaS &amp; Content Marketing'
				description="Learn the latest in Software-as-a-Service &amp; market your online business to success with Arrigo's blog posts."
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
					{posts.map((post, index) => (
						<PostItem key={index} post={post} />
					))}
				</div>
			</ThemeProvider>
		</>
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
