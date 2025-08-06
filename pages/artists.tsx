import Page from '@/components/page'
import Section from '@/components/section'

const Artists = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Artistes du Festival
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Découvrez notre programmation exceptionnelle avec des artistes de
					renommée internationale qui viendront enflammer la scène du{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Le Trident Festival
					</span>
					.
				</p>

				<br />

				<p className='text-zinc-600 dark:text-zinc-400'>
					Des performances uniques vous attendent avec une sélection
					d&apos;artistes soigneusement choisie pour offrir une expérience
					musicale inoubliable.
				</p>
			</div>
		</Section>
	</Page>
)

export default Artists
