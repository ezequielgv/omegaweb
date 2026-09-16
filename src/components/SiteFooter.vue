<script setup>
import { EMAIL_CONTACT } from '../lib/links'
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'
import logoNegro from '../assets/logo_negro.png'

const links = [
  { href: '#general', label: 'Inicio' },
  { href: '#solucion', label: 'Diferencial' },
  { href: '#comercios', label: 'Comercios' },
  { href: '#profesionales', label: 'Profesionales' },
  { href: '#gastronomia', label: 'Gastronomía' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#faq', label: 'Preguntas' }
]
</script>

<template>
  <footer class="w-full bg-surface-container-low border-t border-outline-variant py-10 md:py-16" style="padding-bottom: env(safe-area-inset-bottom)">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
      <div class="flex flex-col items-center md:items-start text-center md:text-left md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 pb-8 md:pb-12 border-b border-outline-variant">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <img :src="logoNegro" alt="OmegaWeb" class="h-7 w-auto object-contain" />
            <span class="font-label-sm text-label-sm text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-bold">
              Desarrollo a Medida
            </span>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Desarrollamos software y soluciones a la medida de cómo opera tu negocio. Sin enlatados, sin intermediarios.
          </p>
        </div>
        <div class="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          <a
            v-for="link in links"
            :key="link.href"
            class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors min-h-11 inline-flex items-center px-2 py-2 rounded-lg"
            :href="link.href"
          >
            {{ link.label }}
          </a>
          <button
            type="button"
            @click="openLeadModal('', '', 'email')"
            class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5 min-h-11 px-2 py-2 rounded-lg cursor-pointer"
          >
            <span class="material-symbols-outlined text-[16px]">mail</span>
            {{ EMAIL_CONTACT }}
          </button>
          <button
            type="button"
            @click="openLeadModal('', '')"
            class="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors flex items-center gap-1.5 min-h-11 px-2 py-2 rounded-lg cursor-pointer font-bold"
          >
            <WhatsAppIcon className="w-4 h-4 fill-secondary" />
            WhatsApp Directo
          </button>
        </div>
      </div>
      <div class="pt-6 md:pt-8 md:pb-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
          © OmegaWeb · Desarrollo de Software &amp; Soluciones Digitales a medida. Argentina.
        </p>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse animate-float"></span>
          <span class="font-body-sm text-body-sm text-on-surface-variant">Sistemas operativos</span>
        </div>
      </div>
    </div>
  </footer>
</template>
