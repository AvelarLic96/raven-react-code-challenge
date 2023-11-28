import { useQuery } from '@apollo/client';
import { TASK_QUERY } from '../graphQL/queries';
export const useGetTasks = (searchTaskName: string | undefined = undefined) => {
  const { data, loading, refetch } = useQuery(TASK_QUERY, {variables: { name: searchTaskName}});
  return {
    data,
    loading,
    refetch,
  };
};
