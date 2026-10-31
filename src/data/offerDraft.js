// Internal research draft. Never import into a public pricing or checkout page.
export const OFFER_DRAFT = {
  id: 'candidatura-clara-v1',
  title: 'Kit Candidatura Clara',
  status: 'research_only',
  paymentModel: 'one_time',
  purchasesEnabled: false,
  currency: 'BRL',
  priceHypothesis: 49,
  audience: 'Pessoas buscando uma nova oportunidade no Brasil que precisam organizar currículo, carta e respostas de entrevista.',
  moduleIds: [1, 2, 4],
  toolIds: ['ats', 'star', 'cover-letter', 'checklist'],
  templateIds: [1, 5, 6, 8, 12],
  workbookPath: 'docs/product/WORKBOOK.md',
  evidenceStatus: 'No user sessions, purchase intent responses or payments have been observed.',
  accessTermsStatus: 'Not defined; must be approved before sale.',
}
