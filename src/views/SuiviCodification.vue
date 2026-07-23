<template>
  <div class="view-container">
    <header class="view-header">
      <router-link to="/" class="btn btn-secondary">
        <span class="material-icons-outlined">arrow_back</span> Retour
      </router-link>
      <h1>Codification Opérateur</h1>
    </header>

    <div class="form-container">
      <form @submit.prevent="save">
        <!-- Section 1: En-tête -->
        <div class="form-section">
          <h2>En-tête</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Opérateur</label>
              <select v-model="form.operateur" class="form-select">
                <option value="">Sélectionner un opérateur</option>
                <option value="OP1">Opérateur 1</option>
              </select>
            </div>
            <div class="form-group">
              <label>Mission</label>
              <select v-model="form.mission" class="form-select">
                <option value="">Sélectionner une mission</option>
                <option value="M1">Mission 1</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 2: Codification -->
        <div class="form-section">
          <h2>Codification des Opérateurs</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.demandeSoumise">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Demande soumise</span>
              </label>
            </div>
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.traiteeDR">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Traitée DR</span>
              </label>
            </div>
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.valideeSTPT">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Validée STPT</span>
              </label>
            </div>
          </div>
          <div class="form-group mt-2">
            <label>Observation codification</label>
            <textarea v-model="form.observationCodification" class="form-textarea" rows="3"></textarea>
          </div>
        </div>

        <!-- Section 3: Personnel -->
        <div class="form-section">
          <h2>Codification du Personnel et leurs installations</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Nombre délégués SYDORE</label>
              <input type="number" v-model="form.nbDeleguesSydore" class="form-input" />
            </div>
            <div class="form-group">
              <label>Nombre délégués SETBC</label>
              <input type="number" v-model="form.nbDeleguesSetbc" class="form-input" />
            </div>
            <div class="form-group">
              <label>Nombre cartes éditées</label>
              <input type="number" v-model="form.nbCartesEditees" class="form-input" />
            </div>
            <div class="form-group">
              <label>Nombre magasins géolocalisés</label>
              <input type="number" v-model="form.nbMagasinsGeolocalises" class="form-input" />
            </div>
          </div>
          <div class="form-group mt-2">
            <label>Observation personnel</label>
            <textarea v-model="form.observationPersonnel" class="form-textarea" rows="3"></textarea>
          </div>
        </div>

        <!-- Section 4: Enrôlement KYC -->
        <div class="form-section">
          <h2>Enrôlement des Opérateurs codifiés dans le SNT</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.kycSoumis">
                <span class="toggle-switch"></span>
                <span class="toggle-label">KYC soumis</span>
              </label>
            </div>
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.kycValide">
                <span class="toggle-switch"></span>
                <span class="toggle-label">KYC validé</span>
              </label>
            </div>
            <div class="form-group">
              <label class="form-toggle">
                <input type="checkbox" v-model="form.operateurFormeDeploye">
                <span class="toggle-switch"></span>
                <span class="toggle-label">Opérateur formé & déployé</span>
              </label>
            </div>
          </div>
          <div v-if="!form.kycValide" class="form-group mt-2">
            <label>Motif non-conformité</label>
            <input type="text" v-model="form.motifNonConformite" class="form-input" />
          </div>
          <select v-model="form.motifNonConformite" class="form-select">
                <option value="">Sélectionner un motif</option>
                <option value="MOT1">Dfe incomplet ou illisible</option>
                <option value="MOT2">Registre de commerce incomplet ou illisible</option>
                <option value="MOT3">Photo pca illisible ou absente</option>
                <option value="MOT4">Numéros de téléphone existant dans le système</option>
                <option value="MOT5">E-mail existant dans le système</option>
                <option value="MOT6">Nom pca différent sur la dfe</option>
                <option value="MOT7">Nom pca inexistant sur le registre de commerce</option>
              </select>
          <div class="form-group mt-2">
            <label>Observation enrôlement</label>
            <textarea v-model="form.observationEnrolement" class="form-textarea" rows="3"></textarea>
          </div>
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
import { reactive } from 'vue';

const form = reactive({
  operateur: '',
  mission: '',
  demandeSoumise: false,
  traiteeDR: false,
  valideeSTPT: false,
  observationCodification: '',
  nbDeleguesSydore: 0,
  nbDeleguesSetbc: 0,
  nbCartesEditees: 0,
  nbMagasinsGeolocalises: 0,
  observationPersonnel: '',
  kycSoumis: false,
  kycValide: true,
  motifNonConformite: '',
  operateurFormeDeploye: false,
  observationEnrolement: ''
});

const save = () => {
  console.log('Saving form', form);
};

const cancel = () => {
  console.log('Cancelled');
};
</script>
