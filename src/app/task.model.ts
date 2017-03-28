export interface TaskInterface {
  label: string;
  completed: boolean;
}

export class Task implements TaskInterface {
  constructor(public label: string, public completed: boolean = false) {
  }
}

export type Status = 'ALL' | 'COMPLETED' | 'ACTIVE';

export enum TodoCompleteEnum {
  ALL, ACTIVE, COMPLETED
}
