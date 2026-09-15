<script setup>
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'

const { el: sectionEl, visible } = useViewport()

const pillars = [
  {
    step: '01',
    icon: 'search_insights',
    title: 'Analizamos',
    subtitle: 'Entendemos cómo trabajás actualmente.',
    desc: 'Escuchamos cómo opera tu negocio hoy, dónde perdés tiempo en planillas o chats, y qué cuellos de botella frenan tus ventas.'
  },
  {
    step: '02',
    icon: 'architecture',
    title: 'Diseñamos',
    subtitle: 'Proponemos una solución concreta.',
    desc: 'Definimos pantallas intuitivas, flujos simples y una propuesta transparente con presupuesto y tiempos claros desde el primer día.'
  },
  {
    step: '03',
    icon: 'code_blocks',
    title: 'Desarrollamos',
    subtitle: 'Construimos y acompañamos la implementación.',
    desc: 'Ponemos en marcha la herramienta, la conectamos con lo que ya usás y capacitamos a tu equipo para que empiece a funcionar de inmediato.'
  }
]
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-18 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="solucion">
    <div class="reveal" :class="{ 'is-visible': visible }">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-4 font-bold">
          <span class="material-symbols-outlined text-[16px]">verified</span>
          Podemos solucionarlo · No vendemos paquetes
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight leading-snug mb-4">
          No necesitás adaptar tu negocio a un software.<br class="hidden sm:inline" />
          <span class="text-secondary">Adaptamos el sistema a tu negocio.</span>
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Cada comercio y profesional funciona distinto. Por eso no instalamos sistemas enlatados ni programas rígidos: creamos herramientas pensadas exclusivamente para tus procesos reales.
        </p>
      </div>

      <!-- 3 Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-12 stagger-children">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          class="relative p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-secondary/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
          :style="{ '--i': i }"
        >
          <div class="font-display-hero text-headline-lg font-extrabold text-outline-variant/20 absolute top-4 right-6 pointer-events-none select-none">
            {{ pillar.step }}
          </div>
          <div>
            <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
              <span class="material-symbols-outlined text-[26px]">{{ pillar.icon }}</span>
            </div>
            <h3 class="font-headline-md text-headline-sm md:text-headline-md font-bold text-on-surface mb-2">
              {{ pillar.title }}
            </h3>
            <p class="font-body-md text-body-md font-semibold text-secondary mb-2.5">
              {{ pillar.subtitle }}
            </p>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {{ pillar.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Comparison Callout -->
      <div class="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
          <div class="w-12 h-12 rounded-2xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[26px]">handshake</span>
          </div>
          <div>
            <h4 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface">
              Sin licencias caras ni funciones que nunca vas a tocar
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Desarrollo directo, soporte personalizado y una herramienta que responde 100% a tu rutina.
            </p>
          </div>
        </div>

        <button
          type="button"
          @click="openLeadModal('', '')"
          class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-6 py-3.5 rounded-xl shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container transition-all shrink-0 active:scale-[0.98] cursor-pointer"
        >
          <span class="material-symbols-outlined text-[20px]">chat</span>
          <span>Consultar por mi caso</span>
        </button>
      </div>
    </div>
  </section>
</template>
