import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const api = axios.create({
    baseURL: `${BASE_URL}/api/v1`, 
    headers: {
        'Content-Type': 'application/json',
    },
})