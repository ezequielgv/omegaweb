/**
 * Generates natural, conversational Spanish WhatsApp messages based on selected business type and improvement goal.
 */

const messageMatrix = {
  comercio: {
    stock: 'Hola, tengo un comercio/local y me gustaría controlar mejor el stock y las reposiciones. Me gustaría saber cómo se podría implementar.',
    ventas: 'Hola, tengo un comercio/local y me gustaría agilizar las ventas y cobros sin descuidar el mostrador. Me gustaría saber cómo se podría implementar.',
    whatsapp: 'Hola, tengo un comercio/local y me gustaría ordenar los pedidos y consultas por WhatsApp para no perder ventas. Me gustaría saber cómo se podría implementar.',
    turnos: 'Hola, tengo un comercio/local y me gustaría organizar la atención y turnos de mis clientes. Me gustaría saber cómo se podría implementar.',
    gestion: 'Hola, tengo un comercio/local y me gustaría simplificar la gestión y las cuentas del día a día. Me gustaría saber cómo se podría implementar.',
    otro: 'Hola, tengo un comercio/local y me gustaría automatizar algunos procesos diarios con un sistema a medida. Me gustaría saber cómo se podría implementar.'
  },
  profesional: {
    turnos: 'Hola, tengo un consultorio/servicio y me gustaría organizar mis turnos y agenda de clientes. Me gustaría saber cómo se podría implementar.',
    whatsapp: 'Hola, trabajo con turnos y me gustaría automatizar recordatorios y consultas por WhatsApp. Me gustaría saber cómo se podría implementar.',
    gestion: 'Hola, presto servicios profesionales y me gustaría tener las fichas e historial de mis clientes en un solo lugar. Me gustaría saber cómo se podría implementar.',
    ventas: 'Hola, presto servicios profesionales y me gustaría automatizar cobro de señas y pagos. Me gustaría saber cómo se podría implementar.',
    stock: 'Hola, tengo un centro de atención profesional y me gustaría llevar mejor control de insumos. Me gustaría saber cómo se podría implementar.',
    otro: 'Hola, presto servicios profesionales y me gustaría digitalizar la gestión de mi trabajo. Me gustaría saber cómo se podría implementar.'
  },
  gastronomia: {
    ventas: 'Hola, tengo un local gastronómico y me gustaría agilizar los pedidos y delivery sin pagar comisiones abusivas. Me gustaría saber cómo se podría implementar.',
    whatsapp: 'Hola, tengo un negocio gastronómico y me gustaría ordenar los pedidos que nos entran por WhatsApp en hora pico. Me gustaría saber cómo se podría implementar.',
    gestion: 'Hola, tengo un local gastronómico y me gustaría organizar la cocina y comandas con un sistema digital. Me gustaría saber cómo se podría implementar.',
    stock: 'Hola, tengo un local gastronómico y me gustaría controlar mejor el stock de insumos e ingredientes. Me gustaría saber cómo se podría implementar.',
    turnos: 'Hola, tengo un local gastronómico y me gustaría gestionar reservas de mesas de forma online. Me gustaría saber cómo se podría implementar.',
    otro: 'Hola, tengo un negocio gastronómico y me gustaría automatizar la toma de pedidos y gestión. Me gustaría saber cómo se podría implementar.'
  },
  otro: {
    ventas: 'Hola, tengo un negocio y me gustaría mejorar mis ventas y cobros con una herramienta a medida. Me gustaría saber cómo se podría implementar.',
    gestion: 'Hola, tengo un negocio y me gustaría ordenar la gestión y el seguimiento de tareas. Me gustaría saber cómo se podría implementar.',
    whatsapp: 'Hola, tengo un negocio y me gustaría ordenar la atención y consultas que recibimos por WhatsApp. Me gustaría saber cómo se podría implementar.',
    turnos: 'Hola, tengo un negocio y me gustaría organizar la agenda y turnos de mis clientes. Me gustaría saber cómo se podría implementar.',
    stock: 'Hola, tengo un negocio y me gustaría tener un mejor control de stock y mercadería. Me gustaría saber cómo se podría implementar.',
    otro: 'Hola, tengo un negocio y me gustaría desarrollar un sistema a medida para simplificar el día a día. Me gustaría saber cómo se podría implementar.'
  }
}

const rubroOnlyMessages = {
  comercio: 'Hola, tengo un comercio/local y me gustaría conocer qué herramientas a medida podemos implementar para mejorarlo.',
  profesional: 'Hola, tengo un estudio/consultorio profesional y me gustaría saber cómo optimizar la gestión de turnos y clientes.',
  gastronomia: 'Hola, tengo un negocio gastronómico y me gustaría conocer cómo agilizar los pedidos y la atención.',
  otro: 'Hola, tengo un negocio y me gustaría contarles cómo trabajo para ver qué soluciones podemos implementar.'
}

const goalLabels = {
  ventas: 'mis ventas y cobros',
  gestion: 'la gestión interna de mi negocio',
  whatsapp: 'la atención por WhatsApp',
  turnos: 'el sistema de turnos y reservas',
  stock: 'el control de stock y mercadería',
  otro: 'algunos procesos del día a día'
}

export function buildWhatsAppMessage(rubroId, goalId) {
  if (rubroId && goalId && messageMatrix[rubroId] && messageMatrix[rubroId][goalId]) {
    return messageMatrix[rubroId][goalId]
  }

  if (rubroId && rubroOnlyMessages[rubroId]) {
    return rubroOnlyMessages[rubroId]
  }

  if (goalId && goalLabels[goalId]) {
    return `Hola, me gustaría saber cómo se podría implementar una solución para mejorar ${goalLabels[goalId]} en mi negocio.`
  }

  return 'Hola! Me gustaría contarles cómo trabaja mi negocio actualmente y ver cómo podemos mejorarlo con un sistema a medida.'
}
