import axios from 'axios';

export const getMyPurchReq = () => {
	return axios.get('/user_normal/getMyPurchReq');
}

export const getMyPurchOrder = () => {
	return axios.get('/user_normal/getMyPurchOrder');
}

export const deleteMyPurchReq = (req_id) => {
	return axios.delete(`/user_normal/deleteMyPR/${req_id}`)
}