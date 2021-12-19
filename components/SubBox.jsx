import { useRouter } from 'next/router'
import styles from '../styles/SubBox.module.css'

export default function SubBox() {
	const router = useRouter()
	const registerUser = async (event) => {
		event.preventDefault()
		try {
			const res = await fetch(
				'https://cors-proxy-al.herokuapp.com/https://emailoctopus.com/api/1.5/lists/df07faf3-5440-11ec-96e5-06b4694bee2a/contacts',
				{
					body: JSON.stringify({
						api_key: '96a09bfb-7822-4958-bdb5-e29890bfd0d4',
						email_address: event.target.email.value,
						status: 'SUBSCRIBED',
					}),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
				}
			)
			if (res.ok) {
				alert(router.push('/password'))
			}
		} catch {
			alert(
				"Something went wrong, please send a DM on Twitter @ArrigoLupori or an email to hey@arrigo.dev with your email address and I'll get you onboarded immediately."
			)
		}
	}

	return (
		<>
			<button
				className={styles.getStarted}
				onClick={() => router.push('/join')}
			>
				Get started
			</button>
			<button
				className={styles.learnMore}
				onClick={() => router.push('/saas')}
			>
				Learn more
			</button>
			<p className={styles.expectation}>
				Don&apos;t really know what to expect?
			</p>
			<p className={styles.expectation}>
				Here&apos;s{' '}
				<a
					href='https://eocampaign1.com/web-version?p=84114309-5506-11ec-96e5-06b4694bee2a&pt=campaign&t=1638626301&s=78053f209dda44683ee9d82bad1fcb374a566683aea31d7a60a9b02013c31957'
					className={styles.expectationLink}
					target='_blank'
					rel='noreferrer'
				>
					the first email I sent out
				</a>{' '}
				to people who joined.
			</p>
		</>
	)
}
