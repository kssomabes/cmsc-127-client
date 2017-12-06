import axios from 'axios';

export const getAllPurchReq = () => {
	return axios.get('/user_admin/getAllPurchReq');
}

export const getAllPurchOrder = () => {
	return axios.get('/user_admin/getAllPurchOrder');
}

export const getPrAndItems = () => {
	return axios.get('/user_admin/prNjoinItem');
}

export const getPoAndItems = () => {
	return axios.get('/user_admin/poNjoinItem');
}

export const approveReq = (req_id) => {
	return axios.put(`/user_admin/approve/${req_id}`);
}

export const viewItemsInPr = (req_id) => {
	return axios.get(`/user_admin/viewItemsInPr/${req_id}`); 
}

export const viewItemsInPo = (req_id) => {
	return axios.get(`/user_admin/viewItemsInPo/${req_id}`); 
}