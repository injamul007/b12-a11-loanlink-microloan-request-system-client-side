import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ViewUsersInfoModal = ({ isOpen, closeModal, user }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-2xl bg-base-200 p-6 shadow-2xl dark:dark:bg-[#2b3138]">
          <DialogTitle className="text-xl font-semibold text-center">
            View User Details
          </DialogTitle>

          <div className="mt-6 space-y-3 text-sm">
            <InfoRow label="User ID" value={user?._id} />
            {user?.photo && (
              <div className="flex justify-between border-b pb-2 items-center">
                <span className="text-gray-500 dark:text-gray-300">
                  User Photo
                </span>
                <img
                  src={user.photo}
                  alt="user photo"
                  className="w-18 h-18 rounded-md hover:scale-200 duration-700"
                />
              </div>
            )}
            <InfoRow label="User Name" value={user?.name} />
            <InfoRow label="User Email" value={`${user?.email}`} />
            <InfoRow label="User Role" value={user?.role} />
            <InfoRow label="User Created at" value={user?.created_At} />
            <InfoRow label="User Last loggedIn" value={user?.last_loggedIn} />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:text-gray-300 dark:text-gray-800"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-500 dark:text-gray-300">{label}</span>
    <span className="font-medium capitalize">{value || "—"}</span>
  </div>
);

export default ViewUsersInfoModal;
