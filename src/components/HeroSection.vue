<script setup>
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'
</script>

<template>
  <section class="relative w-full pt-12 pb-12 md:pt-20 md:pb-20 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto overflow-hidden" id="general">
    <div class="flex flex-col items-center text-center max-w-3xl mx-auto hero-stagger">
      <h1 class="font-display-hero text-headline-lg-mobile md:text-display-hero font-extrabold tracking-tight text-on-surface leading-[1.15] mb-4 md:mb-6" style="--i: 0">
        ¿Todavía gestionás tu negocio con
        <span class="text-secondary">WhatsApp, planillas y tareas manuales?</span>
      </h1>

      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed" style="--i: 1">
        Diseñamos sistemas a medida para que vendas, administres y atiendas mejor, sin cambiar la forma en que funciona tu negocio.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto mb-10 md:mb-16" style="--i: 2">
        <button
          type="button"
          @click="openLeadModal('', '')"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:text-on-secondary-container cta-glow active:scale-[0.98] cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
          <span>Quiero mejorar mi negocio</span>
        </button>
        <a
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container text-on-surface hover:text-secondary font-headline-sm text-headline-sm px-6 md:px-7 py-3.5 md:py-4 rounded-xl transition-all hover:bg-surface-container-high active:scale-[0.98]"
          href="#problema"
        >
          <span>¿Te pasa esto?</span>
          <span class="material-symbols-outlined text-[18px] md:text-[20px]">arrow_downward</span>
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full stagger-children">
      <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/50" style="--i: 3">
        <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-[20px] md:text-[22px]">shopping_bag</span>
        </div>
        <div>
          <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-1">Vendé sin fricción</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Ecommerce, cobros online y catálogo sincronizado sin comisiones abusivas.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/50" style="--i: 4">
        <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-[20px] md:text-[22px]">auto_mode</span>
        </div>
        <div>
          <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-1">Ahorrá horas de trabajo</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Facturación rápida, avisos de stock y confirmaciones automáticas de turnos.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/50" style="--i: 5">
        <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-[20px] md:text-[22px]">analytics</span>
        </div>
        <div>
          <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-1">Controlá tu negocio</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Métricas de ganancia en vivo, caja y clientes en una sola pantalla.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
