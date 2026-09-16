<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { isLeadModalOpen, initialRubro, initialGoal, initialChannel, closeLeadModal } from '../lib/modalState'
import { waWith, WA_BASE, EMAIL_CONTACT, mailtoWith, gmailWith } from '../lib/links'
import { buildWhatsAppMessage, buildEmailSubject } from '../lib/messageBuilder'
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
const selectedChannel = ref('whatsapp') // 'whatsapp' | 'email'
const copied = ref(false)
let copiedTimer = null

watch(isLeadModalOpen, (open) => {
  if (open) {
    selectedRubro.value = initialRubro.value || ''
    selectedGoal.value = initialGoal.value || ''
    selectedChannel.value = initialChannel.value || 'whatsapp'
    copied.value = false
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

const emailSubject = computed(() => {
  return buildEmailSubject(selectedRubro.value, selectedGoal.value)
})

const finalWaUrl = computed(() => {
  return waWith(currentMessage.value)
})

const finalMailtoUrl = computed(() => {
  return mailtoWith(emailSubject.value, currentMessage.value)
})

const finalGmailUrl = computed(() => {
  return gmailWith(emailSubject.value, currentMessage.value)
})

async function copyEmailData() {
  const textToCopy = `Para: ${EMAIL_CONTACT}\nAsunto: ${emailSubject.value}\n\n${currentMessage.value}`
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(textToCopy)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = textToCopy
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copied.value = true
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => {
      copied.value = false
    }, 3000)
  } catch (err) {
    console.error('Error al copiar:', err)
  }
}

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
  if (copiedTimer) clearTimeout(copiedTimer)
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
            <div class="pr-2">
              <div
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[12px] uppercase tracking-wider mb-2 font-bold transition-colors"
                :class="selectedChannel === 'whatsapp' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'"
              >
                <WhatsAppIcon v-if="selectedChannel === 'whatsapp'" className="w-3.5 h-3.5 fill-current" />
                <span v-else class="material-symbols-outlined text-[14px]">mail</span>
                <span>{{ selectedChannel === 'whatsapp' ? 'WhatsApp · Diagnóstico Rápido' : 'Email · Diagnóstico Rápido' }}</span>
              </div>
              <h3 class="font-headline-md text-headline-sm md:text-headline-md font-bold text-on-surface leading-snug">
                Hablemos de tu negocio
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {{ selectedChannel === 'whatsapp'
                  ? 'Elegí tus opciones para que en WhatsApp sepamos exactamente qué necesitás y vayamos al grano.'
                  : 'Elegí tus opciones para armar tu consulta por email con todos los detalles listos.'
                }}
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

          <!-- Channel Selector Tabs -->
          <div class="px-6 py-2.5 bg-surface-container-lowest border-b border-outline-variant/20">
            <div class="flex items-center p-1 bg-surface-container rounded-xl">
              <button
                type="button"
                @click="selectedChannel = 'whatsapp'"
                class="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer"
                :class="selectedChannel === 'whatsapp' ? 'bg-surface text-secondary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Por WhatsApp</span>
              </button>
              <button
                type="button"
                @click="selectedChannel = 'email'"
                class="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer"
                :class="selectedChannel === 'email' ? 'bg-surface text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'"
              >
                <span class="material-symbols-outlined text-[18px]">mail</span>
                <span>Por Email</span>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-6 overflow-y-auto space-y-6">
            <!-- Step 1 -->
            <div>
              <label class="block font-headline-sm text-body-md font-bold text-on-surface mb-2.5 flex items-center gap-2">
                <span
                  class="w-5 h-5 rounded-full text-on-secondary font-label-sm text-[12px] flex items-center justify-center font-bold transition-colors"
                  :class="selectedChannel === 'whatsapp' ? 'bg-secondary' : 'bg-primary'"
                >1</span>
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
                      ? selectedChannel === 'whatsapp'
                        ? 'border-secondary bg-secondary/10 text-on-surface font-semibold shadow-xs ring-1 ring-secondary'
                        : 'border-primary bg-primary/10 text-on-surface font-semibold shadow-xs ring-1 ring-primary'
                      : 'border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant hover:border-secondary/40 hover:text-on-surface'
                  "
                >
                  <span
                    class="material-symbols-outlined text-[18px]"
                    :class="selectedRubro === rubro.id ? (selectedChannel === 'whatsapp' ? 'text-secondary' : 'text-primary') : 'text-on-surface-variant'"
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
                <span
                  class="w-5 h-5 rounded-full text-on-secondary font-label-sm text-[12px] flex items-center justify-center font-bold transition-colors"
                  :class="selectedChannel === 'whatsapp' ? 'bg-secondary' : 'bg-primary'"
                >2</span>
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
                      ? selectedChannel === 'whatsapp'
                        ? 'border-secondary bg-secondary/10 text-on-surface font-semibold shadow-xs ring-1 ring-secondary'
                        : 'border-primary bg-primary/10 text-on-surface font-semibold shadow-xs ring-1 ring-primary'
                      : 'border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant hover:border-secondary/40 hover:text-on-surface'
                  "
                >
                  <span
                    class="material-symbols-outlined text-[18px]"
                    :class="selectedGoal === goal.id ? (selectedChannel === 'whatsapp' ? 'text-secondary' : 'text-primary') : 'text-on-surface-variant'"
                  >
                    {{ goal.icon }}
                  </span>
                  <span class="truncate">{{ goal.label }}</span>
                </button>
              </div>
            </div>

            <!-- Preview chip WhatsApp -->
            <div
              v-if="(selectedRubro || selectedGoal) && selectedChannel === 'whatsapp'"
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

            <!-- Preview chip Email -->
            <div
              v-if="selectedChannel === 'email'"
              class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant flex flex-col gap-2"
            >
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">mail</span>
                <span class="font-semibold text-on-surface">Detalles de la consulta por email:</span>
              </div>
              <div class="space-y-1 text-xs">
                <p><span class="text-on-surface font-medium">Para:</span> {{ EMAIL_CONTACT }}</p>
                <p><span class="text-on-surface font-medium">Asunto:</span> {{ emailSubject }}</p>
              </div>
              <div class="pt-1 border-t border-outline-variant/30">
                <p class="italic text-on-surface-variant leading-relaxed">
                  "{{ currentMessage }}"
                </p>
              </div>
            </div>
          </div>

          <!-- Modal Footer for WhatsApp -->
          <div
            v-if="selectedChannel === 'whatsapp'"
            class="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col gap-2.5"
          >
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
                O escribir directamente por WhatsApp sin completar
              </a>
            </div>
          </div>

          <!-- Modal Footer for Email -->
          <div
            v-else
            class="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col gap-2.5"
          >
            <div class="flex flex-col sm:flex-row gap-2">
              <a
                :href="finalMailtoUrl"
                @click="closeLeadModal"
                class="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-headline-sm text-headline-sm py-3 px-4 rounded-xl shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-[0.98] text-center"
              >
                <span class="material-symbols-outlined text-[20px]">mail</span>
                <span>Abrir en mi correo</span>
              </a>
              <a
                :href="finalGmailUrl"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeLeadModal"
                class="flex-1 inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm py-3 px-4 rounded-xl border border-outline-variant/60 transition-all active:scale-[0.98] text-center"
              >
                <span class="material-symbols-outlined text-[20px]">open_in_new</span>
                <span>Abrir en Gmail web</span>
              </a>
            </div>

            <button
              type="button"
              @click="copyEmailData"
              class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/40"
            >
              <span class="material-symbols-outlined text-[16px]" :class="copied ? 'text-primary' : ''">
                {{ copied ? 'check_circle' : 'content_copy' }}
              </span>
              <span>{{ copied ? '¡Copiado al portapapeles con éxito!' : 'Copiar dirección y mensaje completo' }}</span>
            </button>

            <div class="flex items-center justify-center">
              <a
                :href="`mailto:${EMAIL_CONTACT}`"
                @click="closeLeadModal"
                class="text-xs text-on-surface-variant hover:text-primary underline transition-colors"
              >
                O escribir directamente a {{ EMAIL_CONTACT }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

