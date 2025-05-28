import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
})


export async function getExperiences() {
    const response = await api.get('/experience');
    return response.data;
}

export default api;