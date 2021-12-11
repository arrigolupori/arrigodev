export default function TopBanner() {
	let finalDate = new Date(2021, 12, 27, 23, 59, 59)
	console.log(finalDate)
	return (
		<>
			<p className='banner'>
				Only 7 days left to sign up as an early bird and help shape the
				SaaS series with your suggestions.
			</p>
		</>
	)
}
