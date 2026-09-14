<script setup>
import { waWith } from '../lib/links'
import { useViewport } from '../lib/useViewport'
import comerciosImg from '../assets/comercios.jpg'

const { el: sectionEl, visible } = useViewport()

const capabilities = [
	{ icon: 'sync_alt', title: 'Ecommerce sincronizado con mostrador', text: 'Si se vende en la caja física, se descuenta de tu web automáticamente.' },
	{ icon: 'receipt_long', title: 'Facturación electrónica con ARCA', text: 'Emití comprobantes y tickets fiscales al instante desde cada cobro.' },
	{ icon: 'inventory_2', title: 'Control de stock y alertas', text: 'Notificaciones antes de que te quedes sin productos estrella.' },
	{ icon: 'point_of_sale', title: 'Punto de Venta rápido', text: 'Cobrá en segundos, emití comprobantes y registrá pagos múltiples.' },
	{ icon: 'contacts', title: 'Cuentas corrientes', text: 'Historial de compras de clientes mayoristas con un click.' },
	{ icon: 'query_stats', title: 'Reportes de rentabilidad', text: 'Sabé cuánto ganás por producto, rubro o vendedor.' },
]
</script>

<template>
	<section ref="sectionEl" class="relative w-full px-4 md:px-6 lg:px-12 max-w-6xl mx-auto" id="comercios">
		<div class="reveal bg-surface-container-lowest rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-outline-variant/30 relative overflow-hidden" :class="{ 'is-visible': visible }">
			<div class="flex flex-col items-center text-center gap-5 mb-10 md:mb-12">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
					<span class="material-symbols-outlined text-[16px]">storefront</span>
					Para Comercios y Locales Físicos
				</div>
				<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight max-w-2xl">
					Más control. Menos trabajo manual.
				</h2>
				<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
					Si tenés un local o distribuidora, sabés lo que cuesta llevar el stock al día y responder pedidos por chat. Creemos un sistema centralizado para tu negocio.
				</p>
				<a
					class="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary font-headline-sm text-headline-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(193,120,73,0.25)] hover:bg-secondary-container hover:shadow-[0_6px_20px_rgba(193,120,73,0.35)] cta-glow active:scale-[0.97] transition-all min-h-[48px]"
					:href="waWith('Hola OmegaWeb, tengo un comercio y quiero digitalizar ventas y stock')"
					rel="noopener noreferrer"
					target="_blank"
				>
					<span class="material-symbols-outlined text-[20px]">chat</span>
					<span>Quiero digitalizar mi comercio</span>
				</a>
				<div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-on-surface-variant">
					<span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">verified_user</span> Sin compromiso</span>
					<span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">bolt</span> Enfoque práctico</span>
					<span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[16px]">schedule</span> Respuesta rápida</span>
				</div>
			</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
			<div class="flex flex-col gap-3 stagger-children">
			<div v-for="(cap, i) in capabilities" :key="cap.title" class="p-4 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-3.5 border border-outline-variant/20" :style="{ '--i': i }">
				<div class="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
				<span class="material-symbols-outlined text-[20px]">{{ cap.icon }}</span>
				</div>
				<div>
				<h4 class="font-headline-sm text-body-md font-bold text-on-surface">{{ cap.title }}</h4>
				<p class="font-body-sm text-body-sm text-on-surface-variant">{{ cap.text }}</p>
				</div>
			</div>
			</div>

			<div class="bg-surface-container rounded-2xl mt-35 p-4 shadow-md border border-outline-variant/20">
			<div class="relative w-full min-h-[300px] rounded-xl overflow-hidden content-center">
				<img :src="comerciosImg" alt="Comercio con sistema de cobro digital" class="w-full max-w-[512px] h-auto object-cover rounded-xl " />
			</div>
			</div>
		</div>
		</div>
	</section>
</template>
