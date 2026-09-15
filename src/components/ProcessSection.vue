<script setup>
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { el: sectionEl, visible } = useViewport()

const steps = [
  {
    number: '01',
    icon: 'chat',
    title: 'Nos contás cómo trabajás',
    subtitle: 'WhatsApp, llamada o formulario. Sin compromiso.',
    text: 'Hablamos unos minutos sobre cómo opera tu negocio hoy: qué tareas hacés a mano, dónde sentís que se pierde tiempo o dinero y qué te gustaría simplificar.',
    footer: 'Diagnóstico sin cargo'
  },
  {
    number: '02',
    icon: 'manage_search',
    title: 'Detectamos qué se puede mejorar',
    subtitle: 'Analizamos procesos y oportunidades de automatización.',
    text: 'Revisamos tus rutinas y detectamos exactamente qué tareas repetitivas se pueden automatizar para que vos y tu equipo ahorren horas de trabajo cada semana.',
    footer: 'Oportunidades concretas'
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Te proponemos una solución',
    subtitle: 'Definimos alcance, inversión y próximos pasos.',
    text: 'Te presentamos una propuesta clara: cómo funcionará el sistema, qué pantallas tendrá, cuánto tardamos y un presupuesto cerrado sin sorpresas.',
    footer: 'Alcance y precio definido'
  }
]
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="proceso">
    <div class="reveal flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-16" :class="{ 'is-visible': visible }">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-4 font-bold">
        <span class="material-symbols-outlined text-[16px]">timeline</span>
        ¿Qué pasa después de hacer clic?
      </div>
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-4">
        De tu problema a tu sistema en 3 pasos
      </h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Una barrera muy baja para empezar. Sin vueltas teóricas ni compromisos previos: solo una charla práctica.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 stagger-children mb-10">
      <div
        v-for="(step, i) in steps"
        :key="step.number"
        class="p-6 md:p-8 rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between relative overflow-hidden"
        :style="{ '--i': i }"
      >
        <div class="font-display-hero text-headline-lg md:text-display-hero font-extrabold text-outline-variant/20 absolute top-4 right-6 pointer-events-none select-none">
          {{ step.number }}
        </div>
        <div>
          <div class="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 md:mb-5">
            <span class="material-symbols-outlined text-[22px] md:text-[26px]">{{ step.icon }}</span>
          </div>
          <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-1.5 leading-snug">
            {{ step.title }}
          </h3>
          <p class="font-body-sm text-xs md:text-sm font-semibold text-secondary mb-3">
            {{ step.subtitle }}
          </p>
          <p class="font-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
            {{ step.text }}
          </p>
        </div>
        <div class="mt-6 md:mt-8 pt-4 border-t border-outline-variant/30 font-headline-sm text-[13px] md:text-[14px] text-secondary flex items-center gap-1.5 font-bold">
          <span class="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span>
          {{ step.footer }}
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        type="button"
        @click="openLeadModal('', '')"
        class="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container transition-all cta-glow active:scale-[0.98] cursor-pointer"
      >
        <WhatsAppIcon className="w-5 h-5 fill-current" />
        <span>Dar el primer paso por WhatsApp</span>
      </button>
    </div>
  </section>
</template>
