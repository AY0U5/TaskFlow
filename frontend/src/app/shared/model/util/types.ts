export type NotificationType = 'PROJECT_CREATION' |
  'TASK_ASSIGNMENT' | 'MEMBER_ADDITION' | 'DEADLINE_REMINDER' | 'NEW_MESSAGE'

export type ProjectStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD' | 'CANCELLED'

export type TaskStatus = 'TO_DO' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED' | 'REVIEW'

export type Role = 'MEMBER' | 'MANAGER' | 'OWNER';
