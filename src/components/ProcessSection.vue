<script setup>
	import { useViewport } from '../lib/useViewport'

	const { el: sectionEl, visible } = useViewport()

	const steps = [
		{ number: '01', icon: 'chat_bubble', title: '1. Me contás qué necesitás', text: 'Hablamos por WhatsApp sobre cómo opera tu negocio: qué hacés a mano, dónde perdés tiempo o clientes, y qué te gustaría mejorar.', footer: 'Diagnóstico sin cargo' },
		{ number: '02', icon: 'draw', title: '2. Diseñamos la solución', text: 'Te presentamos cómo se verán las pantallas, qué flujo tendrá el sistema y un presupuesto cerrado con plazos claros. Sin costos sorpresa.', footer: 'Alcance y precio definidos' },
		{ number: '03', icon: 'handshake', title: '3. La pongo en marcha', text: 'Contruimos el software, lo conectamos con tus herramientas, capacitamos a tu equipo y acompañamos con soporte constante.', footer: 'Puesta en producción y soporte' },
	]
</script>

<template>
	<section ref="sectionEl" class="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto">
		<div class="reveal flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-16" :class="{ 'is-visible': visible }">
			<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-4">
				<span class="material-symbols-outlined text-[16px]">handshake</span>
				Proceso Simple y Transparente
			</div>
			<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight mb-4"> De tu problema a tu sistema en 3 pasos </h2>
			<p class="font-body-lg text-body-lg text-on-surface-variant"> Sin vueltas teóricas, sin reuniones eternas. Trabajamos con objetivos concretos desde el día uno. </p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 stagger-children">
			<div v-for="(step, i) in steps" :key="step.number" class="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden" :style="{ '--i': i }">
				<div class="font-display-hero text-headline-lg md:text-display-hero font-extrabold text-outline-variant/30 absolute top-4 right-6 pointer-events-none select-none">
					{{ step.number }}
				</div>
				<div>
					<div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 md:mb-6">
						<span class="material-symbols-outlined text-[22px] md:text-[26px]">{{ step.icon }}</span>
					</div>
					<h3 class="font-headline-sm text-body-md md:text-headline-sm font-bold text-on-surface mb-2 md:mb-3">{{ step.title }}</h3>
					<p class="font-body-sm md:text-body-md text-body-md text-on-surface-variant leading-relaxed">{{ step.text }}</p>
				</div>
				<div class="mt-6 md:mt-8 pt-4 border-t border-outline-variant/30 font-headline-sm text-[14px] md:text-[15px] text-secondary flex items-center gap-1.5">
				<span class="material-symbols-outlined text-[16px] md:text-[18px]">check</span>
					{{ step.footer }}
				</div>
			</div>
		</div>
	</section>
</template>
