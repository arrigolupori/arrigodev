import Link from 'next/link'
import styles from '../styles/PostItem.module.css'

export default function PostItem({ post }) {
	return (
		<div className={styles.postItem}>
			<div className={styles.date}>{post.frontmatter.date}</div>
			<div>
				<h2>
					<Link href={`/blog/${post.slug}`}>
						<a>{post.frontmatter.title}</a>
					</Link>
				</h2>
			</div>
			<div>
				<p>{post.frontmatter.excerpt}</p>
				<Link href={`/blog/${post.slug}`}>
					<a>Read more »</a>
				</Link>
			</div>
		</div>
	)
}
