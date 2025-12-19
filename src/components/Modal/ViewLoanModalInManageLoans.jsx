import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ViewLoanModalInManageLoans = ({ isOpen, closeModal, loan }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-2xl bg-base-200 p-6 shadow-2xl dark:bg-[#2b3138]">
          <DialogTitle className="text-xl font-semibold text-center">
            View Loan Details
          </DialogTitle>

          <div className="mt-6 space-y-3 text-sm">
            <InfoRow label="Loan ID" value={loan?.loanId} />
            {/* Image row */}
            {loan?.image && (
              <div className="flex justify-between border-b pb-2 items-center">
                <span className="text-gray-500 dark:text-gray-300">
                  Loan Image
                </span>
                <img
                  src={loan.image}
                  alt="Loan Document"
                  className="w-22 h-22 rounded-md"
                />
              </div>
            )}
            <InfoRow label="Title" value={loan?.loan_title} />
            <InfoRow label="Category" value={loan?.category} />
            <InfoRow label="Interest" value={loan?.interest_rate} />
            <InfoRow label="Max Loan Limit" value={loan?.max_loan_limit} />
            <InfoRow label="Required Doc" value={loan?.required_documents} />
            <InfoRow
              label="Show on home"
              value={loan?.show_on_home ? "True" : "False"}
            />
            <InfoRow label="Created At" value={loan?.created_at} />
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

export default ViewLoanModalInManageLoans;
