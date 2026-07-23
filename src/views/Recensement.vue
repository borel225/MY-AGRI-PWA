<template>
  <div class="view-container">
    <header class="view-header">
      <router-link to="/" class="btn btn-secondary">
        <span class="material-icons-outlined">arrow_back</span> Retour
      </router-link>
      <h1>Recensement</h1>
    </header>

    <div class="form-container">
      <form @submit.prevent="save">
        <!-- Section 1: En-tête Mission -->
        <div class="form-section">
          <h2>En-tête Mission</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Mission</label>
              <select v-model="form.mission" class="form-select" disabled>
                <option value="">Sélectionner une mission</option>
                <option value="1">Mission 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Date mission</label>
              <input type="date" v-model="form.dateMission" class="form-input" readonly />
            </div>
            <div class="form-group">
              <label>Localité</label>
              <select v-model="form.localite" class="form-select" disabled>
                <option value="">Sélectionner une localité</option>
                <option value="1">Localité A</option>
              </select>
            </div>
            <div class="form-group">
              <label>Agent</label>
              <select v-model="form.agent" class="form-select" disabled>
                <option value="">Sélectionner un agent</option>
                <option value="1">Agent 1</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 2: Informations Producteur -->
        <div class="form-section">
          <h2>Informations Producteur</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Code producteur</label>
              <input type="text" v-model="form.codeProducteur" placeholder="PRD001" class="form-input" />
            </div>
            <div class="form-group">
              <label>Nom & Prénom *</label>
              <input type="text" v-model="form.nomPrenom" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Contact</label>
              <input type="tel" v-model="form.contact" class="form-input" />
            </div>
            <div class="form-group">
              <label>N° Pièce d'identité</label>
              <input type="text" v-model="form.pieceIdentite" class="form-input" />
            </div>
          </div>
        </div>

        <!-- Section 3: Résumé Parcelles -->
        <div class="form-section">
          <h2>Résumé Parcelles</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Nb parcelles déclarées</label>
              <input type="number" v-model="form.nbParcellesDeclarees" class="form-input" />
            </div>
            <div class="form-group">
              <label>Nb parcelles géolocalisées</label>
              <input type="number" v-model="form.nbParcellesGeolocalisees" class="form-input" />
            </div>
          </div>
        </div>

        <!-- Section 4: Liste des Parcelles -->
        <div class="form-section">
          <h2>Liste des Parcelles</h2>
          <div class="dynamic-table-wrapper">
            <table class="dynamic-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code parcelle</th>
                  <th>Superficie GPS (ha)</th>
                  <th>Localité</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(parcelle, index) in parcelles" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td><input type="text" v-model="parcelle.code" class="form-input" /></td>
                  <td><input type="number" step="0.01" v-model="parcelle.superficie" class="form-input" /></td>
                  <td><input type="text" v-model="parcelle.localite" class="form-input" /></td>
                  <td>
                    <button type="button" @click="removeParcelle(index)" class="btn btn-danger" title="Supprimer">
                      <span class="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" @click="addParcelle" class="btn btn-secondary mt-2">
            <span class="material-icons-outlined">add</span> Ajouter une parcelle
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
  dateMission: '',
  localite: '',
  agent: '',
  codeProducteur: '',
  nomPrenom: '',
  contact: '',
  pieceIdentite: '',
  nbParcellesDeclarees: 0,
  nbParcellesGeolocalisees: 0
});

const parcelles = ref([]);

const addParcelle = () => {
  parcelles.value.push({
    code: '',
    superficie: 0,
    localite: ''
  });
};

const removeParcelle = (index) => {
  parcelles.value.splice(index, 1);
};

const save = () => {
  console.log('Saving form', form, parcelles.value);
};

const cancel = () => {
  console.log('Cancelled');
};
</script>
