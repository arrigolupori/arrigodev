import { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import styles from '../../styles/SubBox.module.css'
import Link from 'next/link'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, error } = useContext(AuthContext)
	useEffect(() => error && alert(error))

	const logUser = async (event) => {
		event.preventDefault()
		login({ email, password })
		// try {
		// 	const res = await fetch(
		// 		'https://cors-proxy-al.herokuapp.com/https://emailoctopus.com/api/1.5/lists/df07faf3-5440-11ec-96e5-06b4694bee2a/contacts',
		// 		{
		// 			body: JSON.stringify({
		// 				api_key: '96a09bfb-7822-4958-bdb5-e29890bfd0d4',
		// 				email_address: event.target.email.value,
		// 				status: 'SUBSCRIBED',
		// 			}),
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			method: 'POST',
		// 		}
		// 	)
		// 	if (res.ok) {
		// 		alert(
		// 			'Thank you, your information was submitted correctly. You will receive the first SaaS boilerplate issue in your inbox on Dec 18 2021. Looking forward to your participation!'
		// 		)
		// 	}
		// } catch {
		// 	alert(
		// 		"Something went wrong, please send a DM on Twitter @ArrigoLupori or an email to hey@arrigo.dev with your email address and I'll get you onboarded immediately."
		// 	)
		// }

		event.target.reset()
	}

	return (
		<>
			<form onSubmit={logUser} className={styles.formBottom}>
				<input
					type='email'
					name='email'
					id='email'
					autoComplete='email'
					placeholder='Your email...'
					className={styles.emailField}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					required
				/>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Your password...'
					required
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
				<button type='submit' className={styles.logInButton}>
					Log in »
				</button>
			</form>
			<p className={styles.expectation}>Want to join us instead?</p>
			<p className={styles.expectation}>
				Use the form{' '}
				<Link href='/join'>
					<a>on this page »</a>
				</Link>
			</p>
		</>
	)
}
