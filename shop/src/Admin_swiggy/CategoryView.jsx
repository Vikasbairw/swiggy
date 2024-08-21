import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CategoryView() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/");
      setData(response.data.data || []);
      setError(null);
    } catch (error) {
      setError(error?.response?.data?.msg || "An error occurred");
      setData([]);
    }
  };




  useEffect(() => {
    fetchCategoryData();
    
  }, []); // Run only on mount

  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/admin/delete/${id}`);
      if (response.data.status) {
        fetchCategoryData(); // Refresh data after deletion
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const updateCategoryStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/admin/statusChange/${id}/${status}`);
      fetchCategoryData(); // Refresh data after status update
    } catch (error) {
      console.error("Error updating category status:", error);
    }
  };

  return (
    <div className="shadow p-4 m-3 bg-slate-300 font-mono">
      <div className="text-xl font-bold">Food Listing</div>
      <hr className="my-3" />
      {error && <div className="text-red-600">{error}</div>}
      <div className="rounded overflow-hidden">
        <table className="w-full h-[100%]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Prices</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Shop Add.</th>
              <th scope="col" className="px-6 py-3">E&D</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                 {
                  item.category
                 }
                </td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4 ">
                  <img src={`http://localhost:5000/uploads/foodproduct/${item.image}`} alt={item.name} className="h-[80px] w-[100px] rounded"/>
                </td>
                <td className=" cursor-pointer text-white">
                  <p
                    className="py-2 px-3 rounded flex justify-center"
                    style={{ background: item.status === "true" ? "green" : "red" }}
                    onClick={() => updateCategoryStatus(item._id, item.status === "true" ? "false" : "true")}
                  >
                    {item.status === "true" ? "Active" : "Inactive"}
                  </p>
                </td>
                <td className="px-6 py-4">{(item.address)}</td>
                <td className="px-6 py-4 flex gap-2 justify-center items-center h-[100%]">
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

export default CategoryView;
