export interface Task {
  label: string;
  completed: boolean;
}

export type Status = 'ALL' | 'COMPLETED' | 'ACTIVE';
