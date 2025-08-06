import Page from '@/components/page'
import Section from '@/components/section'

const Map = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Plan du Festival
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Retrouvez toutes les informations pratiques pour vous orienter sur le
					site du{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Le Trident Festival
					</span>
					.
				</p>

				<br />

				<p className='text-zinc-600 dark:text-zinc-400'>
					Découvrez l&apos;emplacement des différentes scènes, des stands de
					restauration, des points d&apos;accueil et de toutes les commodités
					pour profiter pleinement de votre expérience.
				</p>
			</div>
		</Section>
	</Page>
)

export default Map
