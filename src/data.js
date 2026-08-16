export const profile = {
  name: 'Shahriar',
  firstName: 'Shahriar',
  title: 'Flutter App Developer',
  headline: 'Award-winning Flutter Developer',
  location: 'Dhaka, Bangladesh',
  availability: 'available worldwide.',
  email: 'hello@shahriar.dev',
  bio: [
    'I design and build clean, dependable mobile apps — from the first sketch of the architecture to watching real users get value from them.',
    'Over the past five years I have shipped apps across fintech, health, and developer tools. I care about the small details: the gestures, the transitions, the way things feel.',
    'When I am not shipping, I am contributing to the Flutter ecosystem and mentoring developers starting out.',
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
  recognitions: [
    { name: 'Awwwards', award: 'Site of the Day' },
    { name: 'FWA', award: 'Site of the Day' },
    { name: 'The Webby Awards', award: 'Honoree' },
  ],
}

export const projects = [
  {
    slug: 'moneo',
    title: 'Moneo',
    category: 'Personal Finance',
    year: '2025',
    theme: ['#eef3ff', '#cddfff'],
    intro:
      'A privacy-first budgeting app for iOS and Android that forecasts cash flow and syncs your bank in real time.',
    approach:
      'Privacy shaped every decision. All sensitive data is encrypted on-device with flutter_secure_storage, and the app works fully offline-first.',
    challenges:
      'Bank-sync integrations are fragile by nature. We built an adapter layer that isolates providers and keeps the local store stable.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    link: '#',
    code: '#',
  },
  {
    slug: 'pulse',
    title: 'Pulse',
    category: 'Health & Fitness',
    year: '2024',
    theme: ['#f2fff4', '#c9f2d8'],
    intro:
      'A workout and health tracker with haptic coaching, streak tracking, and fully offline activity history.',
    approach:
      'We optimised for the phone in the pocket — a glanceable home screen, one-thumb navigation, and a widget that updates without opening the app.',
    challenges:
      'Keeping health data correct across timezones and DST changes meant building a calendar engine tested against edge cases for years back.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Health Connect'],
    link: '#',
    code: '#',
  },
  {
    slug: 'wave-chat',
    title: 'Wave Chat',
    category: 'Messaging',
    year: '2024',
    theme: ['#fff4f2', '#ffd9d0'],
    intro:
      'An end-to-end encrypted messenger with disappearing messages, voice notes, and offline message queues.',
    approach:
      'We started from the sync engine — a CRDT-based local queue — then layered a clean, expressive UI on top.',
    challenges:
      'Reliable delivery over flaky networks meant designing offline queues and conflict resolution from day one.',
    stack: ['Flutter', 'WebRTC', 'Hive', 'WebSockets'],
    link: '#',
    code: '#',
  },
  {
    slug: 'marketiq',
    title: 'MarketIQ',
    category: 'Market Analytics',
    year: '2023',
    theme: ['#f6f2ff', '#ddccff'],
    intro:
      'A market analytics app streaming real-time prices with custom alerts and a fully interactive chart engine.',
    approach:
      'We focused on the feel of the data — 60fps scrolling, pinch-zoom candles, and alerts that arrive before you expect them.',
    challenges:
      'Rendering dense charts without jank meant writing a custom painter and offloading heavy math to isolates.',
    stack: ['Flutter', 'CustomPainter', 'WebSockets', 'Isolates'],
    link: '#',
    code: '#',
  },
  {
    slug: 'tripmate',
    title: 'TripMate',
    category: 'Travel Planner',
    year: '2023',
    theme: ['#fff9ec', '#ffe9b8'],
    intro:
      'A collaborative trip planner with shared itineraries, offline maps, and live budget tracking on the go.',
    approach:
      'The traveller was the client. We designed the app around low-signal zones — everything you plan is available offline.',
    challenges:
      'Real-time collaboration over patchy connections meant an offline-first model that reconciles edits when the signal returns.',
    stack: ['Flutter', 'Firestore', 'Mapbox', 'Bloc'],
    link: '#',
    code: '#',
  },
  {
    slug: 'mediremind',
    title: 'MediRemind',
    category: 'Healthcare',
    year: '2022',
    theme: ['#f0fbff', '#c9ecff'],
    intro:
      'A medication reminder app with smart schedules, caregiver sharing, and adherence reports for clinics.',
    approach:
      'Correctness over cleverness — dosing schedules are reviewed against clinical logic before they reach a patient.',
    challenges:
      'Medication schedules are irregular by nature. We built a scheduler engine that handles weekly, bi-weekly and tapering plans.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Push Notifications'],
    link: '#',
    code: '#',
  },
  {
    slug: 'ecotrack',
    title: 'EcoTrack',
    category: 'Sustainability',
    year: '2022',
    theme: ['#f2f7f0', '#d6e8c9'],
    intro:
      'A carbon-footprint tracker that turns daily habits into simple, honest visuals — no greenwashing.',
    approach:
      'We kept the data model small and honest, so every estimate is explainable and easy to audit.',
    challenges:
      'Making sustainability feel good rather than preachy meant iterating on tone and imagery until the app felt like a friend, not a report.',
    stack: ['Flutter', 'Dart', 'Charts', 'Hive'],
    link: '#',
    code: '#',
  },
]

export const skills = [
  'Flutter',
  'Dart',
  'Swift',
  'Kotlin',
  'Firebase',
  'Riverpod',
  'Bloc',
  'REST APIs',
  'GraphQL',
  'SQLite',
  'Hive',
  'Push Notifications',
  'CI/CD',
  'Figma',
]

export const experience = [
  {
    role: 'Senior Flutter Developer',
    company: 'Northwind Labs',
    period: '2023 — Present',
    description:
      'Leading a team of six building Flutter apps that serve over ten million users. The mobile app I built here cut cold-start time by 40% and ships every few days.',
  },
  {
    role: 'Flutter Developer',
    company: 'Pixelforge',
    period: '2021 — 2023',
    description:
      'Shipped customer-facing mobile apps in Flutter. The mobile app I built unified three product lines behind a single design system and REST layer.',
  },
  {
    role: 'Android Engineer (Intern)',
    company: 'CloudRise',
    period: '2020 — 2021',
    description:
      'Built native Android features in Kotlin, wired REST APIs, and automated deployments with Docker and GitHub Actions.',
  },
]