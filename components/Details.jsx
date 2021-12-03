import Emoji from './Emoji'

export default function Details() {
	return (
		<>
			<h2>Who is this for?</h2>
			<p>
				This series is for builders <Emoji symbol='🛠' label='tools' />
			</p>
			<p>
				Whether you've experienced no-code tools in the past, you are a
				beginner in traditional web development, or even have zero
				skills but are curious enough to make it—this series is for you.
			</p>
			<p>
				All you need to participate is a will to learn and the curiosity
				to understand web development concepts{' '}
				<Emoji symbol='🧑🏼‍💻 👩🏽‍💻 👨🏿‍💻' label='light bulb' />
			</p>
			<h3>Key details of the series:</h3>
			<ul>
				<li>The app is developed in Node.js, React &amp; Next.js</li>
				<li>I will focus on common SaaS features only</li>
				<li>CSS styling will be very basic</li>
			</ul>
			<p>
				The end result will be a SaaS boilerplate available for anyone
				to use on GitHub. All necessary tools will be explained in the
				series.
			</p>
		</>
	)
}
