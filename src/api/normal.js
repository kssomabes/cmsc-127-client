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

export const viewItemsInPr = (req_id) => {
	return axios.get(`/user_normal/viewItemsInPr/${req_id}`); 
}

export const viewItemsInPo = (req_id) => {
	return axios.get(`/user_normal/viewItemsInPo/${req_id}`); 
}