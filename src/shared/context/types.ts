import React from "react";
import { Task } from "../../types";

export enum Actions {
  SET_TASKS = 'SET_TASKS',
  OPEN_MODAL = 'OPEN_MODAL'
}

interface TaskPayload {
  data: Task[];
  loading: boolean;
}

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  isOpenModal: boolean;
  dispatch: React.Dispatch<ReducerAction>;
  setDataForm: React.Dispatch<React.SetStateAction<DataForm>>;
  dataForm: DataForm;
  emptyData: () => void;
  addTask: () => void;
  refetch: () => void;
  setTaskDelete: (arg: string) => void;
  deleteTask: () => void;
}

export type ReducerAction = {
  type: Actions.SET_TASKS;
  payload: TaskPayload;
} | {
  type: Actions.OPEN_MODAL;
  payload: boolean;
}

export interface DataForm { 
  name: string,
  points: string,
  assignee: string,
  tags: [],
  status: string,
  dueDate: Date | null | string
}



