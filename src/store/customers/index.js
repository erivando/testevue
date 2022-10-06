import { defineStore } from "pinia"
import state from "./state"
import { default as getters } from "./getters"
import { default as actions } from "./actions"

export const useCustomers = defineStore('customers', {
	state,
	getters,
	actions
})