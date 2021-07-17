const getBase64URLFromImgElement = imageElement => {
	const canvasElement = document.createElement('canvas')
	canvasElement.width = imageElement.width
	canvasElement.height = imageElement.height
	const ctx = canvasElement.getContext('2d')
	ctx.drawImage(imageElement, 0, 0)
	return canvasElement.toDataURL('image/jpeg')
}

const imageURLToBase64URL = async url => {
	if (!url) return Promise.resolve(null)
	try {
		return new Promise((resolve, reject) => {
			const imageElement = document.createElement('img')
			imageElement.crossOrigin = '*'
			imageElement.onerror = () => {
				console.error('Error while loading image to image object')
				resolve(null)
			}
			imageElement.onload = event => {
				resolve(getBase64URLFromImgElement(event.target))
			}
			imageElement.src = url
		})
	} catch (error) {
		console.error('Error while getting base64 version of image', error)
		return Promise.resolve(null)
	}
}

export default imageURLToBase64URL
