import Link from 'next/link'
import Emoji from './Emoji'

export default function WhoFor() {
	return (
		<>
			<h2>Who is this for?</h2>
			<p>
				This series is for builders <Emoji symbol='🛠' label='tools' />
			</p>
			<p>
				Whether you&apos;ve experienced no-code tools in the past, you
				are a beginner in traditional web development, or even have zero
				skills but are curious enough to stick to it—this series is for
				you.
			</p>
			<p>
				All you need to participate is a will to learn and the curiosity
				to understand web development concepts{' '}
				<Emoji symbol='🧑🏼‍💻 👩🏽‍💻 👨🏿‍💻' label='light bulb' />
			</p>
			<p>
				<Link href='/saas'>
					<a>Check out all the details »</a>
				</Link>
			</p>
		</>
	)
}
