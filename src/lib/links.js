export const WA_BASE = 'https://wa.me/5492213642317'

export const waWith = (text) => `${WA_BASE}?text=${encodeURIComponent(text)}`