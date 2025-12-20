import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";

const UpdateUserRoleModal = ({ isOpen, closeModal, user, refetch }) => {

  const axiosInstance = useAxiosSecure();

  const {register, handleSubmit, formState: {errors}, control, reset } = useForm({defaultValues: {role: user?.role}})

  const selectRole = useWatch({control, name: 'role'});

  useEffect(() => {
  if (isOpen && user?.role) {
    reset({
      role: user.role,
      suspend_reason: "",
      suspend_feedback: ""
    });
  }
}, [isOpen, user, reset]);

  const handleRoleUpdate =  async(data) => {
    try {
      const {role, suspend_reason,suspend_feedback} = data
      const roleData = {
        email: user?.email,
        role,
        suspend_reason,
        suspend_feedback,
      }
      const res = await axiosInstance.patch(`/manage-users/update-role`, roleData);
      if(res.data.result.modifiedCount) {
        toast.success("Role Updated!"); 
        refetch();
      }
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
      // toast.error(error?.response?.data?.message);
    } finally {
      closeModal();
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-50"
      onClose={closeModal}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered Modal Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-base-200 p-6 shadow-2xl">
          <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
            Update User Role
          </DialogTitle>

          <form
           onSubmit={handleSubmit(handleRoleUpdate)}
          >
            <div>
              <select
                // value={updatedRole}
                // onChange={(e) => setUpdatedRole(e.target.value)}
                {...register("role", {required: {value: true, message: "Role is Required"}})}
                className="w-full my-3 border border-gray-300 rounded-xl px-3 py-2"
                name="role"
              >
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
                <option value="suspend">Suspend</option>
              </select>
              {errors?.role?.message && <p className="text-error text-xs font-semibold">{errors.role.message}</p>}

              {/* //? suspend reason */}
                {selectRole === 'suspend' && <>
                <div className="mb-2">
                <label className="label">
                  <span className="label-text font-medium">Suspend Reason</span>
                </label>
                <input
                  type="text"
                  {...register("suspend_reason", {required: {value: true, message: "Suspend Reason Required"}})}
                  placeholder="Explain here suspend reason"
                  className="input input-bordered w-full bg-base-200 rounded-xl"
                />
                {errors?.suspend_reason?.message && <p className="text-error text-xs font-semibold">{errors.suspend_reason.message}</p>}
              </div>
              {/* //? why suspend feedback */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Suspend Feedback</span>
                </label>
                <input
                  type="text"
                  {...register("suspend_feedback", {required: {value: true, message: "Suspend Feedback Required"}})}
                  placeholder="Explain here suspend Feedback"
                  className="input input-bordered w-full bg-base-200 rounded-xl"
                />
                {errors?.suspend_feedback?.message && <p className="text-error text-xs font-semibold">{errors.suspend_feedback.message}</p>}
              </div>
                </>} 

              
            </div>

            <div className="flex mt-4 justify-around">
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 duration-300"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                // onSubmit={handleSubmit(handleRoleUpdate)}
                type="submit"
                className="cursor-pointer inline-flex justify-center rounded-md bg-[#4DA3FF] hover:bg-[#0B5FFF] px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UpdateUserRoleModal;
