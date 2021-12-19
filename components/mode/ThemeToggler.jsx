import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import Emoji from '../Emoji'

const Button = styled.button`
	border: 2px solid #6b8096;
	border-radius: 8px;
	cursor: pointer;
	font-size: 0.9rem;
	justify-content: space-between;
	margin: 0 auto;
	overflow: hidden;
	padding: 0.2rem;
	position: relative;
	width: 10rem;
	height: 2rem;
	outline: none;
`

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<Button onClick={toggleTheme}>
			{theme === 'light' ? (
				<span>
					Toggle dark mode <Emoji symbol='🌙' label='moon' />
				</span>
			) : (
				<span>
					Toggle light mode <Emoji symbol='🌞' label='sun' />
				</span>
			)}
		</Button>
	)
}

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default Toggle
