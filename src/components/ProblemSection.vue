<script setup>
import { useViewport } from '../lib/useViewport'

const { el: sectionEl, visible } = useViewport()

const painPoints = [
  {
    icon: 'forum',
    title: 'Todo pasa por WhatsApp',
    description: 'Consultas, pedidos, turnos y seguimiento mezclados en un chat saturado donde se pierden ventas.'
  },
  {
    icon: 'table_view',
    title: 'Varias planillas para controlar todo',
    description: 'Stock, clientes, ventas y administración desparramados en archivos sueltos y desactualizados.'
  },
  {
    icon: 'autorenew',
    title: 'Tareas repetitivas todos los días',
    description: 'Copiar y pegar datos, responder siempre los mismos mensajes y cargar información a mano.'
  },
  {
    icon: 'warning_amber',
    title: 'Cuando crece el negocio, todo se complica',
    description: 'Más clientes terminan generando más desorden, demoras en la atención y horas extras de trabajo.'
  }
]
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-16 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="problema">
    <div class="reveal" :class="{ 'is-visible': visible }">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-4 font-bold">
          <span class="material-symbols-outlined text-[16px]">help_outline</span>
          ¿Te pasa esto?
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-3">
          ¿Tu negocio todavía funciona así?
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          La mayoría de los negocios empiezan así, pero sostenerlo manualmente tiene un techo muy bajo y te quita vida personal.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
        <div
          v-for="(point, i) in painPoints"
          :key="point.title"
          class="p-5 md:p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/40 flex flex-col justify-between hover:border-secondary/30 transition-colors"
          :style="{ '--i': i }"
        >
          <div>
            <div class="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-[22px] md:text-[24px]">{{ point.icon }}</span>
            </div>
            <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-2 leading-snug">
              {{ point.title }}
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {{ point.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="p-5 md:p-7 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 shadow-sm">
        <div class="flex items-center gap-3.5 text-center sm:text-left">
          <div class="w-10 h-10 rounded-full bg-secondary/15 text-secondary hidden sm:flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[22px]">lightbulb</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface">
              Hay una forma mucho mejor de hacerlo.
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Herramientas simples adaptadas exactamente a cómo funciona tu día a día.
            </p>
          </div>
        </div>
        <a
          href="#solucion"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-headline-sm text-body-md px-5 py-2.5 rounded-xl hover:bg-secondary-container transition-all shrink-0 active:scale-[0.98]"
        >
          <span>Conocé cómo lo solucionamos</span>
          <span class="material-symbols-outlined text-[18px]">arrow_downward</span>
        </a>
      </div>
    </div>
  </section>
</template>
