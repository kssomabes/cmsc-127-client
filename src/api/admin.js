import axios from 'axios';


// PR 


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


export const addNewItem = (body) => {
	return axios.post(`/user_admin/addNewItem`, body);
}

export const editItem = (body) => {
	return axios.put(`/user_admin/updateItem`, body);
}

export const deleteItem = (item_code) => {
	return axios.delete(`/user_admin/deleteItem/${item_code}`);

}

export const getAllDelivery = () => {
	return axios.get(`/user_admin/getAllDelivery`);
}


export const findPr = (req_id) => {
	return axios.get(`/user_admin/findPr/${req_id}`);
}