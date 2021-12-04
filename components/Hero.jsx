import Emoji from './Emoji'
import SubBox from './SubBox'
import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<>
			<h1>
				Learn how to build a SaaS from scratch.{' '}
				<span className={styles.forFree}>For free.</span>
			</h1>
			<p>
				Every 2 weeks, receive a new issue of the SaaS boilerplate
				series directly in your inbox. It's 100% free, no strings
				attached.
			</p>
			<SubBox />
		</>
	)
}
