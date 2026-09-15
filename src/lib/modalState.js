import { ref } from 'vue'

export const isLeadModalOpen = ref(false)
export const initialRubro = ref('')
export const initialGoal = ref('')

export function openLeadModal(rubro = '', goal = '') {
  initialRubro.value = rubro
  initialGoal.value = goal
  isLeadModalOpen.value = true
}

export function closeLeadModal() {
  isLeadModalOpen.value = false
}
