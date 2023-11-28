import { gql } from '@apollo/client';

export const POINT_QUERY = gql`
  {
    __type(name: "PointEstimate") {
      name
      enumValues {
        numberName: name
      }
    }
  }
`;

export const USERS_QUERY = gql`
  {
    users {
      id
      avatar
      fullName
    }
  }
`;

export const TAGS_QUERY = gql`
  {
    __type(name: "TaskTag") {
      name
      enumValues {
        tagName: name
      }
    }
  }
`;

export const TASK_QUERY = gql`
  query GetAllTaks($name: String){
    BacklogTasks: tasks(input: { status: BACKLOG, name: $name}) {
      ...taskFields
    }
    TodoTasks: tasks(input: { status: TODO, name: $name }) {
      ...taskFields
    }
    InProgressTasks: tasks(input: { status: IN_PROGRESS, name: $name }) {
      ...taskFields
    }
    DoneTasks: tasks(input: { status: DONE, name: $name }) {
      ...taskFields
    }
    CancelledTasks: tasks(input: { status: CANCELLED, name: $name }) {
      ...taskFields
    }
  }

  fragment taskFields on Task {
    id
    name
    status
    pointEstimate
    tags
    dueDate
    assignee {
      avatar
      fullName
    }
  }
`;

export const PROFILE_QUERY = gql`
  {
    profile {
      fullName
      email
      type
      createdAt
      updatedAt
    }
  }
`
