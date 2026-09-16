import { ref } from 'vue'

export const isLeadModalOpen = ref(false)
export const initialRubro = ref('')
export const initialGoal = ref('')
export const initialChannel = ref('whatsapp')

export function openLeadModal(rubro = '', goal = '', channel = 'whatsapp') {
  initialRubro.value = rubro
  initialGoal.value = goal
  initialChannel.value = channel
  isLeadModalOpen.value = true
}

export function closeLeadModal() {
  isLeadModalOpen.value = false
}
