const sessionStorageKeys = {
	BG_IMAGE: 'BG_IMAGE',
}

const setItemToSessionStorage = (key, data) => {
	try {
		sessionStorage.setItem(key, JSON.stringify(data))
	} catch (error) {
		sessionStorage.removeItem(key)
		console.error('Failed to write data into SessionStorage', error)
	}
}

const getItemFromSessionStorage = key => {
	try {
		const item = sessionStorage.getItem(key)
		return item ? JSON.parse(item) : null
	} catch (error) {
		sessionStorage.removeItem(key)
		console.error('Failed to get data from SessionStorage', error)
		return null
	}
}

export {
	sessionStorageKeys,
	setItemToSessionStorage,
	getItemFromSessionStorage,
}
