<template>
  <div class="dashboard">
    <div class="welcome">
      <h1>Tableau de bord</h1>
      <p>Bienvenue sur l'application my-agri-pwa.</p>
    </div>
    <div class="stat-grid">
      <router-link to="/recensement" class="stat-card">
        <span class="material-icons-outlined">people</span>
        <h3>Recensement</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/litige" class="stat-card">
        <span class="material-icons-outlined">gavel</span>
        <h3>Litiges</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/codification" class="stat-card">
        <span class="material-icons-outlined">qr_code</span>
        <h3>Codification</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/commercialisation" class="stat-card">
        <span class="material-icons-outlined">store</span>
        <h3>Commercialisation</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/utilisation" class="stat-card">
        <span class="material-icons-outlined">person_pin</span>
        <h3>Utilisation</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/distribution" class="stat-card">
        <span class="material-icons-outlined">credit_card</span>
        <h3>Distribution</h3>
        <div class="count">--</div>
      </router-link>
      <router-link to="/outils" class="stat-card">
        <span class="material-icons-outlined">build</span>
        <h3>Outils</h3>
        <div class="count">--</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard { padding: 1rem; }
.welcome { margin-bottom: 2rem; }
.welcome h1 { font-size: 1.5rem; font-weight: 700; color: var(--color-text); }
.welcome p { color: var(--color-text-secondary); margin-top: 0.25rem; }
.stat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; }
.stat-card {
  background: var(--color-surface);
  border-radius: 12px;
  padding: 1.25rem;
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.stat-card .material-icons-outlined { font-size: 2rem; color: var(--color-primary); }
.stat-card h3 { font-size: 0.85rem; font-weight: 500; margin-top: 0.75rem; }
.stat-card .count { font-size: 1.5rem; font-weight: 700; color: var(--color-primary); margin-top: 0.25rem; }
</style>
