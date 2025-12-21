import { Dialog, DialogPanel } from "@headlessui/react";

const ViewLoanApplicationDetailsModal = ({ isOpen, closeModal, application }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-2xl bg-base-200 p-6 shadow-2xl dark:dark:bg-[#2b3138]">

          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-1">
            {application?.status === 'approved' ? <span className="font-semibold text-success">Approved</span> : application?.status === 'rejected' ? <span className="font-semibold text-error">Rejected</span> : <span className="font-semibold text-[#FFB703]">Pending</span>} Loan Application Details
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <InfoRow label="Loan ID" value={application?.loan_id} />
            <InfoRow label="Title" value={application?.loan_title} />
            <InfoRow label="Loan Category" value={application?.category} />
            <InfoRow label="Requested Amount" value={`৳${application?.loan_amount}`} />
            <InfoRow label="Interest" value={application?.interest_rate} />
            <InfoRow label="Borrower Name" value={application?.borrower_name} />
            <InfoRow label="Borrower Email" value={application?.borrower_email} />
            <InfoRow label="Borrower NID/Passport" value={application?.nid_or_passport_number} />
            <InfoRow label="Borrower Monthly Income" value={application?.monthly_income} />
            <InfoRow label="Reason For Loan" value={application?.reason_for_loan} />
            <InfoRow label="Status" value={application?.status} />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-1 rounded-md bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:text-gray-300 dark:text-gray-800"
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

export default ViewLoanApplicationDetailsModal;
