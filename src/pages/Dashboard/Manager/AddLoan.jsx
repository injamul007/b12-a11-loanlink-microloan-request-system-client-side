import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utills/index.js";
import useAuth from "../../../hooks/useAuth.jsx";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute.jsx";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer.jsx";

const AddLoan = () => {
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { show_on_home: false } });
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  //? useMutation hook
  const {
    isPending,
    isError,
    reset: mutationReset,
    mutateAsync,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosInstance.post(`/add-loan`, payload),
    onSuccess: (data) => {
      if (data.data.result.insertedId) {
        toast.success("Loan Added Successfully");
        mutationReset();
      }
      //? query key invalidate will use soon
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
    // onMutate: (payload) => {
    //   console.log("i will post this data --> ", payload);
    // },
  });

  const handleAddLoan = async (data) => {
    try {
      const {
        loan_title,
        category,
        description,
        interest_rate,
        max_loan_limit,
        required_documents,
        image,
        emi_plans,
        show_on_home,
      } = data;
      const maxLoanLimitInNum = Number(max_loan_limit);
      const imageFile = image?.[0] ?? null;
      const imageURL = await imageUpload(imageFile);
      const loanData = {
        loan_title,
        image: imageURL,
        description,
        category,
        interest_rate,
        max_loan_limit: maxLoanLimitInNum,
        required_documents,
        emi_plans,
        show_on_home,
        created_by: user?.email,
      };

      await mutateAsync(loanData);
      reset();
      setPreview(null);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  if (isPending) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl lg:pt-1 lg:pb-14 py-6">
        <title>LoanLink || Add Loan</title>
        <h2 className="lg:text-2xl text-xl font-bold text-center lg:my-10 my-4">Add Loan</h2>
        <form onSubmit={handleSubmit(handleAddLoan)}>
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
                  {...register("loan_title", {
                    required: {
                      value: true,
                      message: "Loan title is Required",
                    },
                    maxLength: {
                      value: 30,
                      message: "Loan title cannot be too long",
                    },
                  })}
                />
                {errors.loan_title?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.loan_title.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600 ">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md text-gray-800 border border-blue-300 focus:outline-blue-600  bg-white dark:bg-[#2b3138] dark:text-white"
                  {...register("category", {
                    required: "Category is Required",
                  })}
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
                {errors.category?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.category.message}
                  </p>
                )}
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
                  {...register("description", {
                    required: "Description is required",
                  })}
                ></textarea>
                {errors.description?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.description.message}
                  </p>
                )}
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
                    {...register("interest_rate", {
                      required: {
                        value: true,
                        message: "Interest rate is required",
                      },
                      min: {
                        value: 0,
                        message: "Interest rate must be positive",
                      },
                    })}
                  />
                  {errors.interest_rate?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.interest_rate.message}
                    </p>
                  )}
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
                    {...register("max_loan_limit", {
                      required: {
                        value: true,
                        message: "Max loan limit is required",
                      },
                      min: {
                        value: 0,
                        message: "Max loan limit must be positive",
                      },
                    })}
                  />
                  {errors.max_loan_limit?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.max_loan_limit.message}
                    </p>
                  )}
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
                    {...register("required_documents", {
                      required: "Required documents is required",
                    })}
                  ></textarea>
                  {errors.required_documents?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.required_documents.message}
                    </p>
                  )}
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
                    {...register("emi_plans", {
                      required: "Emi Plans is required",
                    })}
                  ></textarea>
                  {errors.emi_plans?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.emi_plans.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className=" p-4  w-full  m-auto rounded-lg grow">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 dark:border-gray-500 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    {/* //? image preview section */}
                    <div className="flex justify-center items-center">
                      {preview && (
                        <img
                          src={preview}
                          alt="Image Preview"
                          className="w-32 h-32 object-cover rounded mt-2"
                        />
                      )}
                    </div>
                    <label>
                      <input
                        className="text-sm cursor-pointer w-56 mx-auto text-gray-500 dark:text-gray-400"
                        type="file"
                        id="image"
                        accept="image/*"
                        // hidden
                        {...register("image", {
                          required: "Image is required",
                          validate: (files) => {
                            if (!files || files.length === 0) return true;
                            const file = files[0];
                            const validTypes = [
                              "image/jpeg",
                              "image/jpg",
                              "image/png",
                              "image/webp",
                            ];
                            if (!validTypes.includes(file.type))
                              return "Only JPG/PNG/WebP allowed";
                            if (file.size > 2 * 1024 * 1024) return "Max 2 MB";
                            return true;
                          },
                        })}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) setPreview(URL.createObjectURL(file));
                        }}
                      />
                      <div className="bg-[#4DA3FF] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#0B5FFF] duration-300">
                        Image Upload
                      </div>
                      {errors.image?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.image.message}
                        </p>
                      )}
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
                className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition rounded shadow-md bg-[#4DA3FF] hover:bg-[#0B5FFF] duration-300"
              >
                {isPending ? (
                  <TbFidgetSpinner className=" animate-spin m-auto"></TbFidgetSpinner>
                ) : (
                  "Save Loan"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </MyContainer>
  );
};

export default AddLoan;
