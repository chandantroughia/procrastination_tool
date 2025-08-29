export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  category?: string;
  tags: string[];
  estimatedTime?: number; // in minutes
  actualTime?: number; // in minutes
  dueDate?: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  projectId?: string;
  parentTaskId?: string;
  subtasks?: Task[];
  attachments?: TaskAttachment[];
  notes?: string;
}

export type TaskStatus = 'todo' | 'in-progress' | 'completed' | 'archived';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface TaskAttachment {
  id: string;
  name: string;
  url: string;
  type: 'file' | 'link' | 'image';
  size?: number;
  uploadedAt: Date;
}

export interface TaskTemplate {
  id: string;
  name: string;
  description?: string;
  estimatedTime?: number;
  category?: string;
  tags: string[];
  isDefault: boolean;
  userId: string;
  createdAt: Date;
}

export interface TaskFilter {
  status?: TaskStatus[];
  priority?: TaskPriority[];
  category?: string[];
  tags?: string[];
  dueDate?: {
    from?: Date;
    to?: Date;
  };
  search?: string;
  assignedTo?: string;
}

export interface TaskStats {
  total: number;
  completed: number;
  inProgress: number;
  overdue: number;
  completedToday: number;
  averageCompletionTime: number; // in minutes
}

export interface TaskAnalytics {
  tasksByStatus: Record<TaskStatus, number>;
  tasksByPriority: Record<TaskPriority, number>;
  tasksByCategory: Record<string, number>;
  completionRate: number; // percentage
  averageTimeToComplete: number; // in minutes
  productivityTrend: {
    date: string;
    completed: number;
    created: number;
  }[];
}


