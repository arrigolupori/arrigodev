import AuthContext from '../../context/AuthContext'
import { useState, useContext, useEffect } from 'react'
import Emoji from '../Emoji'
import styles from '../../styles/SubBox.module.css'
import Link from 'next/link'

export default function SignupForm() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { register, error } = useContext(AuthContext)

	useEffect(() => error && alert(error))

	const registerUser = async (event) => {
		event.preventDefault()
		register({ username, email, password })
		event.target.reset()
	}

	return (
		<>
			<form onSubmit={registerUser} className={styles.formBottom}>
				<input
					type='email'
					name='email'
					id='email'
					autoComplete='email'
					placeholder='Your email...'
					className={styles.emailField}
					required
					onChange={(e) => {
						setUsername(e.target.value)
						setEmail(e.target.value)
					}}
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
					Join now
				</button>

				<div className={styles.benefits}>
					<p>
						{' '}
						<Emoji symbol='✔' label='checkmark' />
						<span> Join 100+ fellow SaaS enthusiasts</span>
					</p>
					<p>
						{' '}
						<Emoji symbol='✔' label='checkmark' />
						<span> Reference curated written resources</span>
					</p>
					<p>
						{' '}
						<Emoji symbol='✔' label='checkmark' />
						<span> Get instant access to all previous issues</span>
					</p>
				</div>
			</form>
			<p className={styles.expectation}>Want to log in instead?</p>
			<p className={styles.expectation}>
				Use the form{' '}
				<Link href='/login'>
					<a>on this page »</a>
				</Link>
			</p>
		</>
	)
}
