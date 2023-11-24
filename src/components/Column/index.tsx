import Card from "../Card"

const Column = ({ title }: {title: string}) => {
  return(
    <>
      <div className="flex flex-col snap-center gap-4">
        {title}
      </div>
      <Card  />
    </>
  )
}

export default Column