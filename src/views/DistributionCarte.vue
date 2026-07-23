<template>
  <div class="view-container">
    <header class="app-header">
      <button class="icon-btn" @click="$router.push('/')">
        <span class="material-icons-outlined">arrow_back</span>
      </button>
      <h1>Distribution Carte</h1>
    </header>

    <main class="main-content form-container">
      <form @submit.prevent="submitForm">
        <section class="form-section">
          <h2>En-tête</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Mission</label>
              <select class="form-select" v-model="form.mission">
                <option value="">Sélectionner</option>
                <option value="M1">Mission 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Producteur concerné</label>
              <select class="form-select" v-model="form.producteur">
                <option value="">Sélectionner</option>
                <option value="P001">P001 - Jean Dupont</option>
              </select>
            </div>
            <div class="form-group">
              <label>Date distribution</label>
              <input type="date" class="form-input" v-model="form.date_distribution" required>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Distribution</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.carte_remise">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Carte remise</span>
              </label>
            </div>
            <div class="form-group" v-if="form.carte_remise">
              <label>Code carte KYC</label>
              <input type="text" class="form-input" v-model="form.code_kyc">
            </div>
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.statut_synchro">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Statut synchro KYC</span>
              </label>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Observation</h2>
          <div class="form-grid">
            <div class="form-group full-width">
              <label>Observations</label>
              <textarea class="form-textarea" v-model="form.observations"></textarea>
            </div>
          </div>
        </section>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" @click="cancel">Annuler</button>
          <button type="submit" class="btn btn-primary">Enregistrer</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  mission: '',
  producteur: '',
  date_distribution: '',
  carte_remise: false,
  code_kyc: '',
  statut_synchro: false,
  observations: ''
})

const submitForm = () => {
  console.log('Submitted', form)
}

const cancel = () => {
  router.push('/')
}
</script>
