export interface Timer {
  id: string;
  type: TimerType;
  duration: number; // in minutes
  remaining: number; // in seconds
  status: TimerStatus;
  startTime?: Date;
  endTime?: Date;
  pausedAt?: Date;
  totalPausedTime: number; // in seconds
  userId: string;
  taskId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TimerType = 'pomodoro' | 'break' | 'long-break' | 'custom';
export type TimerStatus = 'idle' | 'running' | 'paused' | 'completed' | 'stopped';

export interface TimerSettings {
  workDuration: number; // in minutes
  shortBreakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  longBreakInterval: number; // every N pomodoros
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
  autoSwitchTasks: boolean;
  soundEnabled: boolean;
  notificationEnabled: boolean;
}

export interface TimerSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // in minutes
  type: TimerType;
  taskId?: string;
  userId: string;
  interruptions: number;
  completed: boolean;
  notes?: string;
}

export interface TimerStats {
  totalSessions: number;
  totalFocusTime: number; // in minutes
  totalBreakTime: number; // in minutes
  averageSessionLength: number; // in minutes
  longestSession: number; // in minutes
  completionRate: number; // percentage
  currentStreak: number; // days
  longestStreak: number; // days
}

export interface TimerNotification {
  id: string;
  type: 'start' | 'pause' | 'resume' | 'complete' | 'break';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export interface TimerAnalytics {
  dailyStats: {
    date: string;
    focusTime: number;
    breakTime: number;
    sessions: number;
    completionRate: number;
  }[];
  weeklyStats: {
    week: string;
    totalFocusTime: number;
    totalBreakTime: number;
    averageSessionLength: number;
    productivityScore: number;
  }[];
  monthlyStats: {
    month: string;
    totalFocusTime: number;
    totalBreakTime: number;
    totalSessions: number;
    averageDailyFocus: number;
  }[];
}


