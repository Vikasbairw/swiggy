
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
function Admin() {
    return (
        <>
            <div className="   flex font-mono">
                <div className=" w-[25%] min-h-[100vh]  bg-[#dbda2e8c] rounded">
                    <div className="font-bold text-[50px] text-center "><h1>ADMIN </h1>
                        <hr /></div>
                    <div className="   list-none cursor-pointer  text-[20px] py-10 ps-[60px] ">
                        <Link to={''}><li className="px-3 py-4 bg-[#324142] rounded text-white w-[180px] my-2 hover:bg-[#ffdb2e9c]" >Deshborad</li></Link>
                        <Link to={'/admin/addcategory'}><li className="px-3 py-4 bg-[#324142] rounded text-white w-[180px] my-2 hover:bg-[#ffdb2e9c]">Category ADD</li></Link>
                        <Link to={'/admin/addcategory/view'}>  <li className="px-3 py-4 bg-[#324142] rounded text-white w-[180px] my-2 hover:bg-[#ffdb2e9c]">Category View</li></Link>

                        <Link to={'/admin/add'}><li className="px-3 py-4 bg-[#324142] rounded text-white w-[180px] my-2 hover:bg-[#ffdb2e9c]">Food ADD</li></Link>
                        <Link to={'/admin/view'}>  <li className="px-3 py-4 bg-[#324142] rounded text-white w-[180px] my-2 hover:bg-[#ffdb2e9c]">Food View</li></Link>


                    </div>
                </div>
                <div className=" w-[75%]">

                    <AdminHome />
                </div>
            </div>
        </>
    )
}
export default Admin;