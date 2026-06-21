import type { ResumeTrackMeta } from '../schema';

export const instructorMeta = {
  track: 'instructor',
  label: {
    ko: '강사 이력서',
    en: 'Instructor Resume'
  },
  sectionOrder: {
    ko: ['강의/멘토링/발표', '실무 및 교육 경력', '교육', '수상/장학/자격', '커뮤니티 운영'],
    en: [
      'Teaching Activities',
      'Work & Teaching',
      'Education',
      'Awards, Scholarship & Certification',
      'Community Operation'
    ]
  },
  skillAnchorTitles: {
    ko: ['실무 및 교육 경력', '강의/멘토링/발표'],
    en: ['Work & Teaching', 'Teaching Activities']
  }
} as const satisfies ResumeTrackMeta;
