export const isPaid = (plan) => plan === 'pro' || plan === 'annual'

export const planLabel = (plan) => {
  if (plan === 'annual') return '⭐ Plano Pro Anual'
  if (plan === 'pro')    return '⭐ Plano Pro'
  return 'Plano Grátis'
}

export const planDesc = (plan) => {
  if (plan === 'annual') return 'Acesso total · faturado anualmente'
  if (plan === 'pro')    return 'Acesso total a todos os módulos e templates'
  return 'Acesso a 11 módulos e 4 templates'
}

export const planBadge = (plan) => {
  if (plan === 'annual') return '⭐ Pro Anual'
  if (plan === 'pro')    return '⭐ Pro'
  return 'Grátis'
}
