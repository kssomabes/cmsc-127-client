import axios from 'axios';

export const showItems = () => {
	return axios.get('/item/showItems');
}