<template>
  <div class="view-container">
    <header class="view-header">
      <router-link to="/" class="btn btn-secondary">
        <span class="material-icons-outlined">arrow_back</span> Retour
      </router-link>
      <h1>Gestion des Litiges</h1>
    </header>

    <div class="form-container">
      <form @submit.prevent="save">
        <!-- Section 1: Contexte -->
        <div class="form-section">
          <h2>Contexte</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Mission</label>
              <select v-model="form.mission" class="form-select">
                <option value="">Sélectionner une mission</option>
                <option value="1">Mission 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Date de collecte *</label>
              <input type="date" v-model="form.dateCollecte" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Parcelle litigieuse</label>
              <select v-model="form.parcelle" class="form-select">
                <option value="">Sélectionner une parcelle</option>
                <option value="P001">P001 - 2.5ha - Jean Dupont</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 2: Motif du litige -->
        <div class="form-section">
          <h2>Motif du litige</h2>
          <div class="form-group">
            <label>Motif changement propriété</label>
            <select v-model="form.motif" class="form-select">
              <option value="">Sélectionner un motif</option>
              <option value="Décès / Succession">Décès / Succession</option>
              <option value="Cession">Cession</option>
              <option value="Don">Don</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>

        <!-- Section 3: Autorité Villageoise -->
        <div class="form-section">
          <h2>Autorité Villageoise</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Qualité</label>
              <select v-model="form.qualiteAutorite" class="form-select">
                <option value="">Sélectionner la qualité</option>
                <option value="Chef de village">Chef de village</option>
                <option value="Chef de terre">Chef de terre</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div class="form-group">
              <label>Nom & prénom autorité</label>
              <input type="text" v-model="form.nomAutorite" class="form-input" />
            </div>
            <div class="form-group">
              <label>Visa</label>
              <select v-model="form.visaAutorite" class="form-select">
                <option value="">Sélectionner le visa</option>
                <option value="Approuvé">Approuvé</option>
                <option value="Pas approuvé">Pas approuvé</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 4: Ayants-droit -->
        <div class="form-section">
          <h2>Ayants-droit</h2>
          <div class="dynamic-table-wrapper">
            <table class="dynamic-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom & Prénoms</th>
                  <th>Date naissance</th>
                  <th>Lieu naissance</th>
                  <th>Contact</th>
                  <th>N° Pièce</th>
                  <th>Superficie obtenue (ha)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(ayantDroit, index) in ayantsDroit" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td><input type="text" v-model="ayantDroit.nomPrenom" class="form-input" /></td>
                  <td><input type="date" v-model="ayantDroit.dateNaissance" class="form-input" /></td>
                  <td><input type="text" v-model="ayantDroit.lieuNaissance" class="form-input" /></td>
                  <td><input type="tel" v-model="ayantDroit.contact" class="form-input" /></td>
                  <td><input type="text" v-model="ayantDroit.piece" class="form-input" /></td>
                  <td><input type="number" step="0.01" v-model="ayantDroit.superficie" class="form-input" /></td>
                  <td>
                    <button type="button" @click="removeAyantDroit(index)" class="btn btn-danger" title="Supprimer">
                      <span class="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" @click="addAyantDroit" class="btn btn-secondary mt-2">
            <span class="material-icons-outlined">add</span> Ajouter un ayant-droit
          </button>
        </div>

        <!-- Actions -->
        <div class="form-actions mt-4">
          <button type="button" class="btn btn-secondary" @click="cancel">Annuler</button>
          <button type="submit" class="btn btn-primary">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  mission: '',
  dateCollecte: '',
  parcelle: '',
  motif: '',
  qualiteAutorite: '',
  nomAutorite: '',
  visaAutorite: ''
});

const ayantsDroit = ref([]);

const addAyantDroit = () => {
  ayantsDroit.value.push({
    nomPrenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    contact: '',
    piece: '',
    superficie: 0
  });
};

const removeAyantDroit = (index) => {
  ayantsDroit.value.splice(index, 1);
};

const save = () => {
  console.log('Saving form', form, ayantsDroit.value);
};

const cancel = () => {
  console.log('Cancelled');
};
</script>
