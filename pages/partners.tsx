import Page from '@/components/page'
import Section from '@/components/section'

const Partners = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Nos Partenaires
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Le{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Le Trident Festival
					</span>{' '}
					est rendu possible grâce au soutien de nos précieux partenaires.
				</p>

				<br />

				<p className='text-zinc-600 dark:text-zinc-400'>
					Découvrez les entreprises et institutions qui nous accompagnent dans
					cette aventure musicale et culturelle exceptionnelle.
				</p>
			</div>
		</Section>
	</Page>
)

export default Partners
