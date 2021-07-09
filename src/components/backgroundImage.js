import React, { useEffect, useState } from 'react'
import { getRandomImage } from '../helpers/imageGetter'
import * as style from './backgroundImage.module.css'
import DEFAULT_IMAGE from '../images/aleks-dahlberg-Vvje-a4hI1k-unsplash.jpg'

const BackgroundImage = () => {
	// TODO add credits of img

	const [rawUrl, setRawUrl] = useState()
	const [thumbUrl, setThumbUrl] = useState()
	const [hideThumb, setHideThumb] = useState(false)
	const [viewportData, setViewportData] = useState()

	useEffect(() => {
		setViewportData({
			width: window?.innerWidth || 1024,
			height: window?.innerHeight || 768,
			dpr: window?.devicePixelRatio || 1,
			orientation: window?.screen?.orientation?.type.includes('portrait')
				? 'portrait'
				: 'landscape',
		})
		;(async () => {
			try {
				const randomImageResponse = await getRandomImage()
				const urls = randomImageResponse?.data?.urls
				setThumbUrl(urls?.thumb)
				setRawUrl(urls?.raw || DEFAULT_IMAGE)
			} catch (error) {
				console.error(error)
				setRawUrl(DEFAULT_IMAGE)
			}
		})()
	}, [])

	return (
		<>
			{viewportData && rawUrl !== undefined && (
				<>
					<div className={style.fader} />
					<img
						className={style.backgroundImage}
						alt='background'
						src={`${rawUrl}?w=${viewportData.width}&h=${viewportData.height}&dpr=${viewportData.dpr}&orientation=${viewportData.orientation}&fit=crop&auto=format`}
						onLoad={() => setHideThumb(true)}
					/>
					{!hideThumb && (
						<img
							className={style.backgroundImage}
							alt='background'
							src={thumbUrl}
						/>
					)}
				</>
			)}
		</>
	)
}
export default BackgroundImage
