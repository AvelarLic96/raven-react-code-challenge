import { useEffect, useState } from "react";
import Layout from "../../components/layout"
import Column from "../../components/Column";
import { useTasks } from "../../shared/context";
import { Actions } from "../../shared/context/types";
import debounce from 'lodash.debounce'
import { useGetTasks } from "../../shared/hooks/UseRequest";
interface StatusColumns {
  title: string;
  value: string;
}

const statusColumnsTitles: StatusColumns[] = [
  {
    title: 'Backlog',
    value: 'BACKLOG'
  },
  {
    title: 'Cancelled',
    value: 'CANCELLED'
  },
  {
    title: 'To do',
    value: 'TODO'
  },
  {
    title: 'In Progress',
    value: 'IN_PROGRESS'
  },
  {
    title: 'Done',
    value: 'DONE'
  },
];

const Home = () => {
  const { dispatch } = useTasks();
  const [searchTaskValue, setSearchTaskValue] = useState<string>('')

  const { refetch } = useGetTasks()

  const openModal = () => {
    dispatch({ type: Actions.OPEN_MODAL, payload: true });
  };

  const handleSearchTask = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaskValue(event.target.value)
  }, 800)

  useEffect(()=>{
    refetch({name: searchTaskValue})
  }, [searchTaskValue])

  return(
    <Layout>
      <div className="flex flex-col gap-5 w-full">
        <div className="h-10">
          <input 
            className="w-full bg-[#2C2F33] h-12 focus:outline-none rounded-2xl pl-10 text-white placeholder:text-[white]" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearchTask(event)}
            placeholder="Search"
          />
        </div>
        <div className="w-full flex justify-end box-border">
          <button
            className="bg-[#DA584B] w-10 h-10 rounded-lg box-border flex items-center justify-center text-lg cursor-pointer"
            onClick={()=> openModal()}
            type="button"
          >
            <h1>+</h1>
          </button>
        </div>
      <div className="flex flex-col box-border flex-grow ">
        <div className="flex gap-5 box-border flex-wrap ">
          {statusColumnsTitles.map((column: StatusColumns) => {
            return(
              <div key={column.value}>
                <Column title={column.title} value={column.value}/>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Home