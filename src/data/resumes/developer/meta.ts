import type { ResumeTrackMeta } from '../schema';

export const developerMeta = {
  track: 'developer',
  label: {
    ko: '개발자 이력서',
    en: 'Developer Resume'
  },
  sectionOrder: {
    ko: ['경력', '프로젝트', '교육', '주요 수상', '활동', '자격'],
    en: ['Experience', 'Projects', 'Education', 'Awards', 'Activity', 'Presentation', 'Certifications']
  },
  skillAnchorTitles: {
    ko: ['경력'],
    en: ['Experience']
  }
} as const satisfies ResumeTrackMeta;
