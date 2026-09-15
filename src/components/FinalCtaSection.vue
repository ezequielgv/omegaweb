<script setup>
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import { EMAIL_CONTACT } from '../lib/links'
import WhatsAppIcon from './WhatsAppIcon.vue'
import logoNegro from '../assets/logo_negro.png'

const { el: sectionEl, visible } = useViewport()
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto mb-10 md:mb-16" id="contacto">
    <div class="reveal bg-surface-container-low rounded-3xl p-6 md:p-8 lg:p-16 shadow-lg text-center relative overflow-hidden border border-outline-variant/30" :class="{ 'is-visible': visible }">
      <div class="max-w-3xl mx-auto relative z-10">
        <div class="flex items-center justify-center mb-6">
          <img :src="logoNegro" alt="OmegaWeb" class="h-16 w-auto object-contain" />
          <span class="font-label-sm text-2xl font-semibold py-1">| OmegaWeb</span>
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-4 md:mb-6">
          ¿Tenés un problema que todavía resolvés a mano?
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Contanos cómo trabajás actualmente y vemos cómo convertirlo en una herramienta digital que te ahorre tiempo y dinero todos los días.
        </p>

        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              @click="openLeadModal('', '')"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 md:px-10 py-3.5 md:py-4 rounded-xl shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container cta-glow active:scale-[0.98] cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span>Quiero mejorar mi negocio</span>
            </button>
            <a
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm px-6 py-3.5 md:py-4 rounded-xl border border-outline-variant/60 transition-colors"
              :href="`mailto:${EMAIL_CONTACT}`"
            >
              <span class="material-symbols-outlined text-[20px]">mail</span>
              <span>Escribir por Email</span>
            </a>
          </div>

          <div class="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 md:mt-6 font-headline-sm text-[14px] md:text-[15px] text-on-surface-variant">
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-secondary text-[16px] md:text-[18px]">verified_user</span>
              <span>Respondemos directo del equipo</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-secondary text-[16px] md:text-[18px]">lock</span>
              <span>Sin compromiso comercial</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-secondary text-[16px] md:text-[18px]">bolt</span>
              <span>Enfoque 100% práctico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
