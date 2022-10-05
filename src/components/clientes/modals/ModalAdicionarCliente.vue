<!-- HTML -->
<template>
  <section :class="['modal', modalCustomer ? 'mostrar' : null]">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="closeModal">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" v-model="data.name" autocomplete="false" spellcheck="false" placeholder="Digite aqui...">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input type="tel" v-model="data.whatsapp" autocomplete="false" spellcheck="false" placeholder="(99) 99999-9999">
      </div>
      <button type="button" class="principal" @click="submit">Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { reactive } from "vue"
import { storeToRefs } from "pinia"
import { useCustomers } from "../../../store/customers"
const { modalCustomer } = storeToRefs( useCustomers())
const { openModal, storeCustomer } = useCustomers()
const data = reactive({
  name: '',
  whatsapp: ''
})
const submit = () => {
  if (data.name && data.whatsapp) {
    storeCustomer(data)
    reset()
    openModal()
  }
  return
}
const closeModal = () => {
  openModal()
  reset()
}
const reset = () => {
  data.name = ''
  data.whatsapp = ''
}
modalCustomer
closeModal
submit
data
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
