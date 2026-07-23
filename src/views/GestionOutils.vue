<template>
  <div class="view-container">
    <header class="app-header">
      <button class="icon-btn" @click="$router.push('/')">
        <span class="material-icons-outlined">arrow_back</span>
      </button>
      <h1>Gestion des Outils</h1>
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
          </div>
        </section>

        <section class="form-section">
          <h2>Personnel</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Nb délégués/magasiniers codifiés</label>
              <input type="number" class="form-input" v-model.number="form.nb_delegues">
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Inventaire TPE</h2>
          <div class="inventory-grid">
            <div class="inventory-row" style="grid-template-columns: 1fr repeat(5, 80px);">
              <span class="inventory-row-label">TPE</span>
              <input type="number" class="form-input" v-model.number="form.tpe_demande" placeholder="Dem.">
              <input type="number" class="form-input" v-model.number="form.tpe_recu" placeholder="Reçu">
              <input type="number" class="form-input" v-model.number="form.tpe_fonctionnel" placeholder="Fonc.">
              <input type="number" class="form-input" v-model.number="form.tpe_non_fonctionnel" placeholder="Non-F.">
              <input type="number" class="form-input" v-model.number="form.tpe_egare" placeholder="Égaré">
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Inventaire Scellés</h2>
          <div class="inventory-grid">
            <div class="inventory-row" style="grid-template-columns: 1fr repeat(3, 100px);">
              <span class="inventory-row-label">Scellés</span>
              <input type="number" class="form-input" v-model.number="form.scelles_demande" placeholder="Dem.">
              <input type="number" class="form-input" v-model.number="form.scelles_recu" placeholder="Reçu">
              <input type="number" class="form-input" v-model.number="form.scelles_projection" placeholder="Proj.">
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>Inventaire Sacherie</h2>
          <div class="inventory-grid">
            <div class="inventory-row" style="grid-template-columns: 1fr repeat(3, 100px);">
              <span class="inventory-row-label">Sacherie</span>
              <input type="number" class="form-input" v-model.number="form.sacherie_demande" placeholder="Dem.">
              <input type="number" class="form-input" v-model.number="form.sacherie_recu" placeholder="Reçu">
              <input type="number" class="form-input" v-model.number="form.sacherie_projection" placeholder="Proj.">
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
  nb_delegues: null,
  tpe_demande: null,
  tpe_recu: null,
  tpe_fonctionnel: null,
  tpe_non_fonctionnel: null,
  tpe_egare: null,
  scelles_demande: null,
  scelles_recu: null,
  scelles_projection: null,
  sacherie_demande: null,
  sacherie_recu: null,
  sacherie_projection: null
})

const submitForm = () => {
  console.log('Submitted', form)
}

const cancel = () => {
  router.push('/')
}
</script>
