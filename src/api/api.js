import axios from "axios"

const app = import.meta.env.VITE_VUE_APP

const api = axios.create({
	baseURL: app
})

export default api