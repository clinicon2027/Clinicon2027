export interface AcademicEvent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface SportItem {
  id: string;
  title: string;
  category: 'team' | 'individual' | 'esports';
  iconName: string;
}

export interface ModalSection {
  head: string;
  list?: string[];
  kv?: [string, string][];
  table?: {
    cols: string[];
    rows: string[][];
  };
}

export interface EventRuleDetail {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  sections: ModalSection[];
  notes?: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description?: string;
  location?: string;
  accent?: 'primary' | 'gold' | 'secondary' | 'neutral';
  isSplit?: boolean;
  splitDetails?: {
    category: string;
    title: string;
    timeAndPlace: string;
  }[];
}

export interface ScheduleDay {
  id: string;
  tabLabel: string;
  dateTitle: string;
  events: ScheduleEvent[];
}

export interface FocaSlide {
  title: string;
  imageUrl: string;
  duration: number; // ms
}
