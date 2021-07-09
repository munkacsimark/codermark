import views from '../views'

const mediaQueryStrings = {
	DESKTOP: '(min-width: 1025px)',
	TABLET: '(min-width: 769px) and (max-width: 1024px)',
	MOBILE: '(max-width: 768px)',
}

const viewChangeHandler = viewSetter => {
	const mediaQueryDesktop = window.matchMedia(mediaQueryStrings.DESKTOP)
	const mediaQueryTablet = window.matchMedia(mediaQueryStrings.TABLET)
	const mediaQueryMobile = window.matchMedia(mediaQueryStrings.MOBILE)

	const handleDesktopChange = event => {
		if (event.target.matches) viewSetter(views.DESKTOP)
	}
	const handleTabletChange = event => {
		if (event.target.matches) viewSetter(views.TABLET)
	}
	const handleMobileChange = event => {
		if (event.target.matches) viewSetter(views.MOBILE)
	}

	mediaQueryDesktop.addEventListener('change', handleDesktopChange)
	mediaQueryTablet.addEventListener('change', handleTabletChange)
	mediaQueryMobile.addEventListener('change', handleMobileChange)
	return () => {
		mediaQueryDesktop.removeEventListener('change', handleDesktopChange)
		mediaQueryTablet.removeEventListener('change', handleTabletChange)
		mediaQueryMobile.removeEventListener('change', handleMobileChange)
	}
}

export default viewChangeHandler
