import type { ResumeContent } from '../schema';

export const developerEn = {
  lang: 'en',
  lastUpdatedLabel: 'Last updated',
  labels: {
    skills: 'Skills & Tools'
  },
  profile: {
    name: 'Dang Hyeona',
    headline: 'Backend developer building shareable systems',
    summary:
      'I build and operate Java/Spring Boot servers for BI and data portals.\nI structure requirements into APIs, data flows, and deployment-ready features.',
    currentFocus: [
      'Java/Spring Boot backend development',
      'BI and data portal server development and operation',
      'Requirement structuring and collaboration flow'
    ],
    photo: {
      src: '/resume/images/developer-profile.png',
      alt: 'Developer profile photo of Dang Hyeona'
    }
  },
  highlights: [
    {
      title: 'BI and data portal server development and operation',
      period: '2024.01 - Present',
      description:
        'Develops, operates, and supports customer-facing server features for BI and data portals at Bigxdata Data Solutions Team.'
    },
    {
      title: 'Project coaching and practice operation',
      period: '2021.12 - 2022.11',
      description:
        'Coached SSAFY 6th and 7th trainees on project execution, and guided server deployment and project operation practices.'
    },
    {
      title: 'Video processing research and development',
      period: '2019.07 - 2019.08',
      description:
        'Developed OpenCV and CNN-based video background removal editors and performed performance measurement.'
    }
  ],
  skillGroups: [
    {
      label: 'Backend',
      items: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'QueryDSL']
    },
    {
      label: 'Database',
      items: ['MySQL', 'MariaDB', 'Oracle']
    },
    {
      label: 'API & Collaboration',
      items: ['Swagger', 'Git', 'Jira', 'Confluence']
    },
    {
      label: 'AI-assisted Development',
      items: ['Requirement structuring', 'Code review', 'Documentation', 'Test perspective review']
    }
  ],
  sections: [
    {
      title: 'Experience',
      items: [
        {
          period: '2024.01 - Present',
          employmentType: 'Full-time',
          title: 'Bigxdata Data Solutions Team / Senior',
          description: 'BI and data portal server developer',
          details: [
            'Developed server-side features for Java/Spring Boot-based BI and data portals',
            'Led the initial implementation of a DBMS management module in a subscription-based multi-module solution',
            'Maintained the main hub and reflected customer operation conditions into server functions',
            'Handled verification, issue reproduction and fixes, deployment, monitoring, security checks, and EOS response',
            'Tech: Java, Spring Boot, JPA/MyBatis/QueryDSL, MySQL/MariaDB/Oracle, Swagger'
          ]
        },
        {
          period: '2021.12 - 2022.11',
          employmentType: 'Contract freelance',
          title: 'SSAFY Development Operation Group / Project Practice Coach',
          description: 'Project coaching and practice operation for SSAFY 6th and 7th trainees',
          details: [
            'Supported requirement organization, specifications, and development direction feedback',
            'Created guidance materials and live demonstrations for server deployment and project operation'
          ]
        },
        {
          period: '2019.07 - 2019.08',
          employmentType: 'Summer intern',
          title: 'ETRI / Research Intern',
          description: 'Video background removal editor development using OpenCV and CNN',
          details: [
            'Developed a frame-based manual editor using GrabCut and a CNN-based automatic editor',
            'Implemented a checker to measure editing time reduction and automatic editing performance',
            'Tech: Python, Tkinter, OpenCV, GrabCut, NumPy, Keras'
          ]
        }
      ]
    },
    {
      title: 'Education',
      items: [
        {
          period: '2021.01 - 2021.12',
          title: 'Samsung Software Academy For Youth 5th',
          description: 'Completed with excellence, top 5% among 750 trainees nationwide'
        },
        {
          period: '2016.03 - 2020.02',
          title: 'Inje University, B.S. in Computer Engineering',
          description: 'College of Software, Computer Engineering / GPA 4.32, major GPA 4.4'
        }
      ]
    },
    {
      title: 'Awards',
      items: [
        {
          period: '2021.12',
          title: 'SSAFY Excellent Graduate',
          description:
            'Samsung Electronics / Top 5% of 750 trainees. Includes three class project wins, a national final selection, and 1st place in the SSDC MX Division'
        },
        {
          period: '2020.02',
          title: 'Outstanding Graduate, Computer Engineering, 36th Commencement',
          description: "Inje University College of Software Dean's Award / Graduated second in the department"
        },
        {
          period: '2019.12',
          title: 'Korea-China-Japan Global Capstone Design Silver',
          description: 'Non-contact sensor-based mouse pointer control project'
        },
        {
          period: '2018 - 2019',
          title: 'National Science and Engineering Scholarship',
          description: 'Two-year national scholarship for science and engineering students / full tuition support for 4 semesters'
        }
      ]
    },
    {
      title: 'Activity',
      items: [
        {
          period: '2022.12 - Present',
          title: 'DND Developer x Designer Union Development Organizer',
          description: 'Development part operation and project feedback support for a nonprofit IT organization'
        },
        {
          period: '2021.11.17 - 2021.11.18',
          title: 'Samsung Software Developer Conference 2021 Session Speaker',
          description:
            'Presented an open source contribution experience with Samsung Electronics Wireless Business Division, now MX Division'
        }
      ]
    },
    {
      title: 'Certifications',
      items: [
        {
          period: '2023.09',
          title: 'Engineer Information Processing',
          description: 'National technical certification overseen by MSIT and administered by HRDK'
        }
      ]
    },
    {
      title: 'Projects',
      items: [
        {
          period: '2021.10 - 2021.11',
          title: 'Safers, environmental and animal protection metaverse',
          description: 'Metaverse-Web / Team of 5 / Team lead, backend, CI/CD, presentation',
          details: [
            'Led the team and handled backend APIs, CI/CD, ML-based mission classification, and presentation',
            'Reviewed service direction based on communication with the National Institute of Ecology and IUCN',
            'Result: SSAFY autonomous project class 1st place and national final selection / Java, Spring Boot, JPA, MySQL, AWS, Jenkins'
          ]
        },
        {
          period: '2021.08 - 2021.10',
          title: 'Motion Pose Node&Flow',
          description: 'Open Source / Team of 5 / Team lead, frontend, backend, presentation',
          details: [
            'Led the team and handled the hand detection part, model-applied screen, and presentation',
            'Published motion recognition nodes to npm and the Node-RED Library',
            'Result: SSDC Wireless Business Division project 1st place, Samsung Automation Studio PR merged / Node.js, Node-RED, MediaPipe'
          ]
        }
      ]
    }
  ]
} as const satisfies ResumeContent;
