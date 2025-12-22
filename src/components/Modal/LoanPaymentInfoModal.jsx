import { Dialog, DialogPanel } from "@headlessui/react";

const LoanPaymentInfoModal = ({ isOpen, closeModal, paymentInfo }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-2xl bg-base-200 p-6 shadow-2xl dark:dark:bg-[#2b3138]">

          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-1">
            My Payment Info Details
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <InfoRow label="Loan ID" value={paymentInfo?.loan_id} />
            <InfoRow label="Loan Title" value={paymentInfo?.loan_title} />
            <InfoRow label="Loan Category" value={paymentInfo?.category} />
            <InfoRow label="Name" value={paymentInfo?.borrower_name} />
            <InfoRow label="Email" value={paymentInfo?.borrower_email} />
            <InfoRow label="Payment Status" value={paymentInfo?.application_fee_status} />
            <InfoRow label="Transaction ID:" value={paymentInfo?.transactionId} />
            <InfoRow label="Loan Status" value={paymentInfo?.status} />
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

export default LoanPaymentInfoModal;
