import { AuthProvider } from '../context/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		// Initialize Fathom when the app loads
		// Example: yourdomain.com
		//  - Do not include https://
		//  - This must be an exact match of your domain.
		//  - If you're using www. for your domain, make sure you include that here.
		Fathom.load('VUBGNEBE', {
			includedDomains: ['arrigo.dev'],
		})

		function onRouteChangeComplete() {
			Fathom.trackPageview()
		}
		// Record a pageview when route changes
		router.events.on('routeChangeComplete', onRouteChangeComplete)

		// Unassign event listener
		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete)
		}
	}, [])
	return (
		<AuthProvider>
			<div className={styles.container}>
				<p>
					Unfortunately, I had to cancel the SaaS series due to an
					overwhelming workload. I'm still considering making it
					available as a standalone course rather than a bi-weekly
					series but for the moment, it is cancelled. Sorry for the
					inconvenience. See the{' '}
					<a
						style={{ color: 'blue' }}
						href='https://eocampaign1.com/web-version?p=459d4d03-60fe-11ec-96e5-06b4694bee2a&pt=campaign&t=1639941751&s=728aa5f8345fd4fb9636a31a69f5c371030f80b95bc02eba394967d8cc5ff881'
						target='_blank'
						rel='noreferrer'
					>
						message I sent out to existing subscribers
					</a>
					.
				</p>
			</div>
		</AuthProvider>
	)
}

export default MyApp
