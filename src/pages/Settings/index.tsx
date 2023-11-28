import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../../shared/graphQL/queries";
import Layout from "../../components/layout"
import moment from "moment";

const Settings = () => {
  const {data, loading} = useQuery(PROFILE_QUERY);
  let profileInfo
  if (!loading) {
    profileInfo = data.profile
  }

  console.log(profileInfo)

  return(
    <Layout>
      <div className="flex w-full h-full justify-center">
        <div className="p-6 bg-[#2C2F33] flex flex-row w-[50%] gap-5 rounded-lg ">
          <div className="w-6/12 flex flex-col items-end">
            <p>Name:</p>
            <p>Email:</p>
            <p>Type:</p>
            <p>Created At:</p>
            <p>Update At:</p>
          </div>
          <div className="w-6/12">
            <p>{profileInfo?.fullName}</p>
            <p>{profileInfo?.email}</p>
            <p>{profileInfo?.type}</p>
            <p>{moment(profileInfo?.createdAt).format('MMMM D, YYYY')}</p>
            <p>{moment(profileInfo?.updatedAt).format('MMMM D, YYYY')}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Settings