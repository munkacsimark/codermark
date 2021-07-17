import React, { useEffect, useState } from 'react'
import { getRandomImage } from '../helpers/imageGetter'
import {
	getItemFromSessionStorage,
	sessionStorageKeys,
	setItemToSessionStorage,
} from '../helpers/sessionStorage'
import DEFAULT_IMAGE_THUMB from '../images/bailey-zindel-NRQV-hBF10M-unsplash_small.jpg'
import DEFAULT_IMAGE from '../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
import * as style from './backgroundImage.module.css'
import imageURLToBase64URL from '../helpers/imageToBase64'

// snapshot of https://unsplash.com/photos/NRQV-hBF10M
const DEFAULT_DATA = {
	username: 'baileyzindel',
	name: 'Bailey Zindel',
}

const BackgroundImage = ({ onLoad = () => {} }) => {
	const [rawUrl, setRawUrl] = useState()
	const [thumbUrl, setThumbUrl] = useState()
	const [hideThumb, setHideThumb] = useState(false)
	const [viewportData, setViewportData] = useState()

	useEffect(() => {
		const viewportDataToSave = {
			width: window?.innerWidth || 1024,
			height: window?.innerHeight || 768,
			dpr: window?.devicePixelRatio || 1,
			orientation: window?.screen?.orientation?.type.includes('portrait')
				? 'portrait'
				: 'landscape',
		}
		setViewportData(viewportDataToSave)
		;(async () => {
			try {
				const dataFromSessionStorage = getItemFromSessionStorage(
					sessionStorageKeys.BG_IMAGE
				)
				if (dataFromSessionStorage) {
					setThumbUrl(dataFromSessionStorage.urls.thumb)
					setRawUrl(dataFromSessionStorage.urls.raw)
					onLoad({ ...dataFromSessionStorage.user })
				} else {
					const randomImageResponse = await getRandomImage()
					const { thumb, raw } = randomImageResponse?.data.urls
					const { username, name } = randomImageResponse?.data.user
					const base64Thumb = await imageURLToBase64URL(thumb)
					const base64Raw = await imageURLToBase64URL(raw)
					if (base64Thumb && base64Raw) {
						setItemToSessionStorage(sessionStorageKeys.BG_IMAGE, {
							urls: {
								thumb: base64Thumb,
								raw: base64Raw,
							},
							user: { username, name },
						})
					}
					setThumbUrl(thumb)
					setRawUrl(
						`${raw}?w=${viewportDataToSave.width}&h=${viewportDataToSave.height}&dpr=${viewportDataToSave.dpr}&orientation=${viewportDataToSave.orientation}&fit=crop&auto=format`
					)
					onLoad(thumb && raw ? { username, name } : DEFAULT_DATA)
				}
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
					<div className={style.fader} />
					<img
						className={style.backgroundImage}
						alt='background'
						src={rawUrl}
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
