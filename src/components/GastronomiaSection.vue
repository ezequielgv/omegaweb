<script setup>
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import gastronomiaImg from '../assets/gastronomia.jpg'

const { el: sectionEl, visible } = useViewport()

const capabilities = [
  {
    icon: 'qr_code_2',
    title: 'Tomá pedidos sin demoras en hora pico',
    text: 'Menú digital que carga al instante en cualquier celular. Precios actualizados en un segundo sin reimprimir cartas.'
  },
  {
    icon: 'soup_kitchen',
    title: 'Comandero digital directo a cocina',
    text: 'Los pedidos entran ordenados por orden y tiempo en pantalla táctil, sin gritos ni comandas de papel perdidas.'
  },
  {
    icon: 'delivery_dining',
    title: 'Delivery directo sin comisiones abusivas',
    text: 'Tus clientes piden por tu propio canal web sin tener que resignar hasta un 30% a aplicaciones intermediarias.'
  },
  {
    icon: 'receipt_long',
    title: 'Sabé qué platos te dejan más ganancia',
    text: 'Identificá tus platos estrella con mejor margen de rentabilidad para comprar insumos con precisión.'
  }
]
</script>

<template>
  <section ref="sectionEl" class="relative w-full px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="gastronomia">
    <div class="reveal bg-surface-container-lowest rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-outline-variant/30 relative overflow-hidden" :class="{ 'is-visible': visible }">
      <div class="flex flex-col items-center text-center gap-5 mb-10 md:mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm uppercase tracking-wider font-bold">
          <span class="material-symbols-outlined text-[16px]">restaurant</span>
          Para Gastronomía y Alimentos
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight max-w-2xl">
          Tomá pedidos sin perder tiempo ni clientes.
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
          En gastronomía los minutos valen oro. Dejá atrás las cartas en PDF y los mensajes de WhatsApp que nadie llega a responder los viernes a la noche.
        </p>
        <button
          type="button"
          @click="openLeadModal('gastronomia', 'ventas')"
          class="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:shadow-[0_6px_20px_rgba(193,120,73,0.35)] cta-glow active:scale-[0.97] transition-all min-h-[48px] cursor-pointer"
        >
          <span class="material-symbols-outlined text-[20px]">chat</span>
          <span>Quiero mejorar mis pedidos</span>
        </button>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-on-surface-variant font-medium">
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-tertiary text-[16px]">verified_user</span> Sin compromiso</span>
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-tertiary text-[16px]">bolt</span> Enfoque práctico</span>
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-tertiary text-[16px]">schedule</span> Respuesta rápida</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div class="flex flex-col gap-3 stagger-children">
          <div v-for="(cap, i) in capabilities" :key="cap.title" class="p-4 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-3.5 border border-outline-variant/20 hover:border-tertiary/30 transition-colors" :style="{ '--i': i }">
            <div class="w-9 h-9 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">{{ cap.icon }}</span>
            </div>
            <div>
              <h4 class="font-headline-sm text-body-md font-bold text-on-surface">{{ cap.title }}</h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">{{ cap.text }}</p>
            </div>
          </div>
        </div>

        <div class="bg-surface-container rounded-2xl mt-0 lg:mt-6 p-4 shadow-md border border-outline-variant/20">
          <div class="relative w-full min-h-[300px] rounded-xl overflow-hidden content-center">
            <img :src="gastronomiaImg" alt="Gastronomía y alimentos con sistema digital" class="w-full max-w-[512px] h-auto object-cover rounded-xl mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
