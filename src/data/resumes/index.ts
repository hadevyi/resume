import { developerEn } from './developer/en';
import { developerKo } from './developer/ko';
import { developerMeta } from './developer/meta';
import { instructorEn } from './instructor/en';
import { instructorKo } from './instructor/ko';
import { instructorMeta } from './instructor/meta';
export type { ResumeContent, ResumeLanguage, ResumeTrack } from './schema';

export const resumeMeta = {
  developer: developerMeta,
  instructor: instructorMeta
} as const;

export const resumeContent = {
  ko: developerKo,
  en: developerEn
} as const;

export const instructorResumeContent = {
  ko: instructorKo,
  en: instructorEn
} as const;

export const resumesByTrack = {
  developer: resumeContent,
  instructor: instructorResumeContent
} as const;
