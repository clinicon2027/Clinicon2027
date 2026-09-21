import { AcademicEvent, EventRuleDetail, FocaSlide, ScheduleDay, SportItem } from '../types';

export const CLINICON_LOGO_URL =
  `${import.meta.env.BASE_URL}clinicon-2027-logo.png`;

export const RESEARCH_SHOWCASE_IMG_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA-i6sVR6AKxxerwzjKK0Psg64Wm7XlsL1ISyeLCfSMa4Y6IJLkJ0wqPIr_mhA0AXNk4VmsoPxaQH3JbTNz9hCP8yCgS76bang7r3Na_00vknpA-AY6_Pfk3iXvjw5FEthpvZJ7DNozST65OM7SPITiT7qI_FzNujb_HXttrLJ194HWRiHAMS8wSz7cTptu7JplMh5OEaurtaOXQRSPwt4OOrZqjnqhK9FPsvCYxitZyhrx9Bf38VEV';

export const FACULTY_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZgDvk8qvlxCqovRQ_TCxoKOTJfRNLTRuQIjFmab1NrJVPolWZuyizg-_OoNBiSO7IbIlMEU5d_Lj0Opk8e-6H4GoOkxn1p0Ay4GVAfY2VNE_ql-uLl0K2mibCdf_zvP6BpcyOTjfFPB4er4tVPI1avnqNkdmfOfWfkNYxyrD0Cd8R5ZboBbDwDc3xBJeCwWUWqBIsIxoQiZTTEJ76iYHB1zqKAxfjnr_qIv5aE57fJiWNQQy69X94MyCfSZqhe3Lmw';

export const WORLIN_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHwAj8fh0IhjJX0L6paHVLGAk8CNlogLEB4M8awP70MwyylMrbfFX-5ywjJ18bsX5816Ke3ovqFByfrEP8vo9ASwkBdZ7wwzjOuPJZ9KZzCq_cMkvRdT8TQgMcDAtEIbpS0LcknDzeHFWv7Htrmhnk1qlRkD_C3cAEh5rj0riJAp4J96KPY__p8s-h1zFvEj_5PWAqZ9xSEBk32iLSNSNJtsbbcFa5cfpT95GpZMwAeUkS73KY1XfuhRQxbvpQaME2WQ';

export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaa8ymfVaybD6XX0nxva1M2kpW-6koS2rpgm3Ao8Swo6AIDg/viewform?embedded=true';

export const STATS = [
  { value: '4+', label: 'International Faculties' },
  { value: '150+', label: 'Participants' },
  { value: '12+', label: 'Workshops' },
  { value: '3', label: 'Gala Nights' },
];

export const ACADEMIC_EVENTS: AcademicEvent[] = [
  {
    id: 'academic_quiz',
    title: 'Academic Quiz',
    tagline: 'Rules Applied',
    badge: 'Rules Applied',
    description:
      'Test your clinical knowledge in teams. A high-stakes, fast-paced trivia challenge covering everything from basic anatomy to complex pathophysiology.',
    iconName: 'school',
  },
  {
    id: 'medical_debate',
    title: 'Medical Debate',
    tagline: 'Team Based',
    badge: 'Team Based',
    description:
      'Engage in ethical and medical discourse. Defend your stance on contemporary healthcare dilemmas in front of a panel of experts.',
    iconName: 'forum',
  },
  {
    id: 'osce',
    title: 'OSCE',
    tagline: 'Practical',
    badge: 'Practical',
    description:
      'Objective Structured Clinical Examination. Real-world simulations designed to test your diagnostic skills and patient communication efficiency.',
    iconName: 'stethoscope',
  },
  {
    id: 'pixel_prognosis',
    title: 'Pixel Prognosis',
    tagline: 'Imaging Tech',
    badge: 'Imaging Tech',
    description:
      'Radiology and imaging interpretation challenge. Identify subtle anomalies in X-rays, CTs, and MRIs under time pressure.',
    iconName: 'radiology',
  },
  {
    id: 'clinical_charades',
    title: 'Clinical Charades',
    tagline: 'Social Event',
    badge: 'Social Event',
    description:
      'Medical terms through non-verbal cues. A light-hearted but intense game testing how well you can describe complex syndromes without words.',
    iconName: 'psychology',
  },
  {
    id: 'jam',
    title: 'JAM (Just A Minute)',
    tagline: 'Elite Skill',
    badge: 'Elite Skill',
    description:
      'Quick thinking on spontaneous medical topics. Speak for sixty seconds without repetition, hesitation, or deviation.',
    iconName: 'timer',
  },
];

export const SPORTS_DATA: {
  team: SportItem[];
  individual: SportItem[];
  esports: SportItem[];
} = {
  team: [
    { id: 'basketball', title: 'Basketball', category: 'team', iconName: 'sports_basketball' },
    { id: 'volleyball', title: 'Volleyball', category: 'team', iconName: 'sports_volleyball' },
    { id: 'football', title: 'Football', category: 'team', iconName: 'sports_soccer' },
    { id: 'relay', title: 'Relay', category: 'team', iconName: 'directions_run' },
    { id: 'tennis_mixed', title: 'Tennis (Mixed & Doubles)', category: 'team', iconName: 'sports_tennis' },
    { id: 'badminton_mixed', title: 'Badminton (Mixed & Doubles)', category: 'team', iconName: 'sports_tennis' },
  ],
  individual: [
    { id: 'chess', title: 'Chess', category: 'individual', iconName: 'strategy' },
    { id: 'athletics', title: 'Athletics (100m and 1600m)', category: 'individual', iconName: 'directions_run' },
    { id: 'tennis_singles', title: 'Tennis (Singles)', category: 'individual', iconName: 'sports_tennis' },
    { id: 'badminton_singles', title: 'Badminton (Singles)', category: 'individual', iconName: 'sports_tennis' },
  ],
  esports: [
    { id: 'pubg', title: 'PUBG Mobile', category: 'esports', iconName: 'smartphone' },
    { id: 'cod', title: 'COD Mobile', category: 'esports', iconName: 'sports_esports' },
    { id: 'fifa', title: 'FIFA', category: 'esports', iconName: 'videogame_asset' },
  ],
};

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    id: 'day1',
    tabLabel: 'Day 01 (May 2027)',
    dateTitle: 'Day 01 (May 2027)',
    events: [
      {
        time: '7:50 to 9:00 am',
        title: 'Delegate Arrival & Check-in',
        accent: 'primary',
      },
      {
        time: '9:00 to 10:00 am',
        title: 'Gala Opening Ceremony',
        description: 'Location: Faculty of Medicine, University of East Sarajevo-FOČA',
        accent: 'gold',
      },
      {
        time: 'TBD',
        title: 'Academic Events Launch',
        description: 'Quiz, Debate, OSCE, and Pixel Prognosis',
        accent: 'neutral',
      },
      {
        time: 'Evening',
        title: 'Taste of FOČA',
        description: 'Cultural and Food Heritage Fair',
        accent: 'neutral',
      },
    ],
  },
  {
    id: 'day2',
    tabLabel: 'Day 02 (Sports & Networking)',
    dateTitle: 'Day 02 (Sports & Networking)',
    events: [
      {
        time: 'Full Day',
        title: 'Sports Programme (TBD)',
        description: 'River activities, football, and athletic competitions.',
        accent: 'secondary',
      },
      {
        time: 'Evening',
        title: 'Welcome Reception',
        description: 'Location: Stay Tuned',
        accent: 'neutral',
      },
    ],
  },
  {
    id: 'day3',
    tabLabel: 'Day 03 (Closing & Outreach)',
    dateTitle: 'Day 03 (Closing & Outreach)',
    events: [
      {
        time: '8:00 to 9:00 am',
        title: 'Research Paper Presentation',
        accent: 'primary',
      },
      {
        time: '9:00 to 10:00 am',
        title: 'Panel Discussion with Doctors',
        accent: 'primary',
      },
      {
        time: '11:00 am to 2:00 pm',
        title: 'Parallel Outreach Tracks',
        isSplit: true,
        splitDetails: [
          {
            category: 'Pre-clinical (1-3 yr)',
            title: 'Cultural Outreach Program',
            timeAndPlace: '11:00 am to 2:00 pm',
          },
          {
            category: 'Clinical (4-6 yr)',
            title: 'Medical Camp',
            timeAndPlace: '11:00 am to 2:00 pm | City Center',
          },
        ],
      },
      {
        time: 'Artistic Event',
        title: 'Painting in the Park',
        description:
          'Location: Aladža Park. Note: This is strictly only for those who register beforehand; no entries will be accepted at the venue.',
        accent: 'gold',
      },
      {
        time: '4:00 to 6:00 pm',
        title: 'Medal Distribution Ceremony',
        accent: 'secondary',
      },
      {
        time: '6:00 to 10:00 pm',
        title: 'Grand Finale Party',
        description:
          "An unforgettable night of music and celebration to mark the summit's conclusion.",
        accent: 'primary',
      },
    ],
  },
];

export const FOCA_SLIDES: FocaSlide[] = [
  {
    title: 'Foča Panorama',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAT6XZwr1cb6OtiIWsgw1PIxPak4RWI91OwFr0tFh7UtbFEaTyrGM4T2LLEZ8rOf3vVEvpxNqGK6UtNuPGtcoiOraVl2sEz0L6zLC2qNkj6_ejDIKYyb46-S5zFNhhGrmsGE3uTuyY-Dev3-9Tf_Kfj2qBTcesfcVtZ_6tgwxjadPqYrXD_b4fcz9oy1b2oOFh3T35mb0uMi3Nuu1NWYDQdQ5ybiorjtyOaJJn66IdeM5JqIbpZ5SHQqMEqh4tytYLg1Q',
    duration: 8000,
  },
  {
    title: 'Sutjeska Monument',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0Eb9ubvfaXcuPjxNfM7zEGT62M4FEGf-DoNH6YRUlM31t8Z9pmr6LHR4fqYsEZ2dilkCkn6ST4CL2Fetbvo-5PdYWtHgQRsXB-zr0rRuxq6CpqQGFSPRwRjGW1t3xcTbHysIrmvKpvm8junE7i7JZA9NJwOiLDxeqoGq0-hWd2YX57axZHrCZmvae5cXBaLnjmEbF3-YjPqjnI1USbxSmvcZ7eQd9AYPruV370-2SlI4AFfiCNodyzefoZOtwAGJvg',
    duration: 5000,
  },
  {
    title: 'Sand Pyramids',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnVvdAxoyd3kh-93RW771SyxjvriSdrLvy71BnoMkOHGyyvSPfVeXOazq6OVuNAzRwjDZ5zoJNSV-UWhvs3FDL8ODLLFZ07gxviCdLaqC88r5CIqJ3hGfR-HhkmU1TO37taxRVIJSZP9-In90SCQ9bAeJC2B7o6NYQZiL95mqXffNlnJU1EiCQKiWmlXGzHe1GY6OHnslv_U95ZcpgZ4Rq2dG_P7XI8G5FzcuYLBzLMUjn_4SKaOWeTR4ekWmihIclXw',
    duration: 5000,
  },
  {
    title: 'Aladža Mosque',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBi13tPembvlw4Hk8X8QOK28gYWII6Df5KuB0i3VC-r7ShcHKzDzTou7PPL0P-eIzde3nQGfWx9vwylOpqexH40IZ2ndxOJcyUOhu_SOMIzkvwTqDjrd3W0O1KurAanPkan4PgiF80H5o_HB99V_pdpnjMn9H1pwCz-M9Fl6wF1JMlzRT3X8nxWyVDuGq54MogD-8QSfAbQR6YAxlI9kNU4Z39ZnqrpE0QtrB73nkbJaLJbit2fdch3mGXVIcpNEkRyIg',
    duration: 5000,
  },
  {
    title: 'St. Sava Church',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj1FTO3353BHdz9zLIDE-Fg5xDx6IiBWObhdn7vaXHBT3wK2gLIOnSZAqTZsrUiPyEDCRH6G4X2aQfEeP6MvP-gZCeOzAUYwqx2b7CQe5Y8Jl36Enisf4940Avpltvw-hRgP8U5WsadeAmKc9bcmBfQvWWutuv-17iSUi6LQIwV8SbwpfjhUUcAGZQoPV_e_kjWj-YTJoGhi88zsNMQPY1t-GvIBv8PRgHNZB0rHG_RiNRWUDFy3svWB_LGNA-SyijJA',
    duration: 5000,
  },
];

export const EVENT_RULES_MAP: Record<string, EventRuleDetail> = {
  academic_quiz: {
    id: 'academic_quiz',
    title: 'Academic Quiz',
    subtitle: 'Rules and Regulations',
    iconName: 'school',
    sections: [
      { head: 'Requirements', list: ['Team Size: 4 participants per team.'] },
      {
        head: 'Preliminary Round',
        list: [
          '50 questions total.',
          'Correct answer: +2 points.',
          'Incorrect answer: No negative marking.',
        ],
      },
      {
        head: 'Rapid-Fire Tie-Breaker',
        list: ['In case of a tie for qualifying spots.', 'Sudden-death or rapid-fire mechanism.'],
      },
      {
        head: 'Final Round',
        list: [
          '30-40 questions total.',
          'Buzzer format using a dedicated app.',
          'Total time per question: 15 seconds.',
        ],
      },
      {
        head: 'Steal Mechanism',
        list: [
          'First to buzz gets the chance.',
          'Correct answer on steal: +points.',
          'Incorrect answer or steal: -1 point.',
        ],
      },
      { head: 'Hint System', list: ['Available during specific rounds.'] },
      {
        head: 'High-Value Questions',
        list: [
          'Last 10 questions of the final.',
          '8 points each for a correct answer.',
          '-2 points for an incorrect answer.',
        ],
      },
      { head: 'General Conduct', list: ['No mobile phones allowed during the quiz.'] },
    ],
  },
  medical_debate: {
    id: 'medical_debate',
    title: 'Medical Debate',
    subtitle: 'Rules and Regulations',
    iconName: 'forum',
    sections: [
      { head: 'Requirements', list: ['Team Size: 3 participants per team.'] },
      { head: 'Format', list: ['Topics and sides (For/Against) will be provided beforehand.'] },
      {
        head: 'Round Structure',
        list: [
          'Opening Statement: 3 minutes.',
          'Cross-Examination (X-Q): 2 minutes.',
          'Rebuttal: 2 minutes.',
          'Closing Statement: 3 minutes.',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Time Strictness: Strict adherence to time limits.',
          'Off-Topic Rule: Arguments must remain relevant to the medical context.',
        ],
      },
      {
        head: 'Scoring Rubric (20 Points)',
        list: [
          'Detailed 20-point scoring system based on argument quality, delivery, and rebuttal effectiveness.',
        ],
      },
    ],
  },
  osce: {
    id: 'osce',
    title: 'OSCE',
    subtitle: 'Rules and Regulations',
    iconName: 'stethoscope',
    sections: [
      { head: 'Requirements', list: ['Team Size: 3 participants per team.'] },
      { head: 'Format', list: ['Multiple clinical departments covered.'] },
      {
        head: 'Round 1 Structure',
        list: [
          'Clinical Examination: 10-12 minutes.',
          'Case Presentation: 3-4 minutes.',
          'Cross-Examination (X-Q): 4-5 minutes.',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Allowed Materials: Only standard clinical tools (stethoscope, etc.).',
          'Case Presentation: Specific format requirements must be met.',
        ],
      },
      {
        head: 'Scoring Breakdown (50 Marks)',
        list: [
          'Detailed 50-mark breakdown for history taking, examination skills, and diagnosis.',
        ],
      },
      {
        head: 'Finals',
        list: ['Real Patient Round: Finalists will be assessed on actual patient interactions.'],
      },
    ],
  },
  pixel_prognosis: {
    id: 'pixel_prognosis',
    title: 'Pixel Prognosis',
    subtitle: 'Rules and Regulations',
    iconName: 'radiology',
    sections: [
      { head: 'Requirements', list: ['Team Size: 2 participants per team.'] },
      {
        head: 'Preliminary Round',
        list: ['10 image questions.', 'Time limit: 1.5 minutes per image.'],
      },
      {
        head: 'Question Structure (3-Part)',
        list: [
          '1. Identify the Modality (basic/detail).',
          '2. Provide the Diagnosis.',
          '3. Give a Justification.',
        ],
      },
      { head: 'Tie-Breaker', list: ['Buzzer round for resolving ties.'] },
    ],
  },
  clinical_charades: {
    id: 'clinical_charades',
    title: 'Clinical Charades',
    subtitle: 'Rules and Regulations',
    iconName: 'psychology',
    sections: [
      { head: 'Requirements', list: ['Team Size: 3 participants per team.'] },
      { head: 'Core Concept', list: ['Acting out medical diseases or conditions without words.'] },
      { head: 'Round Structure', list: ['Minimum of 2 rounds per match.'] },
      {
        head: 'Acting/Guessing Rules',
        list: [
          'Total time: 1 minute 25 seconds.',
          'Maximum of 3 guesses allowed.',
          'Up to 2 clarifications allowed.',
        ],
      },
      {
        head: 'Scoring',
        list: ['Correct guess <45s: 3 points.', 'Correct guess >45s: 2 points.'],
      },
    ],
  },
  jam: {
    id: 'jam',
    title: 'JAM (Just A Minute)',
    subtitle: 'Rules and Regulations',
    iconName: 'timer',
    sections: [
      { head: 'Requirements', list: ['Team Size: 3 participants per team.'] },
      {
        head: 'Format',
        list: [
          'Preparation: 3 minutes.',
          'Speaking: 2 minutes.',
          'Cross-Examination (X-Q): 2 minutes.',
        ],
      },
      {
        head: 'Topic Areas',
        list: ['Spontaneous medical topics covering various clinical and ethical fields.'],
      },
      {
        head: 'Scoring',
        list: [
          'Base Scoring: 5 points.',
          'Maximum possible score: 8 points (with bonus for exceptional delivery/content).',
        ],
      },
    ],
  },
  basketball: {
    id: 'basketball',
    title: 'Basketball',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'sports_basketball',
    sections: [
      {
        head: 'Team Requirements',
        kv: [
          ['Min Players', '5 on-field + up to 3 substitutes'],
          ['Number of Teams', '4'],
          ['Format', 'Knockout'],
        ],
      },
      {
        head: 'Match Duration',
        kv: [
          ['Semi-finals', '2 x 10-min halves'],
          ['Final', '2 x 15-min halves'],
        ],
      },
      {
        head: 'Rules',
        list: [
          'Jerseys will be provided by the organising committee.',
          'Standard FIBA fouls apply (personal, technical, unsportsmanlike).',
          'Disqualification rules: 5 personal fouls or 2 technical fouls.',
          'Timeouts: One 60-second timeout per team per half.',
          'Overtime: 3-minute periods until a winner is decided.',
          'Referee decisions are final and binding.',
        ],
      },
      {
        head: 'Suggested Schedule',
        table: {
          cols: ['Match', 'Duration'],
          rows: [
            ['Semi-final 1', '20 min (2x10)'],
            ['Semi-final 2', '20 min (2x10)'],
            ['Final', '30 min (2x15)'],
          ],
        },
      },
    ],
  },
  volleyball: {
    id: 'volleyball',
    title: 'Volleyball',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'sports_volleyball',
    sections: [
      {
        head: 'Requirements',
        kv: [
          ['Min Players', '6 per team'],
          ['Number of Teams', '4 Teams'],
        ],
      },
      {
        head: 'Match Duration',
        kv: [['Sets', 'Each set up to 15 points or maximum 15 minutes']],
      },
      {
        head: 'Rules & Regulations',
        list: [
          'Knockout format will be followed.',
          'Best of 1 set for semi-finals; final can be best of 3 if time permits.',
          'A team needs at least 6 players to start.',
          'Rotation must be followed after winning service.',
          'No touching the net during play.',
          'Maximum 3 touches before returning the ball.',
          'Referee’s decision will be final.',
          'Unsportsmanlike conduct may lead to disqualification.',
        ],
      },
      {
        head: 'Suggested Match Schedule',
        table: {
          cols: ['Match', 'Time'],
          rows: [
            ['Semi-final 1', '15 min'],
            ['Semi-final 2', '15 min'],
            ['Break', '5–10 min'],
            ['Final', '20 min'],
          ],
        },
      },
    ],
  },
  football: {
    id: 'football',
    title: 'Football',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'sports_soccer',
    sections: [
      {
        head: 'Requirements',
        kv: [
          ['Min Players', '7 per team (5 on-field + 2 substitutes recommended)'],
          ['Number of Teams', '4 Teams'],
        ],
      },
      {
        head: 'Match Duration',
        kv: [
          ['Semi-finals', '15 minutes each'],
          ['Final', '20 minutes'],
        ],
      },
      {
        head: 'Rules & Regulations',
        list: [
          'Knockout format will be followed.',
          'Each team must report 10 minutes before the match.',
          'Rolling substitutions are allowed.',
          'No dangerous tackles or violent conduct.',
          'Offside rule optional depending on ground size.',
          'Yellow card = warning; Red card = direct suspension from that match.',
          'If scores are tied, a penalty shootout (3 penalties each) will decide the winner.',
          'Referee’s decision will be final.',
        ],
      },
      {
        head: 'Suggested Match Schedule',
        table: {
          cols: ['Match', 'Time'],
          rows: [
            ['Semi-final 1', '15 min'],
            ['Semi-final 2', '15 min'],
            ['Break', '10 min'],
            ['Final', '20 min'],
            ['Award / Buffer', '10–15 min'],
          ],
        },
      },
    ],
  },
  relay: {
    id: 'relay',
    title: 'Relay Race',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'directions_run',
    sections: [
      {
        head: 'Team Composition',
        table: {
          cols: ['Role', 'Gender', 'Count'],
          rows: [
            ['Runner 1', 'Boy', '1'],
            ['Runner 2', 'Boy', '1'],
            ['Runner 3', 'Boy', '1'],
            ['Runner 4', 'Girl', '1'],
            ['Total', 'Mixed', '4'],
          ],
        },
      },
      {
        head: 'Rules & Regulations',
        list: [
          'Teams consist of exactly 3 boys and 1 girl.',
          'Each member runs an equal segment.',
          'Standard baton exchange rules apply — baton must not be dropped.',
          'Baton must be passed within the designated exchange zone only.',
          'Knockout format applies — losing teams are eliminated.',
        ],
      },
    ],
  },
  tennis_mixed: {
    id: 'tennis_mixed',
    title: 'Tennis (Mixed & Doubles)',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'sports_tennis',
    sections: [
      {
        head: 'Requirements',
        kv: [
          ['Team Size', '4 players required — 2 boys + 2 girls — playing in doubles format'],
          ['Number of Teams', 'Knockout Format'],
        ],
      },
      {
        head: 'Match Structure',
        kv: [
          ['Format', 'Best of 3 sets'],
          ['Set Duration', 'Limited to a maximum of 20 minutes'],
        ],
      },
      {
        head: 'Rules & Regulations',
        list: [
          'Losing team is immediately eliminated (Knockout).',
          'All teams must arrive 10 minutes before the match.',
          'Standard ITF tennis rules apply. No coaching permitted.',
          'If a set is tied, a tiebreaker is played — first to 7 points wins.',
          "Referee's decision is final and binding.",
        ],
      },
    ],
  },
  badminton_mixed: {
    id: 'badminton_mixed',
    title: 'Badminton (Mixed & Doubles)',
    subtitle: 'Team Sports — Official Rules',
    iconName: 'sports_tennis',
    sections: [
      {
        head: 'Requirements',
        kv: [
          ['Team Size', 'Maximum 4 players allowed — 2 boys + 2 girls — playing in doubles format'],
          ['Number of Teams', 'Knockout Format'],
        ],
      },
      {
        head: 'Match Structure',
        kv: [
          ['Format', 'Best of 1 game'],
          ['Match Duration', 'Limited to a maximum of 15 minutes'],
        ],
      },
      {
        head: 'Rules & Regulations',
        list: [
          'Losing team is immediately eliminated (Knockout).',
          'All teams must arrive 10 minutes before the match.',
          'Standard BWF rules apply with a rally point scoring system.',
          'Players must not touch the net at any point.',
          'If the match is tied, a 3-minute extension applies.',
          "Referee's decision is final and binding.",
        ],
      },
    ],
  },
  chess: {
    id: 'chess',
    title: 'Chess',
    subtitle: 'Individual Strategy — Official Rules',
    iconName: 'strategy',
    sections: [
      {
        head: 'Format & Structure',
        list: [
          'Discipline: Individual',
          'Squad size: 2 per university',
          'Time control: Rapid (10 min)',
          'Winning: Checkmate, resignation, or time expiration',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Standard FIDE rules apply.',
          'Touch-move strictly enforced.',
          'Illegal moves: 1st adds 2 min to opponent, 2nd results in loss.',
          'Armageddon tiebreak: White 6m, Black 5m, Black wins on draw.',
        ],
      },
    ],
  },
  athletics: {
    id: 'athletics',
    title: 'Athletics (100m and 1600m)',
    subtitle: 'Individual Sports — Official Rules',
    iconName: 'directions_run',
    sections: [
      {
        head: '100 M RACE',
        list: [
          'Separate categories for boys and girls.',
          'Each participant competes individually.',
          'Standard 100 m sprint rules apply.',
          'No false starts — first false start disqualifies that participant.',
        ],
      },
      {
        head: '1500 M / 1600 M RACE',
        list: [
          'Separate categories for boys and girls.',
          'Each participant competes individually.',
          'Standard distance track rules apply.',
          'Runners must keep within rules — obstruction of other runners is not permitted.',
        ],
      },
    ],
  },
  tennis_singles: {
    id: 'tennis_singles',
    title: 'Tennis (Singles)',
    subtitle: 'Individual Sports — Official Rules',
    iconName: 'sports_tennis',
    sections: [
      {
        head: 'Format',
        list: [
          'Singles competition — 1 player per match',
          'Knockout format; the losing player is eliminated.',
          'The winner advances to the next round.',
        ],
      },
      {
        head: 'Match Structure',
        list: [
          'Matches will be played as Best of 3 sets.',
          "Each set is subject to the tournament's designated time limit.",
          'Standard ITF tennis rules apply throughout.',
          'No coaching is permitted during play.',
        ],
      },
      {
        head: 'Scoring & Tiebreak',
        list: [
          'Standard tennis scoring applies.',
          'If a set reaches a tie at 6–6, a 7-point tiebreak will be played.',
          'The first player to reach 7 points with a minimum 2-point advantage wins the tiebreak.',
        ],
      },
      {
        head: 'Punctuality & Fair Play',
        list: [
          'Players must report to the court 10 minutes before their scheduled match.',
          "Failure to appear on time may result in a walkover at the referee's discretion.",
          'Players must demonstrate sportsmanship and respect toward opponents and officials.',
          "The referee's decision on match-related disputes is final and binding.",
        ],
      },
    ],
  },
  badminton_singles: {
    id: 'badminton_singles',
    title: 'Badminton (Singles)',
    subtitle: 'Individual Sports — Official Rules',
    iconName: 'sports_tennis',
    sections: [
      {
        head: 'Format',
        list: [
          'Singles competition (1 player per match)',
          'Knockout format; losing player is eliminated.',
        ],
      },
      {
        head: 'Match Structure',
        list: [
          'Best of 1 game.',
          'Standard BWF rules with rally-point scoring.',
          'Point awarded after every rally; server winning the rally scores a point.',
        ],
      },
      {
        head: 'Service & Net Play',
        list: [
          'Diagonal service; court side determined by score.',
          'No touching the net with body or racket.',
        ],
      },
      {
        head: 'Punctuality',
        list: [
          'Report 10 minutes before match time.',
          'Late arrival may result in a walkover.',
          'Referee’s decision is final.',
        ],
      },
    ],
  },
  pubg: {
    id: 'pubg',
    title: 'PUBG Mobile',
    subtitle: 'eSports — Squad Team Deathmatch',
    iconName: 'smartphone',
    sections: [
      {
        head: 'Format & Structure',
        list: [
          'Mode: Team Deathmatch (TDM)',
          'Structure: 3 rounds, 3 games per round',
          'Advancement: Best-of-3 (Bo3) fixture',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Squad size: 4 active + 1 sub.',
          'Score limit wins the game.',
          'No hacks, emulators, or unauthorized game mods.',
          'Matches must start within 10 minutes of call.',
        ],
      },
    ],
  },
  cod: {
    id: 'cod',
    title: 'COD Mobile',
    subtitle: 'eSports — Squad Team Deathmatch',
    iconName: 'sports_esports',
    sections: [
      {
        head: 'Format & Structure',
        list: [
          'Mode: Team Deathmatch (TDM)',
          'Structure: 3 rounds, 3 games per round',
          'Advancement: Best-of-3 (Bo3) fixture',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Squad size: 5 active + 1 sub.',
          'Standard tournament loadout restrictions.',
          'No pay-to-win attachments or perks.',
          'Strict anti-cheat adherence.',
        ],
      },
    ],
  },
  fifa: {
    id: 'fifa',
    title: 'FIFA',
    subtitle: 'eSports — Console Head-to-Head',
    iconName: 'videogame_asset',
    sections: [
      {
        head: 'Format & Structure',
        list: [
          'Mode: 1 vs 1 Head-to-Head',
          'Match length: 2 x 6-min halves',
          'Advancement: Direct Knockout',
        ],
      },
      {
        head: 'Rules',
        list: [
          'Venue-provided official gear & controllers.',
          'Match decided by goals (straight to penalty shootout if level after extra time).',
          'Any standard club or national team choice allowed.',
          'No custom squads or edited players.',
        ],
      },
    ],
  },
};
