import React, { useEffect, useState } from 'react'
import { getRandomImage } from '../helpers/imageGetter'
import DEFAULT_IMAGE_THUMB from '../images/bailey-zindel-NRQV-hBF10M-unsplash_small.jpg'
import DEFAULT_IMAGE from '../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
import * as style from './backgroundImage.module.css'

// snapshot of https://unsplash.com/photos/NRQV-hBF10M
const DEFAULT_DATA = {
	username: 'baileyzindel',
	name: 'Bailey Zindel',
}

const isBrowser = typeof window !== 'undefined'

const BackgroundImage = ({ onLoad = () => {} }) => {
	const [rawUrl, setRawUrl] = useState()
	const [thumbUrl, setThumbUrl] = useState()
	const [imageLoaded, setImageLoaded] = useState(false)
	const [thumbLoaded, setThumbLoaded] = useState(false)

	const viewportData = isBrowser
		? {
				width: window?.innerWidth || 1024,
				height: window?.innerHeight || 768,
				dpr: window?.devicePixelRatio || 1,
				orientation: window?.screen?.orientation?.type.includes('portrait')
					? 'portrait'
					: 'landscape',
		  }
		: null

	useEffect(() => {
		;(async () => {
			try {
				const randomImageResponse = await getRandomImage()
				const { thumb, raw } = randomImageResponse?.data.urls
				const { username, name } = randomImageResponse?.data.user
				setThumbUrl(thumb)
				setRawUrl(raw)
				onLoad({ username, name })
			} catch (error) {
				console.error('Error while getting image from Unsplash', error)
				setThumbUrl(DEFAULT_IMAGE_THUMB)
				setRawUrl(DEFAULT_IMAGE)
				onLoad(DEFAULT_DATA)
			}
		})()
	}, [onLoad])

	return (
		<>
			{viewportData && rawUrl !== undefined && (
				<>
					<div
						className={`${style.fader} ${
							thumbLoaded ? style.transparentFader : ''
						}`}
					/>
					<img
						className={style.backgroundImage}
						alt='background'
						src={`${rawUrl}?w=${viewportData.width}&h=${viewportData.height}&dpr=${viewportData.dpr}&orientation=${viewportData.orientation}&fit=crop&auto=format`}
						onLoad={() => setImageLoaded(true)}
					/>
					<img
						macska='hello'
						className={`${style.backgroundImage} ${
							imageLoaded ? style.backgroundImageFade : ''
						}`}
						alt='background'
						src={thumbUrl}
						onLoad={() => setThumbLoaded(true)}
					/>
				</>
			)}
		</>
	)
}
export default BackgroundImage
