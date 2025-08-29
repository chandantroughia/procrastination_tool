export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
  subscription?: Subscription;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: NotificationSettings;
  focusSettings: FocusSettings;
  privacy: PrivacySettings;
}

export interface NotificationSettings {
  enabled: boolean;
  sound: boolean;
  desktop: boolean;
  email: boolean;
  focusReminders: boolean;
  breakReminders: boolean;
  taskReminders: boolean;
}

export interface FocusSettings {
  defaultWorkDuration: number; // in minutes
  defaultBreakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  longBreakInterval: number; // every N pomodoros
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

export interface PrivacySettings {
  shareAnalytics: boolean;
  shareUsageData: boolean;
  allowNotifications: boolean;
}

export interface Subscription {
  id: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
  features: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  timezone: string;
  language: string;
  createdAt: Date;
  lastActive: Date;
}

export interface UserStats {
  totalFocusTime: number; // in minutes
  totalSessions: number;
  averageSessionLength: number; // in minutes
  longestStreak: number; // days
  currentStreak: number; // days
  tasksCompleted: number;
  productivityScore: number; // 0-100
}


