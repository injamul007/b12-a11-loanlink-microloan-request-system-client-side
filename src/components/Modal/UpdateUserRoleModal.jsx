import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateUserRoleModal = ({ isOpen, closeModal, user, refetch }) => {
  const [updatedRole, setUpdatedRole] = useState(user?.role);

  const axiosInstance = useAxiosSecure();

  const handleRoleUpdate = async () => {
    try {
      await axiosInstance.patch(`/update-role`, {
        email: user?.email,
        role: updatedRole,
      });
      toast.success("Role Updated!");
      refetch();
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.response?.data?.message);
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

          <form>
            <div>
              <select
                value={updatedRole}
                onChange={(e) => setUpdatedRole(e.target.value)}
                className="w-full my-3 border border-gray-300 rounded-xl px-3 py-2"
                name="role"
              >
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
                <option value="suspend">Suspend</option>
              </select>
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
                onClick={handleRoleUpdate}
                type="button"
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
