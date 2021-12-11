import Link from 'next/link'
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
				skills but are curious enough to stick to it—this series is for
				you.
			</p>
			<p>
				All you need to participate is a will to learn and the curiosity
				to understand web development concepts{' '}
				<Emoji symbol='🧑🏼‍💻 👩🏽‍💻 👨🏿‍💻' label='light bulb' />
			</p>
			<h3>
				<Emoji symbol='👉🏼' label='hand pointing to right' /> Key details
				of the SaaS series
			</h3>
			<p>
				If you're unsure whether this series is right for you,{' '}
				<Link href='/blog/saas-series-toc'>
					<a>check the full table of contents</a>
				</Link>
				. Here's what you can expect at a high level:
			</p>
			<ul>
				<li>
					<strong>Learn technologies progressively</strong> instead of
					all at once, with the goal of giving you something that you
					can showcase as yours. No unnecessary setup or long
					configurations.
				</li>
				<li>
					<strong>Main focus on common SaaS features</strong> such as
					navigation, authentication, permissions, billing, data
					visualization and exporting, and various user settings.
				</li>
				<li>
					<strong>
						Secondary focus on UX {'(User Experience)'} design
					</strong>{' '}
					for the portal, including mobile design, customer
					onboarding, proper routing, dropdowns, modals, and toast
					messages.
				</li>
			</ul>
			<p>
				You will also learn about the 2 primary architectures behind
				most SaaS apps {'(monolithic and decoupled)'} and which one to
				choose.
			</p>
			<h3>
				<Emoji symbol='👉🏼' label='hand pointing to right' />{' '}
				Technologies we'll use
			</h3>
			<p>
				All necessary tools will be explained in the series. The end
				result will be a{' '}
				<a
					href='https://github.com/arrigolupori/prospectrove-saas-boilerplate'
					target='_blank'
				>
					SaaS boilerplate available for all to use on GitHub
				</a>
				:
			</p>
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
				<li>
					Code hosting via{' '}
					<a href='https://www.heroku.com/' target='_blank'>
						Heroku
					</a>{' '}
					and{' '}
					<a href='https://vercel.com/' target='_blank'>
						Vercel
					</a>
				</li>
				<li>
					Simple authentication via{' '}
					<a href='https://auth0.com/' target='_blank'>
						Auth0
					</a>
				</li>
				<li>
					Styling &amp; UI with{' '}
					<a href='https://tailwindcss.com/' target='_blank'>
						TailwindCSS
					</a>
				</li>
				<li>
					Recurring billing via{' '}
					<a href='https://stripe.com/' target='_blank'>
						Stripe
					</a>
				</li>
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
		</>
	)
}
