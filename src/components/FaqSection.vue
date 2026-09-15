<script setup>
import { ref } from 'vue'
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { el: sectionEl, visible } = useViewport()

const faqs = [
  {
    question: '¿Cuánto cuesta desarrollar un sistema a medida?',
    answer:
      'Depende exclusivamente de las necesidades de tu negocio. No cobramos licencias infladas ni te obligamos a pagar por módulos que no vas a usar. Primero charlamos para entender tu problema y luego te presentamos una propuesta con inversión cerrada y sin costos sorpresa.'
  },
  {
    question: '¿Tengo que cambiar el sistema que ya uso?',
    answer:
      'No necesariamente. Si ya usás planillas, software contable o WhatsApp, podemos conectar y complementar tus herramientas actuales, o bien reemplazar únicamente la parte que hoy te genera errores manuales y pérdida de tiempo.'
  },
  {
    question: '¿Trabajan con negocios pequeños o independientes?',
    answer:
      'Sí, totalmente. Diseñamos soluciones según la escala real de cada negocio. Muchas veces una automatización puntual en la toma de pedidos, turnos o stock genera un impacto enorme sin requerir una inversión gigantesca.'
  },
  {
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer:
      'Depende del alcance acordado. Luego del análisis inicial establecemos un cronograma transparente con entregas por etapas, de modo que puedas ver avances concretos y empezar a utilizar las primeras funciones en cuestión de semanas.'
  }
]

// Open the first item by default
const openIndex = ref(0)

function toggleFaq(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-12 max-w-4xl mx-auto" id="faq">
    <div class="reveal" :class="{ 'is-visible': visible }">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-10 md:mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-4 font-bold">
          <span class="material-symbols-outlined text-[16px]">quiz</span>
          Preguntas Frecuentes
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-3">
          Respuestas claras a dudas habituales
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Todo lo que necesitás saber antes de dar el paso hacia un sistema que trabaje por vos.
        </p>
      </div>

      <!-- Accordion Items -->
      <div class="flex flex-col gap-3.5">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.question"
          class="rounded-2xl border transition-all overflow-hidden bg-surface-container-lowest"
          :class="openIndex === i ? 'border-secondary/40 shadow-sm' : 'border-outline-variant/40 hover:border-outline-variant'"
        >
          <button
            type="button"
            @click="toggleFaq(i)"
            class="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
            :aria-expanded="openIndex === i"
          >
            <span class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface">
              {{ faq.question }}
            </span>
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
              :class="openIndex === i ? 'bg-secondary text-on-secondary rotate-180' : 'bg-surface-container text-on-surface-variant'"
            >
              <span class="material-symbols-outlined text-[20px]">expand_more</span>
            </div>
          </button>

          <transition
            enter-active-class="transition-all duration-200 ease-out overflow-hidden"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-150 ease-in overflow-hidden"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="openIndex === i" class="px-5 pb-5 md:px-6 md:pb-6 text-on-surface-variant pt-0">
              <div class="pt-2 border-t border-outline-variant/20 font-body-sm md:font-body-md text-body-sm md:text-body-md leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- FAQ CTA Footer -->
      <div class="mt-8 md:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30">
        <span class="font-body-md text-body-md text-on-surface font-medium">¿Tenés alguna otra duda sobre tu caso particular?</span>
        <button
          type="button"
          @click="openLeadModal('', '')"
          class="inline-flex items-center gap-2 text-secondary font-headline-sm text-body-md hover:underline cursor-pointer font-bold"
        >
          <WhatsAppIcon className="w-4 h-4 fill-secondary" />
          <span>Preguntanos por WhatsApp</span>
        </button>
      </div>
    </div>
  </section>
</template>
