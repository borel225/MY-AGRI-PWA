import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded views
const Dashboard = () => import('../views/Dashboard.vue')
const Recensement = () => import('../views/Recensement.vue')
const GestionLitige = () => import('../views/GestionLitige.vue')
const SuiviCodification = () => import('../views/SuiviCodification.vue')
const SuiviCommercialisation = () => import('../views/SuiviCommercialisation.vue')
const UtilisationProducteur = () => import('../views/UtilisationProducteur.vue')
const DistributionCarte = () => import('../views/DistributionCarte.vue')
const GestionOutils = () => import('../views/GestionOutils.vue')

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: 'Tableau de Bord', icon: 'dashboard' }
  },
  {
    path: '/recensement',
    name: 'recensement',
    component: Recensement,
    meta: { title: 'Recensement', icon: 'people' }
  },
  {
    path: '/litige',
    name: 'litige',
    component: GestionLitige,
    meta: { title: 'Gestion Litiges', icon: 'gavel' }
  },
  {
    path: '/codification',
    name: 'codification',
    component: SuiviCodification,
    meta: { title: 'Suivi Codification', icon: 'qr_code' }
  },
  {
    path: '/commercialisation',
    name: 'commercialisation',
    component: SuiviCommercialisation,
    meta: { title: 'Suivi Commercialisation', icon: 'store' }
  },
  {
    path: '/utilisation',
    name: 'utilisation',
    component: UtilisationProducteur,
    meta: { title: 'Utilisation Producteur', icon: 'person_pin' }
  },
  {
    path: '/distribution',
    name: 'distribution',
    component: DistributionCarte,
    meta: { title: 'Distribution Carte', icon: 'credit_card' }
  },
  {
    path: '/outils',
    name: 'outils',
    component: GestionOutils,
    meta: { title: 'Gestion Outils', icon: 'build' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Met à jour le titre de la page
router.beforeEach((to) => {
  document.title = `${to.meta.title || 'AgriPWA'} - AgriPWA`
})

export default router
