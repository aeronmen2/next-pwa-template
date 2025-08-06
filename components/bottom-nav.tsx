import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-black-90 pb-safe dark:border-zinc-800 dark:bg-black-90'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
								router.pathname === href
									? 'text-indigo-500 dark:text-indigo-400'
									: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
							}`}
						>
							{icon}
							<span className='text-xs text-zinc-600 dark:text-zinc-400'>
								{label}
							</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Accueil',
		href: '/',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Artistes',
		href: '/artists',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M3 2.5a2.5 2.5 0 015 0v.879c0 .455.145.898.413 1.269l1.18 1.638a.5.5 0 01-.406.789H5.815a.5.5 0 01-.407-.79L6.587 4.65A1.99 1.99 0 007 3.38V2.5a1.5 1.5 0 00-3 0 .5.5 0 01-1 0zM5.5 8.915l-.005-.008a.5.5 0 01-.495-.492V7.5a.5.5 0 011 0v.915zM9 7.5a.5.5 0 011 0v.915a.5.5 0 01-.495.492L9.5 8.915V7.5zM4.5 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 12.5a.5.5 0 11-1 0 .5.5 0 011 0z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Carte',
		href: '/map',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M.877.5a.5.5 0 01.123-.377L1.377.5H.877zm4.246 0L4.5.123a.5.5 0 01.623 0l.623.377-.623-.377-.623.377zM9.5.123a.5.5 0 01.623 0L10.5.5l-.377-.377L9.5.123zM.5 1.5v12a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5zM1.5 13V2h12v11h-12z'
					fill='currentColor'
				/>
				<path
					d='M7.5 3a3 3 0 100 6 3 3 0 000-6zM6 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Partenaires',
		href: '/partners',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M4.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6zM2 4.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-8zM3 5v7h9V5H3z'
					fill='currentColor'
				/>
				<path
					d='M5 7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM5 9.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'
					fill='currentColor'
				/>
			</svg>
		),
	},
]
