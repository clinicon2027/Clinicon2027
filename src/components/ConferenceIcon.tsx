import React from 'react';
import {
  GraduationCap,
  MessagesSquare,
  Stethoscope,
  Scan,
  Brain,
  Timer,
  Smartphone,
  Gamepad2,
  Gamepad,
  Crown,
  Flame,
  Waves,
  BookOpen,
  Calendar,
  Activity,
  Trophy,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const ConferenceIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'school':
      return <GraduationCap className={className} />;
    case 'forum':
      return <MessagesSquare className={className} />;
    case 'stethoscope':
      return <Stethoscope className={className} />;
    case 'radiology':
      return <Scan className={className} />;
    case 'psychology':
      return <Brain className={className} />;
    case 'timer':
      return <Timer className={className} />;
    case 'smartphone':
      return <Smartphone className={className} />;
    case 'sports_esports':
      return <Gamepad2 className={className} />;
    case 'videogame_asset':
      return <Gamepad className={className} />;
    case 'strategy':
      return <Crown className={className} />;
    case 'directions_run':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M7 21l3-7 3 2 4 5" />
          <path d="M17 11l-4-3-3 2-4-2" />
          <path d="M10 8l1 6 3 1" />
        </svg>
      );
    case 'sports_basketball':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2.1 12h19.8" />
          <path d="M12 2.1v19.8" />
          <path d="M4.93 4.93a10 10 0 0 1 14.14 14.14" />
          <path d="M4.93 19.07a10 10 0 0 0 14.14-14.14" />
        </svg>
      );
    case 'sports_volleyball':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m12 12-4.5 9" />
          <path d="M12 12 7.5 3" />
          <path d="M12 12h10" />
          <path d="M7 7.5c2.5-1.5 5.5-1 7.5.5" />
          <path d="M16 16.5c-1 2.5-3.5 4-6 4" />
          <path d="M16.5 7.5c1.5 2.5 1 5.5-.5 7.5" />
        </svg>
      );
    case 'sports_soccer':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 7 15 9.5 14 13 10 13 9 9.5" />
          <path d="m12 7-2-5" />
          <path d="m15 9.5 4.5-2" />
          <path d="M14 13l3.5 3.5" />
          <path d="M10 13l-3.5 3.5" />
          <path d="M9 9.5 4.5 7.5" />
        </svg>
      );
    case 'sports_tennis':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="15" cy="9" r="6" />
          <path d="M10.5 13.5 4 20" />
          <path d="M3 21l1-1" />
          <path d="M15 5a6 6 0 0 0-4 4.5" />
          <path d="M19 9a6 6 0 0 0-4.5 4" />
        </svg>
      );
    case 'waves':
      return <Waves className={className} />;
    case 'history_edu':
      return <BookOpen className={className} />;
    case 'calendar_today':
      return <Calendar className={className} />;
    default:
      return <Activity className={className} />;
  }
};
