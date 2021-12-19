import Emoji from '../Emoji'
import SubBox from '../SubBox'

export default function WhySub() {
	return (
		<>
			<h2>Why bother with this series?</h2>
			<p>
				Most free courses are promotional junk{' '}
				<Emoji symbol='🗑' label='trash can' />
			</p>
			<p>
				Inevitably, signing up to that one free course kicks off a chain
				reaction of stuff you don&apos;t need in your inbox.
			</p>
			<p>It&apos;s because of misaligned incentives...</p>
			<p>
				The author wants to make a profit out of you so they spam your
				inbox with stuff you don&apos;t need trying to lure you in{' '}
				<Emoji symbol='❌' label='red cross symbol' />
			</p>
			<p>
				You—instead—are looking for someone to trust without being
				forced into a purchase that isn&apos;t going to solve anything{' '}
				<Emoji symbol='✅' label='checkmark symbol' />
			</p>
			<p>That&apos;s where I stand:</p>
			<ul>
				<li>
					I only send <strong>1 issue out every 2 weeks</strong>.
				</li>
				<li>
					My emails are <strong>free of ads</strong>, pitches,
					offers—you name it.
				</li>
				<li>
					What you get is what you want:{' '}
					<strong>
						a simple, iterative approach to building a SaaS
						application
					</strong>{' '}
					that you can easily put your functionality on top of and
					grow into a business.
				</li>
			</ul>
			<p>
				My goal with this free series is to empower you to build rich
				SaaS applications and grow them for the long-term{' '}
				<Emoji symbol='🌳' label='round green tree' />
			</p>
			<p>That&apos;s it, no ifs or buts.</p>
			<p>
				See you in? <Emoji symbol='👇🏼' label='handshake' />
			</p>
			<SubBox />
		</>
	)
}
