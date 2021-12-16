import Emoji from './Emoji'
import Image from 'next/image'

export default function WhoAm() {
	return (
		<>
			<h2>Who am I to claim to be good at coding?</h2>
			<p>Simple, I don&apos;t claim it.</p>
			<p>
				The one rule I stand by is that I know nothing{' '}
				<Emoji symbol='🤷🏼‍♂️' label='shrug' />
			</p>
			<p>
				That means I need to continuously educate myself, whether by
				real-world practice or through formal education.
			</p>
			<p>
				In this series, I take <em>existing</em> coding best practices
				and deliver a curated, simplified package that is easier to
				digest <Emoji symbol='🔖' label='clipped paper' />
			</p>
			<p>
				It&apos;s not my word against yours. You can change the
				app&apos;s functionality to fit your style of development.
			</p>
			<p>
				In fact, I encourage you to do so after the first 6-8 lessons.
			</p>
			<p>
				I send emails from my own business address so you can just hit
				reply and give me your take—objections included{' '}
				<Emoji symbol='👍🏼' label='thumbs up' />
			</p>
			<Image
				src='/arrigo-dev-portrait.png'
				alt='Portrait of Arrigo Lupori, author of Arrigo.dev and instructor of the Build Your Saas free serie.'
				width={128}
				height={128}
			/>
			<p>- Arrigo</p>
			<p>
				<em>P.s.: I always reply to all emails I get!</em>
			</p>
		</>
	)
}
