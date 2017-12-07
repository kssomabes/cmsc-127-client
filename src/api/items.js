import axios from 'axios';

export const showItems = () => {
	return axios.get('/item/showItems');
}

export const showItemsNoFilter = () => {
	return axios.get('/item/showItemsNoFilter');
}