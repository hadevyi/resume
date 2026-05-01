export const resumeProfile = {
  name: '당현아',
  headline: '기록과 구조를 함께 설계하는 프런트엔드 개발자',
  summary:
    '사용자가 빠르게 이해할 수 있는 구조를 만들고, 그 구조가 시간이 지나도 계속 유지되도록 다듬는 일에 관심이 많습니다. 이력서에서는 핵심 요약만 짧게 전달하고, 자세한 배경과 기록은 독립 사이트로 분리해 운영합니다.',
  currentFocus: ['개인 브랜딩 생태계 구축', '지속 가능한 콘텐츠 구조 설계', '읽기 쉬운 정보 밀도 조정'],
  links: [
    { label: '공식 홈페이지', href: 'https://hadevyi.github.io/' },
    { label: '포트폴리오', href: '/portfolio/' },
    { label: '경험 정리', href: '/experience/' },
    { label: '블로그', href: '/blog/' },
    { label: 'GitHub', href: 'https://github.com/hadevyi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hadevyi/' }
  ]
} as const;

export const highlightRoles = [
  {
    title: '개인 홈페이지 생태계 설계',
    period: '2026.04 - 현재',
    description:
      '공식 홈페이지와 세부 콘텐츠 영역을 분리한 정적 멀티페이지 구조를 설계하고, 검색성과 유지보수성을 함께 고려한 운영 체계를 만들고 있습니다.'
  },
  {
    title: '콘텐츠 중심 정보 구조 정리',
    period: '2026.04 - 현재',
    description:
      '하나의 아이디어를 이력서, 경험 기록, 포트폴리오, 블로그 글로 분기하는 기준을 문서화해 중복 작성 비용을 줄이고 있습니다.'
  },
  {
    title: '지속 가능한 기록 운영 기준 수립',
    period: '2026.04 - 현재',
    description:
      '예쁜 결과물보다 오래 갱신되는 상태를 만드는 데 초점을 두고, 주간·월간 단위의 업데이트 리듬과 점검 기준을 함께 설계하고 있습니다.'
  }
] as const;

export const skillGroups = [
  {
    label: '프런트엔드',
    items: ['Astro', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    label: '콘텐츠 운영',
    items: ['MDX', '콘텐츠 컬렉션', '정보 구조 설계', '문서화']
  },
  {
    label: '배포 및 분석 준비',
    items: ['GitHub Pages', 'GitHub Actions', '메타 태그 설계', 'GA/Search Console 연동 준비']
  }
] as const;
