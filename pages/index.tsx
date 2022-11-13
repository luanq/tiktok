import type { NextPage } from "next"
import axios from "axios";


const Home:NextPage=()=> {
  return (
    <div className="text-3xl font-bold underline">
       begin
    </div>
  )
}

//next.js对getsrversideprops函数使用ssr
export const getServerSideProps=async()=>{
  const response=await axios.get('http://localhost:3000/api/post');
  console.log(response.data);
  
  return {
    props:{}
  }
}


export default Home;