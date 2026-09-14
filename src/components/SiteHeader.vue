<script setup>
	import { onBeforeUnmount, onMounted, ref } from 'vue'
	import { WA_BASE } from '../lib/links'
	import logoNegro from '../assets/logo_negro.png'

	const links = [
		{ href: '#general', label: 'Inicio' },
		{ href: '#comercios', label: 'Comercios' },
		{ href: '#profesionales', label: 'Profesionales' },
		{ href: '#gastronomia', label: 'Gastronomía' },
	]

	const activeHash = ref('#general')
	const mobileMenuOpen = ref(false)

	function readHash() {
		const h = window.location.hash || '#general'
		activeHash.value = links.some((l) => l.href === h) ? h : '#general'
	}

	function onHashChange() { readHash() }

	function toggleMobileMenu() { mobileMenuOpen.value = !mobileMenuOpen.value }

	function closeMobileMenu() { mobileMenuOpen.value = false }

	onMounted(() => {
		readHash()
		window.addEventListener('hashchange', onHashChange)
	})

	onBeforeUnmount(() => { window.removeEventListener('hashchange', onHashChange) })
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant"
    style="padding-top: env(safe-area-inset-top)"
  >
    <div class="h-[64px] md:h-[72px] max-w-6xl mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
      <div class="flex items-center gap-2 md:gap-1">
        <a href="#general" class="flex items-center">
          <img :src="logoNegro" alt="OmegaWeb" class="h-15 md:h-15 w-auto object-contain" />
        </a>
        <span class="hidden sm:inline-flex font-label-sm py-1">
          | OmegaWeb
        </span>
      </div>

      <nav class="hidden md:flex items-center gap-2" aria-label="Secciones">
        <a
          v-for="link in links"
          :key="link.href"
          class="transition-colors min-h-11 inline-flex items-center px-3 py-2 rounded-lg"
          :class="
            activeHash === link.href
              ? 'text-secondary font-bold'
              : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
          "
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2 md:gap-4">
        <a
          class="inline-flex items-center gap-1.5 md:gap-2 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-3 md:px-5 min-h-11 py-2 md:py-2.5 rounded-xl shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-[0.98]"
          :href="WA_BASE"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="material-symbols-outlined text-[18px] md:text-[20px]">chat</span>
          <span class="hidden sm:inline">Hablar por WhatsApp</span>
        </a>

        <button
          class="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-colors"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menú de navegación"
        >
          <span class="material-symbols-outlined text-[24px]">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-surface-container-lowest border-t border-outline-variant"
      >
        <nav class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Secciones móviles">
          <a
            v-for="link in links"
            :key="link.href"
            class="transition-colors min-h-12 inline-flex items-center px-4 py-3 rounded-lg"
            :class="
              activeHash === link.href
                ? 'text-secondary font-bold bg-secondary/5'
                : 'font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            "
            :href="link.href"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>
