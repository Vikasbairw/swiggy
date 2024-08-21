import React from "react";
import axios from "axios";

function CategoryAdd() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = await new FormData();
    formData.append("name", e.target.name.value);
    formData.append("image", e.target.image.files[0]); // Append the selected file
    try {
      const response = axios.post("http://localhost:5000/food/foodcategory", formData)

      response.then(
        (success) => {
          console.log(success);
          e.target.reset();

        }
      ).catch(
        (err) => {

          console.log("Not Response from server:", err);
        }
      )


      // Handle success, such as showing a success message to the user
    } catch (error) {
      console.error("Error uploading the file:", error);
      // Handle error, such as showing an error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFA500] font-mono">
      <div className="w-[80%] bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">CATEGORY ADD</h1>
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
            <label htmlFor="image">Image: </label>
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

export default CategoryAdd;
