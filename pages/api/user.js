import cookie from 'cookie'
const API_URL = process.env.API_URL

export default async (req, res) => {
	if (req.method === 'GET') {
		console.log(req.headers.cookie)
		if (!req.headers.cookie) {
			res.status(403).json({ message: 'Not Authorized' })
			return
		}

		const { token } = cookie.parse(req.headers.cookie)

		const strapiRes = await fetch(`${API_URL}/users/me`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const user = await strapiRes.json()
		if (strapiRes.ok) {
			res.status(200).json({ user })
		} else {
			res.status(403).json({ message: 'User forbidden' })
		}
	} else {
		res.setHeader('Allow', ['GET'])
		res.status(405).json({ message: `Method ${req.method} not allowed` })
	}
}
