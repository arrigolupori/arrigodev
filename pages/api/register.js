import cookie from 'cookie'
const API_URL = process.env.API_URL

export default async (req, res) => {
	if (req.method === 'POST') {
		const { username, email, password } = req.body
		const strapiRes = await fetch(`${API_URL}/auth/local/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})
		const data = await strapiRes.json()
		if (strapiRes.ok) {
			// @todo Set cookie
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', data.jwt, {
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					maxAge: 60 * 60 * 7, // 1 week
					sameSite: 'strict',
					path: '/',
				})
			)
			res.status(200).json({ user: data.user })
		} else {
			res.status(400).json({
				message: data.error.message,
			})
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({ message: `Method ${req.method} not allowed` })
	}
}
