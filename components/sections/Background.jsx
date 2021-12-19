import Image from 'next/image'
import Emoji from '../Emoji'
import SubBox from '../SubBox'

export default function Background() {
	return (
		<>
			<h2>A bit of background</h2>
			<p>
				Of course, I wouldn&apos;t just go out of my way to start a
				newsletter on something I don&apos;t feel comfortable talking
				about.
			</p>
			<p>
				I&apos;ve been building brands for the better part of 5 years
				(as of late 2021).
			</p>
			<p> And I&apos;ve never really stopped since:</p>
			<Image
				src='/img/arrigo-lupori-com-brand-timeline.png'
				width='788'
				height='1024'
				alt='arrigo lupori brand experience timeline'
			/>
			<p>
				I&apos;m the first to admit that some of them sucked{' '}
				<Emoji symbol='😅' label='embarrassed' />
			</p>
			<p>
				But the progression got me to where I am today, looking to
				generate added value wherever I get a chance to.
			</p>
			<p>
				And that&apos;s what business is all about - generating value{' '}
				<Emoji symbol='🔨' label='hammer' />
			</p>
			<p>
				That, together with proper management and development of the
				value you build, is what I&apos;ll focus on in this newsletter.
			</p>
			<p>
				Plus, you don&apos;t have to have your own brand to benefit from
				my emails. If in any way you are interested in modern business,
				you&apos;ll get something out of them. That is my guarantee{' '}
				<Emoji symbol='💯' label='100 mark' />
			</p>
			<p>Enough talking, I have a spreadsheet that needs tweaking!</p>
			<SubBox />
		</>
	)
}
