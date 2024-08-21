import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function FoodCategoryView() {
  const [foodcate,setfoodcate] = useState();
  const fetchFoodCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/food/");
      if(response.data.status === 1){
      await  setfoodcate(response.data.suc)
      }
    } catch (error) {
      setfoodcate(error.data.msg)
    }
  };

  useEffect(() => {
    fetchFoodCategoryData();
  }, []); // Run only on mount

  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/food/delete/${id}`);
      if (response.data.status) {
        fetchFoodCategoryData(); // Refresh data after deletion
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const updateFoodStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/food/statusChange/${id}/${status}`);
      fetchFoodCategoryData(); // Refresh data after status update
    } catch (error) {
      console.error("Error updating category status:", error);
    }
  };

  return (
    <div className="shadow p-4 m-3 bg-slate-300 font-mono">
      <div className="text-xl font-bold">Food Listing</div>
      <hr className="my-3" />
      <div className="rounded overflow-hidden">
        <table className="w-full h-[100%]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">E&D</th>
            </tr>
          </thead>
          <tbody>
            {foodcate?.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4 ">
                  {
                    console.log(item?.status ,"dsds")
                  }
                  <img src={`http://localhost:5000/uploads/category/${item.image}`} alt={item.name} className="h-[80px] w-[100px] rounded"/>
                </td>
                <td className=" cursor-pointer text-white">
                  <p
                    className="py-2 px-3 rounded flex justify-center"
                    style={{ background: item?.status === "true" ? "green" : "red" }}
                   onClick={() => updateFoodStatus(item?._id, item?.status === "true" ? "false" : "true")}
                  >
                    {item.status === "true" ? "Active" : "Inactive"}
                  </p>
                </td>
                <td className="px-6 py-4 flex gap-2 items-center justify-center h-[100%]">
                  <Link to={`/admin/edit/${item._id}`}> <div className="bg-[#5243] px-2 rounded cursor-pointer" >E</div></Link>
                 
                  <div
                    className="bg-[#5243] px-2 rounded cursor-pointer"
                    onClick={() => deleteCategory(item._id)}
                  >
                    D
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodCategoryView;
