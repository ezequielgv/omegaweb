<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useViewport } from '../lib/useViewport'
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'
import comerciosImg from '../assets/comercios.jpg'
import profesionalesImg from '../assets/profesionales.jpg'
import gastronomiaImg from '../assets/gastronomia.jpg'

const { el: sectionEl, visible } = useViewport()

const slides = [
  {
    id: 'comercios',
    rubroId: 'comercio',
    tag: 'Para Comercios y Locales Físicos',
    tagIcon: 'storefront',
    accentColor: 'secondary',
    title: 'Más control. Menos trabajo manual.',
    description:
      'Si tenés un local o distribuidora, sabés lo que cuesta llevar el stock al día y responder pedidos por chat. Creemos un sistema centralizado para tu negocio.',
    ctaText: 'Quiero automatizar mi comercio',
    defaultGoal: 'stock',
    image: comerciosImg,
    imageAlt: 'Comercio con sistema de cobro digital',
    capabilities: [
      {
        icon: 'sync_alt',
        title: 'Vendé online sin descuadrar tu stock',
        text: 'Si se vende en el mostrador o por tu tienda web, el stock se actualiza solo en el acto.'
      },
      {
        icon: 'inventory_2',
        title: 'Sabé qué tenés y qué necesitás reponer',
        text: 'Alertas automáticas antes de que te quedes sin tus productos estrella o con mayor rotación.'
      },
      {
        icon: 'receipt_long',
        title: 'Facturación electrónica ágil con ARCA',
        text: 'Emití comprobantes y tickets fiscales al instante en cada cobro, sin demoras manuales.'
      },
      {
        icon: 'point_of_sale',
        title: 'Cobrá rápido en caja sin demoras',
        text: 'Registro ágil de pagos en efectivo, transferencias o QR para evitar filas y cuellos de botella.'
      },
      {
        icon: 'contacts',
        title: 'Llevá las cuentas de tus clientes al día',
        text: 'Saldos, compras mayoristas y fiados claros en un solo click, sin anotadores ni hojas perdidas.'
      },
      {
        icon: 'query_stats',
        title: 'Mirá tus ganancias reales',
        text: 'Sabé qué productos te dejan mejor margen y cuánto entra realmente a tu caja cada mes.'
      }
    ]
  },
  {
    id: 'profesionales',
    rubroId: 'profesional',
    tag: 'Para Profesionales y Servicios',
    tagIcon: 'calendar_month',
    accentColor: 'primary',
    title: 'Dejá de perder turnos por WhatsApp y planillas.',
    description:
      'Perder turnos por olvidos y responder consultas a deshora te quita horas productivas. Diseñemos una plataforma que gestione tus turnos y clientes en piloto automático.',
    ctaText: 'Quiero organizar mis turnos',
    defaultGoal: 'turnos',
    image: profesionalesImg,
    imageAlt: 'Gestión de turnos y clientes profesional',
    capabilities: [
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
  },
  {
    id: 'gastronomia',
    rubroId: 'gastronomia',
    tag: 'Para Gastronomía y Alimentos',
    tagIcon: 'restaurant',
    accentColor: 'tertiary',
    title: 'Tomá pedidos sin perder tiempo ni clientes.',
    description:
      'En gastronomía los minutos valen oro. Dejá atrás las cartas en PDF y los mensajes de WhatsApp que nadie llega a responder los viernes a la noche.',
    ctaText: 'Quiero mejorar mis pedidos',
    defaultGoal: 'ventas',
    image: gastronomiaImg,
    imageAlt: 'Gastronomía y alimentos con sistema digital',
    capabilities: [
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
      },
      {
        icon: 'table_restaurant',
        title: 'Reservas de mesa sin atender el teléfono',
        text: 'Tus clientes reservan por tu web o WhatsApp y vos ves la ocupación en tiempo real, sin llamadas ni anotadores.'
      }
    ]
  }
]

const currentIndex = ref(0)
const isPaused = ref(false)
let autoplayTimer = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentIndex.value = index
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 8000)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// Touch swipe support
let touchStartX = 0
let touchEndX = 0

function onTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX
  isPaused.value = true
}

function onTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX
  isPaused.value = false
  handleSwipe()
}

function handleSwipe() {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 45) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

// Hash navigation support
function syncWithHash() {
  const hash = window.location.hash.replace('#', '')
  const foundIndex = slides.findIndex((s) => s.id === hash)
  if (foundIndex !== -1) {
    currentIndex.value = foundIndex
  }
}

onMounted(() => {
  syncWithHash()
  window.addEventListener('hashchange', syncWithHash)
  startAutoplay()
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncWithHash)
  stopAutoplay()
})
</script>

<template>
  <section
    ref="sectionEl"
    class="relative w-full py-10 md:py-16 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto"
    id="comercios"
  >
    <!-- Anchor targets for hash links -->
    <span id="profesionales" class="sr-only"></span>
    <span id="gastronomia" class="sr-only"></span>
    <span id="sectores" class="sr-only"></span>

    <div class="reveal" :class="{ 'is-visible': visible }">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-3.5 font-bold">
          <span class="material-symbols-outlined text-[16px]">domain</span>
          Soluciones por Sector
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-3">
          Herramientas pensadas para tu rubro
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Elegí tu sector para ver cómo simplificamos los problemas y tareas manuales de tu día a día.
        </p>

        <!-- Tab Selector Bar -->
        <div class="mt-6 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-surface-container-low border border-outline-variant/40 shadow-xs">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            type="button"
            @click="goToSlide(index)"
            class="flex items-center gap-2 px-4 py-2.5 rounded-xl font-headline-sm text-sm transition-all cursor-pointer"
            :class="
              currentIndex === index
                ? 'bg-surface-container-lowest text-on-surface font-bold shadow-xs ring-1 ring-secondary/30'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60'
            "
          >
            <span
              class="material-symbols-outlined text-[18px]"
              :class="currentIndex === index ? 'text-secondary' : 'text-on-surface-variant'"
            >
              {{ slide.tagIcon }}
            </span>
            <span>{{ slide.id === 'comercios' ? 'Comercios' : slide.id === 'profesionales' ? 'Profesionales' : 'Gastronomía' }}</span>
          </button>
        </div>
      </div>

      <!-- Carousel Frame -->
      <div
        class="relative overflow-hidden rounded-3xl"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <!-- Slides Track -->
        <div
          class="flex items-stretch transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="w-full shrink-0 flex flex-col"
          >
            <div class="flex-1 bg-surface-container-lowest rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-outline-variant/30 relative overflow-hidden">
              <div class="flex flex-col items-center text-center gap-5 mb-10 md:mb-12">
                <div
                  class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold"
                  :class="
                    slide.accentColor === 'secondary'
                      ? 'bg-secondary/10 text-secondary'
                      : slide.accentColor === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-tertiary/10 text-tertiary'
                  "
                >
                  <span class="material-symbols-outlined text-[16px]">{{ slide.tagIcon }}</span>
                  {{ slide.tag }}
                </div>

                <h3 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight max-w-2xl">
                  {{ slide.title }}
                </h3>


                <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
                  {{ slide.description }}
                </p>

                <button
                  type="button"
                  @click="openLeadModal(slide.rubroId, slide.defaultGoal)"
                  class="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:shadow-[0_6px_20px_rgba(193,120,73,0.35)] cta-glow active:scale-[0.97] transition-all min-h-[48px] cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>{{ slide.ctaText }}</span>
                </button>

                <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-on-surface-variant font-medium">
                  <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">verified_user</span> Sin compromiso</span>
                  <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">bolt</span> Enfoque práctico</span>
                  <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">schedule</span> Respuesta rápida</span>
                </div>
              </div>

              <!-- Grid with capabilities and image -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
                <div class="flex flex-col gap-3">
                  <div
                    v-for="cap in slide.capabilities"
                    :key="cap.title"
                    class="p-4 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-3.5 border border-outline-variant/20 hover:border-secondary/30 transition-colors"
                  >
                    <div
                      class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      :class="
                        slide.accentColor === 'secondary'
                          ? 'bg-secondary/10 text-secondary'
                          : slide.accentColor === 'primary'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-tertiary/10 text-tertiary'
                      "
                    >
                      <span class="material-symbols-outlined text-[20px]">{{ cap.icon }}</span>
                    </div>
                    <div>
                      <h4 class="font-headline-sm text-body-md font-bold text-on-surface">{{ cap.title }}</h4>
                      <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{{ cap.text }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-surface-container rounded-2xl p-4 shadow-md border border-outline-variant/20 flex items-center justify-center">
                  <div class="relative w-full min-h-[260px] md:min-h-[320px] rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      :src="slide.image"
                      :alt="slide.imageAlt"
                      class="w-full max-w-[512px] h-auto object-cover rounded-xl shadow-xs"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          type="button"
          @click="prevSlide"
          class="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/50 shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container-lowest hover:text-secondary hover:scale-105 active:scale-95 transition-all cursor-pointer z-10"
          aria-label="Sector anterior"
        >
          <span class="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>

        <button
          type="button"
          @click="nextSlide"
          class="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/50 shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container-lowest hover:text-secondary hover:scale-105 active:scale-95 transition-all cursor-pointer z-10"
          aria-label="Siguiente sector"
        >
          <span class="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      </div>

      <!-- Bottom Pagination Dots & Slide Counter -->
      <div class="mt-6 flex items-center justify-center gap-3">
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          @click="goToSlide(index)"
          class="transition-all duration-300 rounded-full cursor-pointer h-2.5"
          :class="
            currentIndex === index
              ? 'w-8 bg-secondary shadow-xs'
              : 'w-2.5 bg-outline-variant hover:bg-outline'
          "
          :aria-label="`Ir al sector ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>
