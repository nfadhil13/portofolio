import { ProjectCard } from '@/app/components/ProjectCard';

export function Projects() {
  const projects = [
    {
      name: 'Alliant Agent Recruitment App',
      description: 'Enterprise recruitment application deployed internally for Allianz. Mobile app and web application built with Flutter',
      isPrivate: true,
      contributions: [
        'Created reusable UI components, responsive grid layouts, and validation structure to separate validation logic from UI',
        'Developed unit tests across data, domain, and BLoC layers using Mockito for dependency mocking',
        'Migrated Flutter mobile app to Flutter Web with responsive layouts and fixed web-specific issues including camera access and image cropping',
        'Migrated legacy server-side backoffice to Flutter Web SPA',
      ],
    },
    {
      name: 'ConnectIA ITB',
      description: 'Mobile application dedicated to ITB alumni to access news and information about the ITB community. Features include alumni news, events, campus programs, and business networking for alumni',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.justclick.iaitb&hl=id',
      appStoreUrl: 'https://apps.apple.com/id/app/connectia-itb/id6642699771?l=id',
      contributions: [
        'Migrated Rukun application codebase to create a general-purpose alumni community app',
        'Adapted features for ITB alumni community including news, events, and announcements',
        'Added business networking feature allowing alumni to post about their businesses, similar to an internal LinkedIn',
      ],
    },
    {
      name: 'Rukun',
      description: 'Mobile-based neighborhood management application for housing, clusters, apartments, and organizations. Features include resident profiles, announcements, financial reports, monthly billing, complaints handling, phone directory, regulations, and emergency button',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rukun.app&hl=en&gl=US',
      appStoreUrl: 'https://apps.apple.com/id/app/justclick-rukun/id6479233837?l=id',
      contributions: [
        'Led mobile developer teams, defining the coding standards and doing a code review',
        'Integrated Midtrans payment gateway for seamless transactions',
        'Mentoring intern and new hires to learn the codebase and best practices of the project',
        'Implemented WebSocket for real-time updates',
        'Built multi-functional chat feature supporting text, media, and message replies',
        'Implemented deep linking for seamless user navigation and content sharing',
      ],
    },
    {
      name: 'ERP Mobile Applications',
      description: 'Enterprise mobile application covering HR Management, Finance, and Attendance tracking for multiple companies',
      apps: [
        {
          name: 'BMM Attendance',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hrms.erp.bmm1&hl=en-ID',
          appStoreUrl: 'https://apps.apple.com/id/app/mattendance-bmm/id1639847534',
        },
        {
          name: 'RMI Attendance',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hrms.erp.rmi&hl=en-ID',
          appStoreUrl: 'https://apps.apple.com/id/app/mattendance-rmi/id1639847903',
        },
      ],
      contributions: [
        'Developed multiple enterprise mobile solutions using Flutter (PT GAG Nikel, PT Inconis, PT BMM, PT RMI)',
        'Implemented HR Management, Finance, and Attendance modules',
        'Implemented location-based attendance features with reliable sync mechanism',
        'Deployed to Play Store and App Store across multiple applications',
      ],
    },
    {
      name: '1 Tugas',
      description: 'KPI automatic system platform for organizing companies to achieve targets and review employee performance',
      appStoreUrl: 'https://apps.apple.com/id/app/1tugas/id6479016199?l=id',
      contributions: [
        'Refactored Dart code to avoid dynamic types, organize code into separate files, and separate widgets into modules',
        'Built a reusable FormBuilder to speed up form development',
      ],
    },
    {
      name: 'Fielder Pro',
      description: 'Field application for field officers installing power poles. Tasks are displayed on a map, allowing fielders to navigate to locations, mark completed tasks on the map, and all functionality works offline',
      contributions: [
        'Built offline-ready fielding app using Flutter Hive for local data storage and ArcGIS Map SDK for offline maps',
        'Integrated Android Service API to download large map files in the background',
        'Fixed abandoned ArcGIS SDK package by correcting native code implementation and making it compatible with Flutter',
      ],
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">Projects</h2>
          <p className="text-gray-600">
            Applications I've built and contributed to
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
