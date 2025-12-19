import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { imageUploadCloudinary } from "../../utills";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const UpdateLoanEditPage = () => {
  const { id } = useParams();
  const [newImage, setNewImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  // loan data fetch + prefill
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API_URL_KEY}/manage-loans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          reset(data.loan);
          setPrevImage(data.loan.image);
        }
      })
      .catch((err) => console.log(err.message));
  }, [id, reset]);

  const handleUpdateLoan = async (data) => {
    try {
      let imageUrl = prevImage;

      //? Image size validation
      if (newImage && newImage.size > 2 * 1024 * 1024) {
        toast.error("Image size exceeds 2MB");
        return;
      }

      //? Cloudinary image upload
      if (newImage) {
        imageUrl = await imageUploadCloudinary(newImage);
      }

      const payload = {
        ...data,
        image: imageUrl,
        show_on_home: data.show_on_home || false,
      };

      const res = await axios.patch(
        `${
          import.meta.env.VITE_SERVER_API_URL_KEY
        }/manage-loans/update-loan/${id}`,
        payload
      );

      // console.log("Update success:", res.data.updateResult);
      if (res.data.updateResult.modifiedCount) {
        toast.success("Loan data updated successful!");
        navigate("/dashboard/manage-loans");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <MyContainer>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl lg:pt-1 lg:pb-14 py-6">
        <title>Microloan || Update Loan</title>
        <h2 className="lg:text-2xl text-xl font-bold text-center lg:my-10 my-4">
          Update Loan
        </h2>
        <form onSubmit={handleSubmit(handleUpdateLoan)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Loan Title
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                  id="name"
                  type="text"
                  placeholder="Loan title"
                  {...register("loan_title")}
                />
              </div>

              {/* Category */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600 ">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                  {...register("category")}
                >
                  <option value={""}>Select Loan Category</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Personal">Personal</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Startup">Startup</option>
                  <option value="Business">Business</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Education">Education</option>
                  <option value="Women">Women</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Health">Health</option>
                  <option value="Worker">Worker</option>
                  <option value="Housing">Housing</option>
                  <option value="Online">Online</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  placeholder="Write loan description here..."
                  className="block focus:lime-300 w-full h-32 px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                  {...register("description")}
                ></textarea>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              {/* Interest Rate , Max Loan Limit , EMI Plans & Required Document */}
              <div className="flex justify-between gap-2">
                {/* Interest Rate */}
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="interest_rate"
                    className="block text-gray-600 "
                  >
                    Interest Rate
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                    id="price"
                    type="text"
                    placeholder="e.g. 5% p.a."
                    {...register("interest_rate")}
                  />
                </div>

                {/* Max Loan Limit */}
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="max_loan_limit"
                    className="block text-gray-600"
                  >
                    Max Loan Limit
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                    id="quantity"
                    type="number"
                    placeholder="e.g. 8000"
                    {...register("max_loan_limit")}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                {/* Required Documents */}
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="required_documents"
                    className="block text-gray-600"
                  >
                    Required Documents
                  </label>

                  <textarea
                    id="required_documents"
                    placeholder="e.g. NID , Passport"
                    className="block focus:lime-300 w-full h-22 px-6 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                    {...register("required_documents")}
                  ></textarea>
                </div>

                {/* Emi Plans */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="emi_plans" className="block text-gray-600">
                    Emi Plans
                  </label>

                  <textarea
                    id="emi_plans"
                    placeholder="e.g. 3 weeks / 1 months"
                    className="block focus:lime-300 w-full h-22 px-6 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                    {...register("emi_plans")}
                  ></textarea>
                </div>
              </div>

              {/* Image */}
              <div className=" p-4  w-full  m-auto rounded-lg grow">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 dark:border-gray-500 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    {/* Image Preview section */}
                    <div className="flex justify-center items-center">
                      {/* Old image */}
                      {prevImage && !newImage && (
                        <div className="mb-2">
                          <p className="text-sm text-gray-500">Current Image</p>
                          <img
                            src={prevImage}
                            alt="Old"
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                      )}

                      {/* New image preview */}
                      {newImage && (
                        <div className="mb-2">
                          <p className="text-sm text-gray-500">
                            New Image Preview
                          </p>
                          <img
                            src={URL.createObjectURL(newImage)}
                            alt="New"
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>
                    <label>
                      <input
                        className="text-sm cursor-pointer w-56 mx-auto text-gray-500 dark:text-gray-400"
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setNewImage(e.target.files[0])}
                      />
                      <div className="bg-[#4DA3FF] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#FFB703]">
                        Image Upload
                      </div>

                      <p className="mt-1 text-xs text-gray-400">
                        PNG, JPG, WEBP or JPEG (max 2MB)
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Show on Home Toggle */}
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  {...register("show_on_home")}
                  className="w-6 h-6 accent-[#4DA3FF]"
                />
                <label className="text-gray-500 dark:text-gray-400 font-medium">
                  Show on Home
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#4DA3FF] hover:bg-[#FFB703] "
              >
                Update Loan
              </button>
            </div>
          </div>
        </form>
      </div>
    </MyContainer>
  );
};

export default UpdateLoanEditPage;
