import { Actions, TaskState, ReducerAction } from "./types";

export const initialState: TaskState = {
  tasks: [],
  isLoading: true,
  isOpenModal: false,
  dispatch: () => {},
  setDataForm: () => {},
  dataForm: {
    name:'',
    points: '',
    assignee: '',
    tags: [],
    status: '',
    dueDate: ''
  },
  emptyData: () => {},
  addTask: () => {},
  refetch: () => {},
  setTaskDelete: () => {},
  deleteTask: () => {},
}

export const reducer = (state: TaskState, action: ReducerAction): TaskState => {
  switch (action.type) {
    case Actions.SET_TASKS: {
      const { data, loading } = action.payload;
      return {
        ...state,
        tasks: data,
        isLoading: loading,
      };
    }
    case Actions.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: action.payload,
      };
    default:
      return state;
  }

}