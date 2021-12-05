import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
	border: 2px solid ${({ theme }) => theme.toggleBorder};
	border-radius: 8px;
	cursor: pointer;
	font-size: 0.8rem;
	justify-content: space-between;
	margin: 0 auto;
	overflow: hidden;
	padding: 0.2rem;
	position: relative;
	width: 8rem;
	height: 1.5rem;
	outline: none;
`

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<Button onClick={toggleTheme}>
			{theme === 'light' ? (
				<span>Toggle dark mode</span>
			) : (
				<span>Toggle light mode</span>
			)}
		</Button>
	)
}

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default Toggle
