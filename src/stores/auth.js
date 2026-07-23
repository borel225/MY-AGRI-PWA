import { defineStore } from 'pinia'

/**
 * Store pour l'authentification et les infos utilisateur.
 * Gère le JWT, le rôle, et les permissions (RBAC).
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  getters: {
    // Rôle de l'utilisateur connecté
    userRole: (state) => state.user?.role || null,
    
    // DR de l'utilisateur (pour le scope RBAC)
    userDrId: (state) => state.user?.dr_id || null,
    
    // Nom complet
    fullName: (state) => state.user ? `${state.user.prenom} ${state.user.nom}` : ''
  },

  actions: {
    /**
     * Connexion utilisateur
     * TODO: Connecter à l'API backend
     */
    async login(credentials) {
      try {
        // TODO: Remplacer par un appel API réel
        // const response = await api.post('/auth/login', credentials)
        // this.token = response.data.token
        // this.user = response.data.user
        this.user = {
          id: 1,
          nom: 'Demo',
          prenom: 'Utilisateur',
          role: 'coordonnateur',
          dr_id: 1
        }
        this.token = 'demo-token'
        this.isAuthenticated = true
      } catch (err) {
        this.isAuthenticated = false
        throw err
      }
    },

    /**
     * Déconnexion
     */
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
    }
  }
})
