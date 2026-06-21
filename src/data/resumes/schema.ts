export const resumeLanguages = ['ko', 'en'] as const;
export const resumeTracks = ['developer', 'instructor'] as const;

export type ResumeLanguage = (typeof resumeLanguages)[number];
export type ResumeTrack = (typeof resumeTracks)[number];

export interface ResumeProfile {
  name: string;
  headline: string;
  summary: string;
  currentFocus: readonly string[];
  photo?: {
    src: string;
    alt: string;
  };
}

export interface ResumeHighlight {
  title: string;
  period: string;
  description: string;
}

export interface ResumeSkillGroup {
  label: string;
  items: readonly string[];
}

export interface ResumeSectionItem {
  period: string;
  employmentType?: string;
  title: string;
  description?: string;
  details?: readonly string[];
}

export interface ResumeSection {
  title: string;
  durationSummary?: string;
  items: readonly ResumeSectionItem[];
}

export interface ResumeContent {
  lang: ResumeLanguage;
  lastUpdatedLabel: string;
  labels: {
    skills: string;
  };
  profile: ResumeProfile;
  highlights: readonly ResumeHighlight[];
  skillGroups: readonly ResumeSkillGroup[];
  sections: readonly ResumeSection[];
}

export interface ResumeTrackMeta {
  track: ResumeTrack;
  label: {
    ko: string;
    en: string;
  };
  sectionOrder: Record<ResumeLanguage, readonly string[]>;
  skillAnchorTitles: Record<ResumeLanguage, readonly string[]>;
}
