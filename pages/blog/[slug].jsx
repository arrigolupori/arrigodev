import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../../components/useDarkMode'
import { lightTheme, darkTheme } from '../../components/Themes'
import { GlobalStyles } from '../../components/GlobalStyles'
import Toggle from '../../components/ThemeToggler'
import styles from '../../styles/Home.module.css'

export default function PostPage({
	frontmatter: { title, meta_title, date },
	content,
	slug,
}) {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className={styles.container}>
				<Toggle theme={theme} toggleTheme={themeToggler} />
				<p>
					<Link href='/blog'>
						<a>« back to latest updates</a>
					</Link>
				</p>
				<div>
					<h1>{meta_title}</h1>
					<div>
						<div className='mr-4'>{date}</div>
					</div>
					<div>
						<div
							className='blog-text'
							dangerouslySetInnerHTML={{
								__html: marked(content),
							}}
						></div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'))
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
		'utf-8'
	)

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	}
}
