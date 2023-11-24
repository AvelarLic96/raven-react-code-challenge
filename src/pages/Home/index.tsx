import Layout from "../../components/layout"
import Column from "../../components/Column";
const Home = () => {

  const statusColumnsTitles = ['BACKLOG', 'CANCELLED', 'DONE', 'IN_PROGRESS', 'TODO'];
  return(
    <Layout>
      <div className="flex flex-col box-border flex-grow ">
        <div className="flex gap-5 box-border flex-wrap ">
          {statusColumnsTitles.map((title) => {
            return(
              <div key={title}>
                <Column title={title}/>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Home