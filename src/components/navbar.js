import React from 'react'
import { Link } from 'gatsby'
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTelegramPlane,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scale, rhythm } from '../typography'
import * as style from './navbar.module.css'

const navItems = [
	{
		title: 'me',
		route: '/me',
	},
	{
		title: 'blog',
		route: '/',
	},
]

const socialItems = [
	{
		title: 'GitHub',
		url: 'https://github.com/munkacsimark',
		icon: faGithub,
	},
	{
		title: 'Instagram',
		url: 'https://instagram.com/munkacsimark',
		icon: faInstagram,
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/munkacsimark',
		icon: faTwitter,
	},
	{
		title: 'LinkedIn',
		url: 'https://linkedin.com/in/munkacsimark',
		icon: faLinkedin,
	},
	{
		title: 'Telegram',
		url: 'https://t.me/markmunkacsi',
		icon: faTelegramPlane,
	},
	{
		title: 'Email',
		url: 'mailto:markmunkacsi@protonmail.com',
		icon: faEnvelope,
	},
]

const Navbar = () => {
	return (
		<header
			style={{ padding: `${rhythm(0.5)} ${rhythm(1)}` }}
			className={style.navBar}>
			<div className={style.navContainer}>
				<nav>
					{navItems.map(({ route, title }) => (
						<Link
							style={{ ...scale(0 / 5), marginRight: rhythm(1) }}
							className={style.navLink}
							key={route}
							to={route}>
							{title}
						</Link>
					))}
				</nav>
				<div>
					{socialItems.map(({ url, title, icon }) => (
						<a
							style={{ marginLeft: rhythm(1) }}
							className={style.socialIcon}
							key={title}
							href={url}
							rel='noreferrer noopener'
							target='_blank'
							title={title}>
							<FontAwesomeIcon icon={icon} size='lg' />
						</a>
					))}
				</div>
			</div>
		</header>
	)
}

export default Navbar
export { socialItems }
