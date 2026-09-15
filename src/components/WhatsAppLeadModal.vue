<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { isLeadModalOpen, initialRubro, initialGoal, closeLeadModal } from '../lib/modalState'
import { waWith, WA_BASE } from '../lib/links'
import { buildWhatsAppMessage } from '../lib/messageBuilder'
import WhatsAppIcon from './WhatsAppIcon.vue'

const rubros = [
  { id: 'comercio', label: 'Comercio / Local', icon: 'storefront' },
  { id: 'profesional', label: 'Profesional / Servicios', icon: 'calendar_month' },
  { id: 'gastronomia', label: 'Gastronomía', icon: 'restaurant' },
  { id: 'otro', label: 'Otro rubro', icon: 'business' }
]

const goals = [
  { id: 'ventas', label: 'Ventas y cobros', icon: 'trending_up' },
  { id: 'gestion', label: 'Gestión y orden interno', icon: 'folder_open' },
  { id: 'whatsapp', label: 'WhatsApp saturado', icon: 'forum' },
  { id: 'turnos', label: 'Turnos y agenda', icon: 'event_available' },
  { id: 'stock', label: 'Stock y reposición', icon: 'inventory_2' },
  { id: 'otro', label: 'Otro objetivo', icon: 'more_horiz' }
]

const selectedRubro = ref('')
const selectedGoal = ref('')

watch(isLeadModalOpen, (open) => {
  if (open) {
    selectedRubro.value = initialRubro.value || ''
    selectedGoal.value = initialGoal.value || ''
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function selectRubro(id) {
  selectedRubro.value = id
}

function selectGoal(id) {
  selectedGoal.value = id
}

const currentMessage = computed(() => {
  return buildWhatsAppMessage(selectedRubro.value, selectedGoal.value)
})

const finalWaUrl = computed(() => {
  return waWith(currentMessage.value)
})

function onKeydown(e) {
  if (e.key === 'Escape' && isLeadModalOpen.value) {
    closeLeadModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLeadModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-on-surface/40 backdrop-blur-sm"
        @click.self="closeLeadModal"
        aria-modal="true"
        role="dialog"
      >
        <div
          class="w-full max-w-lg bg-surface rounded-3xl shadow-2xl border border-outline-variant/60 overflow-hidden flex flex-col max-h-[90vh] animate-in"
        >
          <!-- Modal Header -->
          <div class="px-6 pt-6 pb-4 border-b border-outline-variant/30 flex items-start justify-between bg-surface-container-lowest">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-[12px] uppercase tracking-wider mb-2 font-bold">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                Diagnóstico Rápido
              </div>
              <h3 class="font-headline-md text-headline-sm md:text-headline-md font-bold text-on-surface leading-snug">
                Hablemos de tu negocio
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Elegí tus opciones para que en WhatsApp sepamos exactamente qué necesitás y vayamos al grano.
              </p>
            </div>
            <button
              class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0 -mr-1 -mt-1 cursor-pointer"
              @click="closeLeadModal"
              aria-label="Cerrar modal"
            >
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 overflow-y-auto space-y-6">
            <!-- Step 1 -->
            <div>
              <label class="block font-headline-sm text-body-md font-bold text-on-surface mb-2.5 flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-secondary text-on-secondary font-label-sm text-[12px] flex items-center justify-center font-bold">1</span>
                <span>¿Qué tipo de negocio tenés?</span>
              </label>
              <div class="grid grid-cols-2 gap-2.5">
                <button
                  v-for="rubro in rubros"
                  :key="rubro.id"
                  type="button"
                  @click="selectRubro(rubro.id)"
                  class="flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all text-sm font-medium cursor-pointer"
                  :class="
                    selectedRubro === rubro.id
                      ? 'border-secondary bg-secondary/10 text-on-surface font-semibold shadow-xs ring-1 ring-secondary'
                      : 'border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant hover:border-secondary/40 hover:text-on-surface'
                  "
                >
                  <span
                    class="material-symbols-outlined text-[18px]"
                    :class="selectedRubro === rubro.id ? 'text-secondary' : 'text-on-surface-variant'"
                  >
                    {{ rubro.icon }}
                  </span>
                  <span class="truncate">{{ rubro.label }}</span>
                </button>
              </div>
            </div>

            <!-- Step 2 -->
            <div>
              <label class="block font-headline-sm text-body-md font-bold text-on-surface mb-2.5 flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-secondary text-on-secondary font-label-sm text-[12px] flex items-center justify-center font-bold">2</span>
                <span>¿Qué es lo principal que querés mejorar?</span>
              </label>
              <div class="grid grid-cols-2 gap-2.5">
                <button
                  v-for="goal in goals"
                  :key="goal.id"
                  type="button"
                  @click="selectGoal(goal.id)"
                  class="flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all text-sm font-medium cursor-pointer"
                  :class="
                    selectedGoal === goal.id
                      ? 'border-secondary bg-secondary/10 text-on-surface font-semibold shadow-xs ring-1 ring-secondary'
                      : 'border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant hover:border-secondary/40 hover:text-on-surface'
                  "
                >
                  <span
                    class="material-symbols-outlined text-[18px]"
                    :class="selectedGoal === goal.id ? 'text-secondary' : 'text-on-surface-variant'"
                  >
                    {{ goal.icon }}
                  </span>
                  <span class="truncate">{{ goal.label }}</span>
                </button>
              </div>
            </div>

            <!-- Preview chip with natural Spanish phrasing -->
            <div
              v-if="selectedRubro || selectedGoal"
              class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant flex items-start gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-secondary shrink-0 mt-0.5" />
              <div>
                <p class="font-semibold text-on-surface">Mensaje que enviaremos por WhatsApp:</p>
                <p class="italic text-on-surface-variant mt-1 leading-relaxed">
                  "{{ currentMessage }}"
                </p>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col gap-2.5">
            <a
              :href="finalWaUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeLeadModal"
              class="w-full inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm py-3.5 px-6 rounded-xl shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container transition-all cta-glow active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Hablar con OmegaWeb</span>
            </a>

            <div class="flex items-center justify-center">
              <a
                :href="WA_BASE"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeLeadModal"
                class="text-xs text-on-surface-variant hover:text-secondary underline transition-colors"
              >
                O escribir directamente sin completar
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
