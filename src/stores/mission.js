import { defineStore } from 'pinia'

/**
 * Store principal pour la gestion des missions.
 * Une mission = un déplacement terrain lié à une localité.
 */
export const useMissionStore = defineStore('mission', {
  state: () => ({
    missions: [],
    currentMission: null,
    loading: false,
    error: null
  }),

  getters: {
    // Missions en cours (non clôturées)
    activeMissions: (state) => state.missions.filter(m => m.statut === 'EN_COURS'),
    
    // Nombre total de missions
    totalMissions: (state) => state.missions.length,
    
    // Mission courante sélectionnée
    selected: (state) => state.currentMission
  },

  actions: {
    /**
     * Charge la liste des missions depuis l'API.
     * TODO: Connecter à l'API backend
     */
    async fetchMissions() {
      this.loading = true
      this.error = null
      try {
        // TODO: Remplacer par un appel API réel
        // const response = await api.get('/missions')
        // this.missions = response.data
        this.missions = []
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    /**
     * Sélectionne une mission comme mission courante
     */
    selectMission(mission) {
      this.currentMission = mission
    },

    /**
     * Crée une nouvelle mission
     * TODO: Connecter à l'API backend
     */
    async createMission(missionData) {
      this.loading = true
      try {
        // TODO: Remplacer par un appel API réel
        // const response = await api.post('/missions', missionData)
        const newMission = { id: Date.now(), ...missionData, statut: 'EN_COURS' }
        this.missions.push(newMission)
        return newMission
      } catch (err) {
        this.error = err.message
        throw err
      } finally {
        this.loading = false
      }
    }
  }
})
