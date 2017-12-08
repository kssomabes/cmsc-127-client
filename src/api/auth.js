import axios from 'axios';

export const login = credentials => {
	return axios.post('/login', credentials);
}

export const getSession = () => {
	return axios.get('/session');
}

export const logout = () => {
	return axios.get('/logout');
}