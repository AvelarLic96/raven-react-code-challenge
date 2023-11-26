import Layout from "../../components/layout"
import Column from "../../components/Column";
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
  return(
    <Layout>
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
    </Layout>
  )
}

export default Home