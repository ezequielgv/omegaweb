<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ComerciosSection from './components/ComerciosSection.vue'
import ProfesionalesSection from './components/ProfesionalesSection.vue'
import GastronomiaSection from './components/GastronomiaSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import FinalCtaSection from './components/FinalCtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="w-full pt-[64px] md:pt-[72px] bg-surface text-on-surface">
    <HeroSection />
    <ComerciosSection />
    <ProfesionalesSection />
    <GastronomiaSection />
    <ProcessSection />
    <FinalCtaSection />
  </main>
  <SiteFooter />
</template>