import axios from './axios';

const API = 'http:localhost:3000/api'

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);
