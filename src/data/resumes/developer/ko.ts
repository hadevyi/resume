import type { ResumeContent } from '../schema';

export const developerKo = {
    lang: 'ko',
    lastUpdatedLabel: '최종 업데이트',
    labels: {
      skills: '기술 및 도구'
    },
    profile: {
      name: '당현아',
      headline: '공유 가능한 구조를 만드는 백엔드 개발자',
      summary:
        'Java/Spring Boot 기반 BI·데이터 포탈 서버를 개발하고 운영합니다.\n요구사항을 API, 데이터, 협업 흐름으로 구조화해 팀이 함께 이해하고 이어갈 수 있도록 정리합니다.',
      currentFocus: ['Java/Spring Boot 기반 백엔드 개발', 'BI·데이터 포탈 서버 개발 및 운영', '요구사항 구조화와 협업 흐름 정리'],
      photo: {
        src: '/resume/images/developer-profile.png',
        alt: '개발자 당현아 프로필 사진'
      }
    },
    highlights: [
      {
        title: 'BI·데이터 포탈 서버 개발 및 운영',
        period: '2024.01 - 현재',
        description: 'Bigxdata Data솔루션팀에서 BI·데이터 포탈의 서버 개발, 운영, 고객사 대응을 맡고 있습니다.'
      },
      {
        title: '프로젝트 코칭과 실습 운영',
        period: '2021.12 - 2022.11',
        description: 'SSAFY 6기·7기 교육생의 프로젝트 수행을 코칭하고 서버 배포와 운영 실습을 안내했습니다.'
      },
      {
        title: '영상 처리 연구 개발',
        period: '2019.07 - 2019.08',
        description: 'OpenCV와 CNN 기반 영상 배경 제거 편집기를 개발하고 성능을 측정했습니다.'
      }
    ],
    skillGroups: [
      {
        label: '백엔드',
        items: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'QueryDSL']
      },
      {
        label: '데이터베이스',
        items: ['MySQL', 'MariaDB', 'Oracle']
      },
      {
        label: 'API 및 협업',
        items: ['Swagger', 'Git', 'Jira', 'Confluence']
      },
      {
        label: 'AI 활용 개발',
        items: ['요구사항 정리', '코드 검토', '문서화', '테스트 관점 점검']
      }
    ],
    sections: [
      {
        title: '경력',
        items: [
          {
            period: '2024.01 - 현재',
            employmentType: '정규직',
            title: 'Bigxdata Data솔루션팀 / 선임',
            description: 'BI·데이터 포탈 서버 개발자',
            details: [
              'Java/Spring Boot 기반 BI·데이터 포탈의 서버 기능 개발',
              '구독형 멀티모듈 구조에서 DBMS 관리 모듈 초기 구현 담당',
              '메인 허브를 유지보수하고 신규 기능을 개발하면서 고객사 운영 조건을 서버 기능에 반영',
              '고객사별 검증부터 이슈 재현·수정, 배포, 모니터링, 보안 점검, EOS 대응까지 담당',
              '기술: Java, Spring Boot, JPA/MyBatis/QueryDSL, MySQL/MariaDB/Oracle, Swagger'
            ]
          },
          {
            period: '2021.12 - 2022.11',
            employmentType: '계약 프리랜서',
            title: '삼성청년SW아카데미 개발운영그룹 / 프로젝트 실습코치',
            description: 'SSAFY 6기·7기 교육생 대상 프로젝트 코칭 및 실습 운영',
            details: [
              '프로젝트 수행 과정에서 요구사항과 명세서를 정리하고 개발 방향을 검토해 피드백 제공',
              '서버 배포와 프로젝트 운영 실습을 위한 안내 자료를 만들고 실시간으로 시연'
            ]
          },
          {
            period: '2019.07 - 2019.08',
            employmentType: '방학 중 학생 인턴',
            title: '한국전자통신연구원 / 연구연수생',
            description: 'OpenCV와 CNN을 활용한 영상 배경 제거 편집기 개발',
            details: [
              '프레임 단위 GrabCut 수동 편집기와 CNN 기반 자동 편집기 개발',
              '편집 시간을 줄이고 자동 편집 성능을 측정하기 위한 검사기 구현',
              '기술: Python, Tkinter, OpenCV, GrabCut, NumPy, Keras'
            ]
          }
        ]
      },
      {
        title: '교육',
        items: [
          {
            period: '2021.01 - 2021.12',
            title: '삼성청년SW아카데미 5기',
            description: '전국 750명 중 최상위 5% 우수 수료'
          },
          {
            period: '2016.03 - 2020.02',
            title: '인제대학교 컴퓨터공학 학사',
            description: '소프트웨어대학 컴퓨터공학 / 전체 평점 4.32, 전공 평점 4.4'
          }
        ]
      },
      {
        title: '주요 수상',
        items: [
          {
            period: '2021.12',
            title: '삼성청년SW아카데미 우수 수료',
            description:
              '삼성전자 / 5기 750명 중 최상위 5%. 3회 프로젝트 모두 반 1위, 전국 단위 결선 입선, SSDC 무선사업부 1등 성과 포함'
          },
          {
            period: '2020.02',
            title: '제36회 학위수여식 컴퓨터공학부 우수졸업자',
            description: '인제대학교 소프트웨어대 학장상 / 컴퓨터공학부 차석 졸업'
          },
          {
            period: '2019.12',
            title: '동계 한중일 글로벌 캡스톤디자인 경진대회 Silver',
            description: '비접촉식 센서 기반 마우스 포인터 제어 프로젝트'
          },
          {
            period: '2018 - 2019',
            title: '과학기술정보통신부 국가우수장학생',
            description: '이공계 국가우수장학 2년 지원 유형 / 4개 학기 전액 학비 지원'
          }
        ]
      },
      {
        title: '활동',
        items: [
          {
            period: '2022.12 - 현재',
            title: '개발자 X 디자이너 연합 동아리 DND 개발 운영진',
            description: 'IT 비영리 단체 개발파트 운영 및 프로젝트 피드백 지원'
          },
          {
            period: '2021.11.17 - 2021.11.18',
            title: 'Samsung Software Developer Conference 2021 세션 발표자',
            description: '삼성전자 무선사업부(현 MX사업부) 오픈소스 컨트리뷰션 경험 발표'
          }
        ]
      },
      {
        title: '자격',
        items: [
          {
            period: '2023.09',
            title: '정보처리기사',
            description: '과학기술정보통신부 주관 · 한국산업인력공단 시행 국가기술자격'
          }
        ]
      },
      {
        title: '프로젝트',
        items: [
          {
            period: '2021.10 - 2021.11',
            title: '환경 및 동물 보호를 통한 지구치유 메타버스, Safers',
            description: 'Metaverse-Web / 팀 5인 / 팀장·백엔드·CI/CD·발표',
            details: [
              '팀장으로서 백엔드 API, CI/CD, ML 미션 판별 기능과 발표를 담당',
              '국립생태원·IUCN과의 문의·소통 내용을 참고해 서비스 방향을 검토하고 사용자 유입·유지 기능 구현',
              '결과: SSAFY 자율프로젝트 소속 반 1등 및 전국 입상 / Java, Spring Boot, JPA, MySQL, AWS, Jenkins'
            ]
          },
          {
            period: '2021.08 - 2021.10',
            title: '동작 인식을 활용한 Motion Pose Node&Flow',
            description: 'Open Source / 팀 5인 / 팀장·프론트엔드·백엔드·발표',
            details: [
              '팀장으로 Hand Detection 파트, 모델 적용 화면, 발표 담당',
              '동작 인식 노드를 npm과 Node-RED Library에 배포',
              '결과: SSDC 무선사업부 과제 1위, Samsung Automation Studio PR 병합 / Node.js, Node-RED, MediaPipe'
            ]
          }
        ]
      }
    ]
  } as const satisfies ResumeContent;
