import axios from 'axios'

const ROOT = 'https://api.unsplash.com/'
const KEY = 'FwxuZSLh394Q-_UTC0KOpb9y4jXjYdLJMINDa3u5_1I'
const COLLECTION = '11649432'

const getRandomImage = async () => {
	const url = `${ROOT}photos/random?client_id=${KEY}&collections=${COLLECTION}`
	return await axios.get(url)
}

export { getRandomImage }
