<script setup>
import { openLeadModal } from '../lib/modalState'
import WhatsAppIcon from './WhatsAppIcon.vue'

function handleClick() {
  openLeadModal()
}
</script>

<template>
  <aside
    class="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center print:hidden"
    style="padding-bottom: env(safe-area-inset-bottom); padding-right: env(safe-area-inset-right);"
  >
    <button
      type="button"
      @click="handleClick"
      class="group relative inline-flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.38)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] active:scale-95 transition-all duration-200 cursor-pointer"
      aria-label="Hablar con OmegaWeb por WhatsApp"
    >
      <!-- Online Pulse Indicator -->
      <span class="relative flex h-3 w-3 shrink-0">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>

      <!-- WhatsApp SVG Icon -->
      <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" />

      <!-- Text -->
      <span class="font-headline-sm text-sm sm:text-base font-bold tracking-tight text-white whitespace-nowrap">
        Hablá con OmegaWeb
      </span>
    </button>
  </aside>
</template>
