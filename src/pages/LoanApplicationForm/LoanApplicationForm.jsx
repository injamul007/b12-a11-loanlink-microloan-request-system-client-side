import React, { useEffect } from "react";
import loanApplicationFormImg from "../../assets/loan_application_form_image.png";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const LoanApplicationForm = () => {
  const location = useLocation();
  const prefilledData = location.state?.LoanInfoWithUserEmail;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (prefilledData) {
      setValue("userEmail", prefilledData.userEmail);
      setValue("loan_title", prefilledData.loan_title);
      setValue("interest_rate", prefilledData.interest_rate);
    }
  }, [prefilledData, setValue]);

  const handleLoanApplicationSubmit = async (data) => {
    try {
      const {
        userEmail,
        loan_title,
        interest_rate,
        first_name,
        last_name,
        contact_number,
        nid_or_passport_number,
        income_source,
        monthly_income,
        loan_amount,
        reason_for_loan,
        address,
        extra_notes,
      } = data;

      const loanApplicationData = {
        borrower_name: `${first_name} ${last_name}`,
        borrower_email: userEmail,
        loan_title,
        interest_rate,
        contact_number,
        nid_or_passport_number,
        income_source,
        monthly_income: Number(monthly_income),
        loan_amount: Number(loan_amount),
        reason_for_loan,
        address,
        extra_notes,
      };

      const result = await Swal.fire({
        title: "Are you sure to submit?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Submit it!",
        customClass: {
          popup: "confirmation-swal-popup",
        },
      });

      if (result.isConfirmed) {
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_API_URL_KEY}/loan-application`,
          loanApplicationData
        );

        if (res.data.result?.insertedId) {
          await Swal.fire({
            title: "Submitted!",
            text: "Your loan application has been submitted successfully.",
            icon: "success",
            customClass: {
              popup: "confirmation-swal-popup",
            },
          });
        }
        reset();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <MyContainer className="lg:pt-14 pt-14 lg:pb-16 pb-10 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Apply for Your Loan
        </h2>
        <p className="mt-4 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
          Review the loan details and complete the form below to submit your
          loan application.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center gap-4">
        <div>
          <img src={loanApplicationFormImg} alt="loan_application_form" />
        </div>
        <div>
          {/* Form Card */}
          <div className="bg-white dark:bg-[#2b3138] rounded-2xl shadow-sm p-8">
            <p className="text-center text-xl mb-6 font-semibold">
              Loan Application Form
            </p>
            <form
              onSubmit={handleSubmit(handleLoanApplicationSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* ================= Auto Filled (Read Only) ================= */}
              {/* User Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">User Email</span>
                </label>
                <input
                  type="email"
                  {...register("userEmail")}
                  readOnly
                  className="input input-bordered w-full bg-base-200 cursor-not-allowed"
                />
              </div>

              {/* Loan Title */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Loan Title</span>
                </label>
                <input
                  type="text"
                  {...register("loan_title")}
                  readOnly
                  className="input input-bordered w-full bg-base-200 cursor-not-allowed"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Interest Rate</span>
                </label>
                <input
                  type="text"
                  {...register("interest_rate")}
                  readOnly
                  className="input input-bordered w-full bg-base-200 cursor-not-allowed"
                />
              </div>

              {/* ================= User Inputs ================= */}
              {/* First Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">First Name</span>
                </label>
                <input
                  type="text"
                  {...register("first_name", {
                    required: {
                      value: true,
                      message: "First Name is Required",
                    },
                    maxLength: {
                      value: 12,
                      message: "First Name is not longer than 12 alphabet",
                    },
                  })}
                  placeholder="Enter first name"
                  className="input input-bordered w-full"
                />
                {errors?.first_name?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="input input-bordered w-full"
                  {...register("last_name", {
                    required: { value: true, message: "Last Name is Required" },
                    maxLength: {
                      value: 12,
                      message: "Last Name is not longer than 12 alphabet",
                    },
                  })}
                />
                {errors?.last_name?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.last_name.message}
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Contact Number</span>
                </label>
                <input
                  type="text"
                  placeholder="+880 1XXXXXXXXX"
                  className="input input-bordered w-full"
                  {...register("contact_number", {
                    required: {
                      value: true,
                      message: "Contact Number is Required",
                    },
                    minLength: {
                      value: 11,
                      message: "Give Valid Contact Number",
                    },
                  })}
                />
                {errors?.contact_number?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.contact_number.message}
                  </p>
                )}
              </div>

              {/* National ID/Passport Number */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    National ID / Passport Number
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter NID or Passport number"
                  className="input input-bordered w-full"
                  {...register("nid_or_passport_number", {
                    required: {
                      value: true,
                      message: "NID or Passport Number is Required",
                    },
                  })}
                />
                {errors?.nid_or_passport_number?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.nid_or_passport_number.message}
                  </p>
                )}
              </div>

              {/* Income Source */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Income Source</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("income_source", {
                    required: {
                      value: true,
                      message: "Income Source is Required",
                    },
                  })}
                >
                  <option value={""}>Select income source</option>
                  <option value={"job"}>Job</option>
                  <option value={"business"}>Business</option>
                  <option value={"freelancing"}>Freelancing</option>
                  <option value={"student"}>Student</option>
                  <option value={"other"}>Other</option>
                </select>
                {errors?.income_source?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.income_source.message}
                  </p>
                )}
              </div>

              {/* Monthly Income */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Monthly Income (BDT)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 25000"
                  className="input input-bordered w-full"
                  {...register("monthly_income", {
                    required: {
                      value: true,
                      message: "Monthly Income is Required",
                    },
                  })}
                />
                {errors?.monthly_income?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.monthly_income.message}
                  </p>
                )}
              </div>

              {/* Loan Amount */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Loan Amount (BDT)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Requested loan amount"
                  className="input input-bordered w-full"
                  {...register("loan_amount", {
                    required: {
                      value: true,
                      message: "Loan Amount is Required",
                    },
                  })}
                />
                {errors?.loan_amount?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.loan_amount.message}
                  </p>
                )}
              </div>

              {/* Reason for Loan */}
              <div className="lg:col-span-2 md:col-span-2 col-span-1">
                <label className="label">
                  <span className="label-text font-medium">
                    Reason for Loan
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("reason_for_loan", {
                    required: {
                      value: true,
                      message: "Reason For Loan is Required",
                    },
                  })}
                >
                  <option value={""}>Select reason</option>
                  <option value={"Personal"}>Personal</option>
                  <option value={"Emergency"}>Emergency</option>
                  <option value={"Startup"}>Startup</option>
                  <option value={"Education"}>Education</option>
                  <option value={"Business"}>Business</option>
                  <option value={"Freelancer"}>Freelancer</option>
                  <option value={"Medical"}>Medical</option>
                  <option value={"Agriculture"}>Agriculture</option>
                  <option value={"Worker"}>Worker</option>
                  <option value={"Housing"}>Housing</option>
                  <option value={"Online"}>Online</option>
                  <option value={"Vendor"}>Vendor</option>
                </select>
                {errors?.reason_for_loan?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.reason_for_loan.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Address</span>
                </label>
                <textarea
                  rows="2"
                  placeholder="Enter your address"
                  className="textarea textarea-bordered w-full"
                  {...register("address", {
                    required: { value: true, message: "Address is Required" },
                  })}
                />
                {errors?.address?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Extra Notes */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Extra Notes</span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Any additional information"
                  className="textarea textarea-bordered w-full"
                  {...register("extra_notes", {
                    required: {
                      value: true,
                      message: "Extra Notes is Required",
                    },
                  })}
                />
                {errors?.extra_notes?.message && (
                  <p className="text-xs font-semibold text-error">
                    {errors.extra_notes.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="cta_btn w-full inline-flex justify-center cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default LoanApplicationForm;
