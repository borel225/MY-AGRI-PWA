<template>
  <div class="view-container">
    <header class="app-header">
      <button class="icon-btn" @click="$router.push('/')">
        <span class="material-icons-outlined">arrow_back</span>
      </button>
      <h1>Suivi Commercialisation</h1>
    </header>

    <main class="main-content form-container">
      <form @submit.prevent="submitForm">
        <section class="form-section">
          <h2>En-tête</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Opérateur</label>
              <select class="form-select" v-model="form.operateur">
                <option value="">Sélectionner</option>
                <option value="OP1">Opérateur 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Mission</label>
              <select class="form-select" v-model="form.mission">
                <option value="">Sélectionner</option>
                <option value="M1">Mission 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Date de passage</label>
              <input type="date" class="form-input" v-model="form.date_passage" required>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Volumes</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Volume physique constaté</label>
              <input type="number" step="0.01" class="form-input" v-model.number="form.volume_physique">
            </div>
            <div class="form-group">
              <label>Volume déclaré SETBC</label>
              <input type="number" step="0.01" class="form-input" v-model.number="form.volume_setbc">
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Connaissements</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Connaissements émis</label>
              <input type="number" class="form-input" v-model.number="form.conn_emis">
            </div>
            <div class="form-group">
              <label>Réceptionnés</label>
              <input type="number" class="form-input" v-model.number="form.conn_receptionnes">
            </div>
            <div class="form-group">
              <label>Refoulés</label>
              <input type="number" class="form-input" v-model.number="form.conn_refoules">
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Contrôle Sacs</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Nb sacs sans scellés</label>
              <input type="number" class="form-input" v-model.number="form.sacs_sans_scelles">
            </div>
            <div class="form-group full-width">
              <label>Motif sacs sans scellés</label>
              <textarea class="form-textarea" v-model="form.motif_sacs"></textarea>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Pré-enregistrement</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Nb producteurs pré-enregistrés</label>
              <input type="number" class="form-input" v-model.number="form.prod_pre_enregistres">
            </div>
            <div class="form-group full-width">
              <label>Motif enquête</label>
              <input type="text" class="form-input" v-model="form.motif_enquete">
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
  operateur: '',
  mission: '',
  date_passage: '',
  volume_physique: null,
  volume_setbc: null,
  conn_emis: null,
  conn_receptionnes: null,
  conn_refoules: null,
  sacs_sans_scelles: null,
  motif_sacs: '',
  prod_pre_enregistres: null,
  motif_enquete: ''
})

const submitForm = () => {
  console.log('Submitted', form)
}

const cancel = () => {
  router.push('/')
}
</script>
