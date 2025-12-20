import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ApprovedLoanViewModal = ({ isOpen, closeModal, approvedLoan }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-2xl bg-base-200 p-6 shadow-2xl dark:dark:bg-[#2b3138]">
          <DialogTitle className="text-xl font-semibold text-center">
            View Application
          </DialogTitle>

          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-1">
            <span className="font-semibold text-success">Approved</span> Loan Application Details
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <InfoRow label="Loan ID" value={approvedLoan?.loan_id} />
            <InfoRow label="Title" value={approvedLoan?.loan_title} />
            <InfoRow label="Requested Amount" value={`৳${approvedLoan?.loan_amount}`} />
            <InfoRow label="Interest" value={approvedLoan?.interest_rate} />
            <InfoRow label="Borrower Name" value={approvedLoan?.borrower_name} />
            <InfoRow label="Borrower Email" value={approvedLoan?.borrower_email} />
            <InfoRow label="Borrower NID/Passport" value={approvedLoan?.nid_or_passport_number} />
            <InfoRow label="Borrower Monthly Income" value={approvedLoan?.monthly_income} />
            <InfoRow label="Reason For Loan" value={approvedLoan?.reason_for_loan} />
            <InfoRow label="Status" value={approvedLoan?.status} />
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

export default ApprovedLoanViewModal;
