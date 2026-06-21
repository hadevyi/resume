import type { ResumeContent } from '../schema';

export const instructorKo = {
    lang: 'ko',
    lastUpdatedLabel: '최종 업데이트',
    labels: {
      skills: '강의 및 도구'
    },
    profile: {
      name: '당현아',
      headline: '개발 경험을 강의와 멘토링으로 연결하는 개발자 강사',
      summary:
        '현업 개발과 프로젝트 코칭 경험을 바탕으로, 학습자가 개념을 구현과 결과물로 연결할 수 있도록 돕습니다.\n강의에서는 기술 설명에 그치지 않고 프로젝트 수행, 이력 정리, 협업 흐름까지 함께 다룹니다.',
      currentFocus: ['백엔드·프로젝트 코칭', '개발 커리어·이력서 멘토링', '자료구조·알고리즘 강의'],
      photo: {
        src: '/resume/images/instructor-profile.png',
        alt: '강사 당현아 프로필 사진'
      }
    },
    highlights: [
      {
        title: '전국 ICT콤플렉스 전문가 멘토',
        period: '2025.09 - 2027.08',
        description:
          'ICT 분야 학습자와 예비 개발자를 대상으로 프로젝트와 커리어 방향을 멘토링합니다.'
      },
      {
        title: '제로베이스 백엔드 스쿨 파트 강사',
        period: '2025.03 - 2028.02',
        description:
          '자료구조와 알고리즘 파트를 담당하며, 개념 이해와 구현 흐름을 연결해 강의합니다.'
      },
      {
        title: '삼성청년SW아카데미 프로젝트 실습코치',
        period: '2021.12 - 2022.11',
        description:
          '6기와 7기 교육생의 SW 개발과 프로젝트 수행을 코칭하고, 서버 배포와 운영 경험을 공유했습니다.'
      }
    ],
    skillGroups: [],
    sections: [
      {
        title: '강의/멘토링/발표',
        durationSummary: '총 10건',
        items: [
          {
            period: '2025.09 - 2027.08',
            title: 'ICT콤플렉스 전문가 멘토',
            description: '전국 ICT콤플렉스 | SW개발·개발자 취업 분야',
            details: ['프로젝트 방향 설정과 개발자 커리어 상담을 지원']
          },
          {
            period: '2025.11',
            title: 'SW중심대학 개방형 온라인 강좌',
            description: 'SW중심대학 | SW 개발자를 꿈꾸는 후배들에게',
            details: ['개발자 성장, 학습 방법, 커리어 준비를 7강 시리즈로 구성·강의']
          },
          {
            period: '2025.09',
            title: '현직자 특강',
            description: '미래동양대학교 | 개발 커리어 디자인하기',
            details: ['전공 동아리 학생을 대상으로 회사 선택 기준과 성장 방향을 정리해 전달']
          },
          {
            period: '2025.09 - 2025.10',
            title: '취업준비 서류정리 멘토링',
            description: '인제대학교 | 산학연프로젝트 4학년 대상',
            details: ['2개 팀의 프로젝트 경험을 이력서와 포트폴리오 목적에 맞게 재구성하도록 피드백']
          },
          {
            period: '2025.03 - 2028.02',
            title: '제로베이스 백엔드 스쿨 파트 강사',
            description: '데이원컴퍼니(제로베이스) | 기초 자료구조 및 알고리즘',
            details: ['백엔드 학습자가 구현 흐름과 문제 해결 방식을 연결하도록 강의']
          },
          {
            period: '2025.05',
            title: '미니프로젝트 멘토링',
            description: '인제대학교 | 산학연 미니프로젝트',
            details: ['5인 팀의 기존 프로젝트를 단계별 산출물 기준으로 점검하고 설계·테스트 문서 보완']
          },
          {
            period: '2025.01 - 2025.02',
            title: 'Git 토이프로젝트 멘토링',
            description: '인제대학교 | 산학연프로젝트 Git 협업 실습',
            details: ['정기 세션과 GitHub 댓글·PR 리뷰를 병행해 실습 중 생긴 질문을 피드백']
          },
          {
            period: '2024.02 - 2024.03',
            title: '현직자 멘토링',
            description: '인제대학교 | SW중점대 프로젝트 피드백',
            details: ['학생 프로젝트 결과물의 개선 방향과 개발자 진로 관점을 함께 안내']
          },
          {
            period: '2023.09',
            title: '선배와의 만남 강연',
            description: '인제대학교 | AI융합대 재학생 대상',
            details: ['졸업생 관점에서 개발 학습, 프로젝트 경험, 커리어 준비 과정을 공유']
          },
          {
            period: '2021.11',
            title: 'SSDC 2021 세션 발표',
            description: '삼성전자 | 무선사업부(현 MX사업부) Open Source Contribution 경험 공유',
            details: ['SSAFY SSDC 프로젝트에서 오픈소스 컨트리뷰션까지 이어진 과정을 컨퍼런스 세션으로 발표']
          }
        ]
      },
      {
        title: '실무 및 교육 경력',
        durationSummary: '개발 2년 8개월 · 교육/코칭 4년 5개월',
        items: [
          {
            period: '2024.01 - 현재',
            title: 'Bigxdata Data솔루션팀 / 선임',
            description: '정규직 · BI·데이터 포탈 서버 개발자'
          },
          {
            period: '2021.12 - 2022.11',
            title: '삼성청년SW아카데미 개발운영그룹 / 프로젝트 실습코치',
            description: '계약 프리랜서 · 6기·7기 교육생 대상 SW 개발 및 프로젝트 코칭, 신규코치 OJT'
          },
          {
            period: '2020.04 - 2020.10',
            title: '원투원프로그래밍 / 개인사업 대표',
            description: '창업 · 온라인 1:1 프로그래밍 강의'
          },
          {
            period: '2019.07 - 2019.08',
            title: '한국전자통신연구원 / 연구연수생',
            description: '방학 중 학생 인턴 · OpenCV를 활용한 CNN 영상 편집기 개발'
          },
          {
            period: '2017.03 - 2019.12',
            title: '인제대학교 영재교육원 / TA',
            description: '아르바이트 · 정보과학반 심화 및 사사과정'
          }
        ]
      },
      {
        title: '교육',
        items: [
          {
            period: '2021.01 - 2021.12',
            title: '삼성청년SW아카데미 5기',
            description: '전국 750명 최상위 5% 우수 수료'
          },
          {
            period: '2016.03 - 2020.02',
            title: '인제대학교 컴퓨터공학 학사',
            description: '우수입학, 차석졸업'
          }
        ]
      },
      {
        title: '수상/장학/자격',
        items: [
          {
            period: '2023.09',
            title: '정보처리기사',
            description: '과학기술정보통신부 주관 · 한국산업인력공단 시행 국가기술자격'
          },
          {
            period: '2019.12',
            title: '한중일 글로벌 캡스톤디자인 Silver',
            description: 'IRE Asia | 비접촉식 센서 기반 마우스 포인터 제어 프로젝트 영문 발표'
          },
          {
            period: '2019.10',
            title: '인제대학교 캡스톤디자인 경진대회 은상',
            description: '인제대학교 LINC+ 사업단 | DB Leap 팀장·부스 오퍼레이터, 은상 및 인기상 수상'
          },
          {
            period: '2018 - 2019',
            title: '과학기술정보통신부 국가이공계 우수장학생',
            description: '과학기술정보통신부 | 재학 중 우수자 2년 지원 유형, 4개 학기 전액 학비 지원'
          }
        ]
      },
      {
        title: '커뮤니티 운영',
        items: [
          {
            period: '2025.08 - 현재',
            title: '오픈소스 기여모임 운영진',
            description: '오픈소스 기여모임 | 참여자의 오픈소스 탐색과 기여 흐름을 돕는 운영진 활동'
          },
          {
            period: '2022.12 - 현재',
            title: '비영리 IT 동아리 DND 개발운영진',
            description: 'DND | 개발 파트 운영, 프로젝트 피드백 지원, 팀 활동 흐름 관리'
          }
        ]
      }
    ]
  } as const satisfies ResumeContent;
