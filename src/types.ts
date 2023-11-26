export interface Task {
    __typename: string;
    id: string;
    name: string;
    status: string;
    pointEstimate: string;
    tags: string[];
    dueDate: string;
    assignee: {
      __typename: string,
      avatar: string
    }
}

export interface TaskQueryResponse {
  BacklogTasks: Task[];
  TodoTasks: Task[];
  InProgressTasks: Task[];
  DoneTasks: Task[];
  CancelledTasks: Task[];
}

export enum TimeDays {
  YESTERDAY = 'Yesterday',
  TODAY = 'Today',
  TOMORROW = 'Tomorrow'
}