/**
 * Distinct color identity per section.
 * main  — accents, progress rings, borders
 * dim   — tinted backgrounds
 * pastel — light-theme radial blobs & ambient glow
 * textOnDarkCard — sidebar card text in dark mode (active item)
 */
export const SECTION_PALETTE = {
  hr: {
    color:  '#FF6F61',
    dim:    'rgba(255, 111, 97, 0.22)',
    pastel: 'rgba(255, 111, 97, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  python: {
    color:  '#7E57C2',
    dim:    'rgba(126, 87, 194, 0.22)',
    pastel: 'rgba(126, 87, 194, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  selenium: {
    color:  '#43A047',
    dim:    'rgba(67, 160, 71, 0.22)',
    pastel: 'rgba(67, 160, 71, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  framework: {
    color:  '#8D5524',
    dim:    'rgba(141, 85, 36, 0.24)',
    pastel: 'rgba(141, 85, 36, 0.45)',
    textOnDarkCard: '#FFFFFF',
  },
  api: {
    color:  '#FFA726',
    dim:    'rgba(255, 167, 38, 0.24)',
    pastel: 'rgba(255, 167, 38, 0.45)',
    textOnDarkCard: '#1E293B',
  },
  sql: {
    color:  '#FDD835',
    dim:    'rgba(253, 216, 53, 0.24)',
    pastel: 'rgba(253, 216, 53, 0.45)',
    textOnDarkCard: '#1E293B',
  },
  jenkins: {
    color:  '#FB8C00',
    dim:    'rgba(251, 140, 0, 0.24)',
    pastel: 'rgba(251, 140, 0, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  banking: {
    color:  '#42A5F5',
    dim:    'rgba(66, 165, 245, 0.24)',
    pastel: 'rgba(66, 165, 245, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  scenario: {
    color:  '#2E7D32',
    dim:    'rgba(46, 125, 50, 0.22)',
    pastel: 'rgba(46, 125, 50, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  manual: {
    color:  '#C9A227',
    dim:    'rgba(201, 162, 39, 0.24)',
    pastel: 'rgba(201, 162, 39, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  git: {
    color:  '#6B8E23',
    dim:    'rgba(107, 142, 35, 0.24)',
    pastel: 'rgba(107, 142, 35, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  deepdive: {
    color:  '#304FFE',
    dim:    'rgba(48, 79, 254, 0.24)',
    pastel: 'rgba(48, 79, 254, 0.45)',
    textOnDarkCard: '#FFFFFF',
  },
  fakecheck: {
    color:  '#C96A23',
    dim:    'rgba(201, 106, 35, 0.24)',
    pastel: 'rgba(201, 106, 35, 0.42)',
    textOnDarkCard: '#1E293B',
  },
  highpriority: {
    color:  '#D32F2F',
    dim:    'rgba(211, 47, 47, 0.24)',
    pastel: 'rgba(211, 47, 47, 0.45)',
    textOnDarkCard: '#FFFFFF',
  },
  java: {
    color:  '#E53935',
    dim:    'rgba(229, 57, 53, 0.22)',
    pastel: 'rgba(229, 57, 53, 0.42)',
    textOnDarkCard: '#FFFFFF',
  },
  javascript: {
    color:  '#F7DF1E',
    dim:    'rgba(247, 223, 30, 0.24)',
    pastel: 'rgba(247, 223, 30, 0.45)',
    textOnDarkCard: '#1E293B',
  },
  springboot: {
    color:  '#6DB33F',
    dim:    'rgba(109, 179, 63, 0.22)',
    pastel: 'rgba(109, 179, 63, 0.42)',
    textOnDarkCard: '#1E293B',
  },
}

export function getSectionPalette(id) {
  return SECTION_PALETTE[id] ?? SECTION_PALETTE.framework
}

export function applySectionColors(section) {
  const palette = getSectionPalette(section.id)
  return {
    ...section,
    color:  palette.color,
    colorDim: palette.dim,
    pastel: palette.pastel,
    darkCardText: palette.textOnDarkCard ?? '#1E293B',
  }
}
