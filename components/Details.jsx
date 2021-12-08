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
				<li>
					The backend is{' '}
					<a href='https://nestjs.com/' target='_blank'>
						NestJS
					</a>{' '}
					and the frontend{' '}
					<a href='https://nextjs.org/' target='_blank'>
						Next.js
					</a>
				</li>
				<li>
					Both front- and back-end use{' '}
					<a href='https://www.typescriptlang.org/' target='_blank'>
						TypeScript
					</a>
				</li>
				<li>
					Database hosted with{' '}
					<a href='https://www.mongodb.com/atlas' target='_blank'>
						MongoDB Atlas
					</a>
				</li>
				<li>Main focus on common SaaS features</li>
				<li>
					Simple authentication via{' '}
					<a href='https://auth0.com/' target='_blank'>
						Auth0
					</a>
				</li>
				<li>Secondary focus on UX design</li>
			</ul>
			<p>
				The series will also feature 2 free third-party APIs:{' '}
				<a href='https://clearbit.com/developers' target='_blank'>
					Clearbit
				</a>{' '}
				and{' '}
				<a href='https://hunter.io/api' target='_blank'>
					Hunter
				</a>
				. They will help you get familiar with accessing data.
			</p>
			<p>
				The end result will be a{' '}
				<a
					href='https://github.com/arrigolupori/prospectrove-saas-boilerplate'
					target='_blank'
				>
					SaaS boilerplate available for anyone to use on GitHub
				</a>
				. All necessary tools will be explained in the series.
			</p>
		</>
	)
}
