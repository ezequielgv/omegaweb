<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemSection from './components/ProblemSection.vue'
import NoPackagesSection from './components/NoPackagesSection.vue'
import SectoresCarousel from './components/SectoresCarousel.vue'
import ProcessSection from './components/ProcessSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCtaSection from './components/FinalCtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton.vue'
import WhatsAppLeadModal from './components/WhatsAppLeadModal.vue'
</script>

<template>
  <SiteHeader />
  <main class="w-full pt-[64px] md:pt-[72px] bg-surface text-on-surface">
    <!-- 1. Hero -->
    <HeroSection />

    <!-- 2. ¿Te pasa esto? -->
    <ProblemSection />

    <!-- 3. Podemos solucionarlo / No vendemos paquetes -->
    <NoPackagesSection />

    <!-- 4. Soluciones por sector (Carrusel interactivo) -->
    <SectoresCarousel />

    <!-- 5. Cómo trabajamos (3 pasos) -->
    <ProcessSection />

    <!-- 6. Preguntas frecuentes -->
    <FaqSection />

    <!-- 7. CTA final -->
    <FinalCtaSection />
  </main>
  <SiteFooter />

  <!-- Floating WhatsApp button & qualification modal -->
  <WhatsAppFloatingButton />
  <WhatsAppLeadModal />
</template>