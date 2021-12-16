import styles from '../styles/SubBox.module.css'
import Link from 'next/link'

export default function LoginForm() {
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
				alert(
					'Thank you, your information was submitted correctly. You will receive the first SaaS boilerplate issue in your inbox on Dec 18 2021. Looking forward to your participation!'
				)
			}
		} catch {
			alert(
				"Something went wrong, please send a DM on Twitter @ArrigoLupori or an email to hey@arrigo.dev with your email address and I'll get you onboarded immediately."
			)
		}

		event.target.reset()
	}

	return (
		<>
			<form onSubmit={registerUser} className={styles.formBottom}>
				<label htmlFor='email' className={styles.displayBlock}>
					<em>Email address</em>
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className={styles.displayBlock}
					autoComplete='email'
					required
				/>
				<label htmlFor='password' className={styles.displayBlock}>
					<em>Password</em>
				</label>
				<input
					type='password'
					name='password'
					id='password'
					className={styles.displayBlock}
					required
				/>
				<button
					type='submit'
					className={`${styles.displayBlock} ${styles.logInButton}`}
				>
					Sign in »
				</button>
			</form>
			<p className={styles.expectation}>Want to sign up instead?</p>
			<p className={styles.expectation}>
				Use the form{' '}
				<Link href='/'>
					<a>on the home page</a>
				</Link>
				.
			</p>
		</>
	)
}
