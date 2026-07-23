<template>
  <div class="view-container">
    <header class="app-header">
      <button class="icon-btn" @click="$router.push('/')">
        <span class="material-icons-outlined">arrow_back</span>
      </button>
      <h1>Suivi Utilisation Producteur</h1>
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
              <label>Date suivi</label>
              <input type="date" class="form-input" v-model="form.date_suivi" required>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Suivi</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Statut utilisation</label>
              <select class="form-select" v-model="form.statut">
                <option value="">Sélectionner</option>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
                <option value="En attente">En attente</option>
                <option value="Suspendu">Suspendu</option>
              </select>
            </div>
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
  date_suivi: '',
  statut: '',
  observations: ''
})

const submitForm = () => {
  console.log('Submitted', form)
}

const cancel = () => {
  router.push('/')
}
</script>
