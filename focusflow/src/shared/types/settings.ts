export interface AppSettings {
  general: GeneralSettings;
  timer: TimerSettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
  privacy: PrivacySettings;
  integrations: IntegrationSettings;
  advanced: AdvancedSettings;
}

export interface GeneralSettings {
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  autoSave: boolean;
  autoSync: boolean;
  keyboardShortcuts: boolean;
}

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
  volume: number; // 0-100
  customSounds: {
    workStart: string;
    workEnd: string;
    breakStart: string;
    breakEnd: string;
  };
}

export interface NotificationSettings {
  enabled: boolean;
  desktop: boolean;
  email: boolean;
  browser: boolean;
  focusReminders: boolean;
  breakReminders: boolean;
  taskReminders: boolean;
  weeklyReports: boolean;
  sound: boolean;
  volume: number; // 0-100
  quietHours: {
    enabled: boolean;
    start: string; // HH:mm
    end: string; // HH:mm
  };
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  animations: boolean;
  showProgressBar: boolean;
  showTimerInTitle: boolean;
}

export interface PrivacySettings {
  shareAnalytics: boolean;
  shareUsageData: boolean;
  allowNotifications: boolean;
  allowLocation: boolean;
  dataRetention: {
    sessions: number; // days
    tasks: number; // days
    analytics: number; // days
  };
  exportData: boolean;
  deleteAccount: boolean;
}

export interface IntegrationSettings {
  calendar: {
    enabled: boolean;
    provider: 'google' | 'outlook' | 'apple';
    syncTasks: boolean;
    syncEvents: boolean;
  };
  email: {
    enabled: boolean;
    provider: 'gmail' | 'outlook' | 'yahoo';
    sendReports: boolean;
    sendReminders: boolean;
  };
  slack: {
    enabled: boolean;
    workspace: string;
    channel: string;
    sendUpdates: boolean;
  };
  github: {
    enabled: boolean;
    username: string;
    syncIssues: boolean;
  };
}

export interface AdvancedSettings {
  debugMode: boolean;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
  performanceMode: boolean;
  cacheEnabled: boolean;
  cacheSize: number; // MB
  autoUpdate: boolean;
  betaFeatures: boolean;
  experimentalFeatures: boolean;
}

export interface WebsiteBlockingSettings {
  enabled: boolean;
  blockedSites: string[];
  allowedSites: string[];
  schedule: {
    enabled: boolean;
    days: number[]; // 0-6 (Sunday-Saturday)
    startTime: string; // HH:mm
    endTime: string; // HH:mm
  };
  strictMode: boolean;
  allowOverride: boolean;
  overrideDuration: number; // minutes
}

export interface BackupSettings {
  autoBackup: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  backupLocation: 'local' | 'cloud';
  cloudProvider?: 'google-drive' | 'dropbox' | 'onedrive';
  includeSettings: boolean;
  includeData: boolean;
  includeAnalytics: boolean;
  maxBackups: number;
}


