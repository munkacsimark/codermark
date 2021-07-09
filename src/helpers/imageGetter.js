//import axios from 'axios'
import MOCKED_URL from '../images/aleks-dahlberg-Vvje-a4hI1k-unsplash.jpg'

/*
const ROOT = 'https://api.unsplash.com/'
const KEY = 'FwxuZSLh394Q-_UTC0KOpb9y4jXjYdLJMINDa3u5_1I'
const COLLECTION = '11649432'
*/

const getRandomImage = async () => {
	/*
	const url = `${ROOT}photos/random?client_id=${KEY}&collections=${COLLECTION}`
	return await axios.get(url)
	*/

	// TODO MOCK
	return Promise.resolve({
		data: {
			urls: {
				raw: MOCKED_URL,
				thumb: MOCKED_URL,
			},
		},
	})
}

export { getRandomImage }
