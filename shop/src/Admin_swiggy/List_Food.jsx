import React, { useEffect, useState } from "react";
import axios from "axios";
function List_Food() {
  const [foodcate,setfoodcate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
// console.log(e.target.image.files[0].)
    const formData = await new FormData();
    formData.append("name", e.target.name.value);
    formData.append("category", e.target.food_category.value);
    formData.append("address", e.target.shop_address.value);
    formData.append("price", e.target.price.value);
    formData.append("rating", e.target.rating.value);
    formData.append("ordertime", e.target.order_time.value);
    formData.append("offer", e.target.offer.value);
    formData.append("image", e.target.image.files[0]); // Append the selected file
        try {
      const response =  axios.post("http://localhost:5000/admin/category", formData)

      response.then(
        (success)=>{
  console.log(success);
  e.target.reset();

        }
      ).catch(
        (err)=>{

          console.log("Not Response from server:",err);
        }
      )

    
      // Handle success, such as showing a success message to the user
    } catch (error) {
      console.error("Error uploading the file:", error);
      // Handle error, such as showing an error message to the user
    }
  };


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
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFA500] font-mono">
      <div className="w-[80%] bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Food ADD</h1>
        <form className="flex flex-col gap-4" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name"
              className="border-b border-black focus:outline-none capitalize"
              required
            />
          </div>
          <div>
            <label htmlFor="food_category">Food Category:</label>
           <select name="food_category" id="" className="foucs:outline-none">
           {
                foodcate?.map(
                  (data)=>{
                    return <option value={data.name}  className="foucs:outline-none">{data.name}</option>
                  }
                )
              }   
           </select>
          </div>
          <div>
            <label htmlFor="shop_address">Shop Address:</label>
            <textarea
              id="shop_address"
              name="shop_address"
              placeholder="Enter the shop address"
              className="w-full border-b border-black focus:outline-none capitalize"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter the food price"
              className="border-b border-black focus:outline-none capitalize"
              required
            />
          </div>
          <div>
            <label htmlFor="rating">Food Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter the food rating"
              className="border-b border-black focus:outline-none capitalize"
              required
            />
          </div>
          <div>
            <label htmlFor="order_time">Order Time (minutes):</label>
            <input
              type="text"
              id="order_time"
              name="order_time"
              placeholder="Enter the order time"
              className="border-b border-black focus:outline-none capitalize"
              required
            />
          </div>
          <div>
            <label htmlFor="offer">Offer:</label>
            <input
              type="number"
              id="offer"
              name="offer"
              placeholder="Enter the offer"
              className="border-b border-black focus:outline-none capitalize"
             
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" className=" focus:outline-none" required />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-[#FFA500] text-white font-bold rounded-md hover:bg-yellow-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default List_Food;
