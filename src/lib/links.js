export const WA_BASE = 'https://wa.me/5492213642317'
export const EMAIL_CONTACT = 'contacto@omegaweb.com.ar'

export const waWith = (text) => `${WA_BASE}?text=${encodeURIComponent(text)}`

export const mailtoWith = (subject, body) =>
  `mailto:${EMAIL_CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const gmailWith = (subject, body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_CONTACT}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`