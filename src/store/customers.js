import { defineStore } from "pinia"
import api from "../api/api"

export const useCustomers = defineStore('customers', {
	state: () => {
		return {
			customers: [],
			modalCustomer: false
		}
	},
	getters: {
		fetchCustomers(state) {
			return state.customers
		},
	},
	actions: {
		async getCustomers() {
			await api.get('/customers').then(res => { this.customers = res.data })
		},
		openModal() {
			this.modalCustomer = !this.modalCustomer
		},
		async storeCustomer(payload) {
			await api.post('/customers', payload).then(res => {
				this.customers.push(res.data)
			})
		}
	}
})