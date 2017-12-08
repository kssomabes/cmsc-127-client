import axios from 'axios';

export const showItems = () => {
	return axios.get('/item/showItems');
}

export const showItemsNoFilter = () => {
	return axios.get('/item/showItemsNoFilter');
}

export const specificItem = (code) => {
	return axios.get(`/item/getItem/${code}`);
}

export const findItem = (name) => {
	return axios.get(`/item/findItem/${name}`);
}