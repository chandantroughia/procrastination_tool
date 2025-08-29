export interface Analytics {
  userId: string;
  period: AnalyticsPeriod;
  data: AnalyticsData;
  generatedAt: Date;
}

export type AnalyticsPeriod = 'day' | 'week' | 'month' | 'year' | 'custom';

export interface AnalyticsData {
  overview: OverviewStats;
  productivity: ProductivityStats;
  focus: FocusStats;
  tasks: TaskAnalytics;
  trends: TrendData[];
  insights: Insight[];
}

export interface OverviewStats {
  totalFocusTime: number; // in minutes
  totalSessions: number;
  averageSessionLength: number; // in minutes
  completionRate: number; // percentage
  productivityScore: number; // 0-100
  streak: number; // current streak in days
  longestStreak: number; // longest streak in days
}

export interface ProductivityStats {
  hourlyProductivity: {
    hour: number;
    productivity: number; // 0-100
    focusTime: number; // in minutes
  }[];
  dailyProductivity: {
    date: string;
    productivity: number; // 0-100
    focusTime: number; // in minutes
    sessions: number;
  }[];
  weeklyProductivity: {
    week: string;
    averageProductivity: number; // 0-100
    totalFocusTime: number; // in minutes
    totalSessions: number;
  }[];
}

export interface FocusStats {
  focusTimeByDay: {
    date: string;
    focusTime: number; // in minutes
    breakTime: number; // in minutes
    sessions: number;
  }[];
  focusTimeByHour: {
    hour: number;
    focusTime: number; // in minutes
    sessions: number;
  }[];
  interruptions: {
    date: string;
    count: number;
    averageDuration: number; // in minutes
  }[];
  focusQuality: {
    date: string;
    quality: number; // 0-100
    distractions: number;
  }[];
}

export interface TaskAnalytics {
  tasksByStatus: Record<string, number>;
  tasksByPriority: Record<string, number>;
  tasksByCategory: Record<string, number>;
  completionRate: number; // percentage
  averageTimeToComplete: number; // in minutes
  overdueTasks: number;
  tasksCompletedToday: number;
}

export interface TrendData {
  date: string;
  focusTime: number; // in minutes
  productivity: number; // 0-100
  sessions: number;
  tasksCompleted: number;
}

export interface Insight {
  id: string;
  type: 'positive' | 'negative' | 'neutral';
  title: string;
  description: string;
  metric: string;
  value: number;
  change: number; // percentage change
  recommendation?: string;
  timestamp: Date;
}

export interface AnalyticsExport {
  userId: string;
  period: AnalyticsPeriod;
  startDate: Date;
  endDate: Date;
  data: AnalyticsData;
  exportedAt: Date;
  format: 'json' | 'csv' | 'pdf';
}

export interface AnalyticsSettings {
  enabled: boolean;
  shareData: boolean;
  trackInteractions: boolean;
  trackPerformance: boolean;
  retentionDays: number;
  exportEnabled: boolean;
}


