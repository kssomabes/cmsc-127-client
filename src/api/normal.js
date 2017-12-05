import axios from 'axios';

export const getMyPurchReq = () => {
	return axios.get('/user_normal/getMyPurchReq');
}

export const getMyPurchOrder = () => {
	return axios.get('/user_normal/getMyPurchOrder');
}