<script setup>
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import profesionalesImg from '../assets/profesionales.jpg'

const { el: sectionEl, visible } = useViewport()

const capabilities = [
  {
    icon: 'event_available',
    title: 'Agenda de turnos online 24/7',
    text: 'Tus clientes eligen día y hora por su cuenta sin interrumpirte mientras atendés o descansás.'
  },
  {
    icon: 'mark_email_read',
    title: 'Confirmaciones y recordatorios por email',
    text: 'Avisos automáticos de confirmación y recordatorio previo al turno directo a la bandeja de entrada.'
  },
  {
    icon: 'folder_shared',
    title: 'Tené toda la información de tus clientes en un solo lugar',
    text: 'Fichas completas, notas previas, historial de tratamientos y archivos siempre a mano.'
  },
  {
    icon: 'payments',
    title: 'Cobrá señas previas para asegurar cada turno',
    text: 'Evitá que te dejen plantado cobrando una seña anticipada con Mercado Pago o transferencia.'
  },
  {
    icon: 'group',
    title: 'Panel organizado por profesional',
    text: 'Agendas independientes por especialista, cálculo automático de comisiones y métricas de atención.'
  }
]

const audiences = ['Veterinarias', 'Odontólogos', 'Consultorios', 'Salones', 'Gimnasios', 'Servicios Técnicos']
</script>

<template>
  <section ref="sectionEl" class="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="profesionales">
    <div class="reveal bg-surface-container-lowest rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-outline-variant/30 relative overflow-hidden" :class="{ 'is-visible': visible }">
      <div class="flex flex-col items-center text-center gap-5 mb-10 md:mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
          <span class="material-symbols-outlined text-[16px]">calendar_month</span>
          Para Profesionales y Servicios
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight max-w-2xl">
          Dejá de perder turnos por WhatsApp y planillas.
        </h2>
        <div class="flex flex-wrap justify-center gap-2 max-w-xl">
          <span v-for="aud in audiences" :key="aud" class="font-label-sm text-label-sm bg-surface-container px-3 py-1 rounded-full text-on-surface-variant font-medium">
            {{ aud }}
          </span>
        </div>
        <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
          Perder turnos por olvidos y responder consultas a deshora te quita horas productivas. Diseñemos una plataforma que gestione tus turnos y clientes en piloto automático.
        </p>
        <button
          type="button"
          @click="openLeadModal('profesional', 'turnos')"
          class="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:shadow-[0_6px_20px_rgba(193,120,73,0.35)] cta-glow active:scale-[0.97] transition-all min-h-[48px] cursor-pointer"
        >
          <span class="material-symbols-outlined text-[20px]">chat</span>
          <span>Quiero organizar mis turnos</span>
        </button>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-on-surface-variant font-medium">
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-primary text-[16px]">verified_user</span> Sin compromiso</span>
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-primary text-[16px]">bolt</span> Enfoque práctico</span>
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-primary text-[16px]">schedule</span> Respuesta rápida</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div class="flex flex-col gap-3 stagger-children">
          <div v-for="(cap, i) in capabilities" :key="cap.title" class="p-4 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-3.5 border border-outline-variant/20 hover:border-primary/30 transition-colors" :style="{ '--i': i }">
            <div class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
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
            <img :src="profesionalesImg" alt="Gestión de turnos y clientes profesional" class="w-full max-w-[512px] h-auto object-cover rounded-xl mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
