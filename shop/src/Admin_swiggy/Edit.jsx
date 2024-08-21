import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Edit() {
const[editvalue,seteditvalue]=useState();
useEffect(
  ()=>{
     axios.get("http://localhost:5000/admin/").then(
        (suc)=>{ 
    
          if(suc.data.status === 1){
            seteditvalue(suc.data.data[0])
                 console.log(suc.data.data[0]?.name)
          }
          
        }
      ).catch(
        (err)=>{
  console.log(err)
        }
      )
    },[]
  )


  const { id } = useParams();

  //  edithandler function start 
  function EditHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("category", e.target.food_category.value);
    formData.append("address", e.target.shop_address.value);
    formData.append("price", e.target.price.value);
    formData.append("rating", e.target.rating.value);
    formData.append("ordertime", e.target.order_time.value);
    formData.append('offer', e.target.offer.value);
    formData.append('image', e.target.image.files[0]);


    axios.patch("http://localhost:5000/admin/edit/" + id, formData).then(
      (suc) => {
        console.log(suc);
        e.target.reset();
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
//edithandler function end

 


  return (
    <div className="flex justify-center items-center h-screen bg-[#FFA500]">
      <div className="w-[80%] bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Edit Food</h1>
        <form className="flex flex-col gap-4" encType="multipart/form-data" onSubmit={EditHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name"
              className="border-b border-black focus:outline-none capitalize"
              required
              value={editvalue?.name}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                  name:  e.target.editvalue

                  }
                )
              }}
            />
          </div>
          <div>
            <label htmlFor="food_category">Food Category:</label>
            <input
              type="text"
              id="food_category"
              name="food_category"
              placeholder="Enter the food category"
              className="border-b border-black focus:outline-none capitalize"
              required
              value={editvalue?.category}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                    category:  e.target.editvalue

                  }
                )
              }}
            />
          </div>
          <div>
            <label htmlFor="shop_address">Shop Address:</label>
            <textarea
              id="shop_address"
              name="shop_address"
              placeholder="Enter the shop address"
              className="w-full border-b border-black focus:outline-none capitalize"
              required
              value={editvalue?.address}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                    address:  e.target.editvalue

                  }
                )
              }}
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
              value={editvalue?.price}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                    price:  e.target.editvalue

                  }
                )
              }}
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
              value={editvalue?.rating}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                    rating:  e.target.editvalue

                  }
                )
              }}
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
              value={editvalue?.ordertime}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                  ordertime:  e.target.editvalue

                  }
                )
              }}
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
              value={editvalue?.offer}
              onChange={(e)=>{
                seteditvalue(
                  {
                    ...editvalue,
                    offer:  e.target.editvalue

                  }
                )
              }}

            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" className=" focus:outline-none" required />
           
            <img src={`http://localhost:5000/uploads/foodproduct/${editvalue?.image}`} alt=""  className="w-[100px] h-[80px] rounded pt-2"/>
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

export default Edit;
