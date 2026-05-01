export const siteMeta = {
  title: 'Resume',
  brand: '당현아 이력서',
  subtitle: '독립 이력서 사이트',
  tagline: '빠르게 읽히는 경력 요약과 현재 집중 영역',
  description:
    '현재 집중하고 있는 작업과 경력 흐름을 짧고 명확하게 보여주는 당현아의 이력서 사이트입니다.',
  siteUrl: 'https://hadevyi.github.io/resume/',
  rootPath: '/resume/',
  repoUrl: 'https://github.com/hadevyi/resume'
} as const;

export const mainNav = [
  {
    href: '/resume/',
    label: '홈',
    description: '이력서 메인 페이지'
  },
  {
    href: 'https://hadevyi.github.io/',
    label: '공식 홈페이지',
    description: '공식 홈페이지로 돌아가기',
    external: true
  },
  {
    href: 'https://github.com/hadevyi/resume',
    label: '저장소',
    description: '이 사이트 저장소 보기',
    external: true
  }
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hadevyi'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hadevyi/'
  }
] as const;
