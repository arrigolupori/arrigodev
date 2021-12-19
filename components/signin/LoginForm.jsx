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
