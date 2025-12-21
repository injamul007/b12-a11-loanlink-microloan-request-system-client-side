import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const TermsAndPrivacy = () => {
  return (
    <MyContainer>
      <title>LoanLink || Terms & Privacy</title>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This LoanLink Application is a demo project created for educational
          and learning purposes only. It does not provide real financial or
          lending services.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          By using this application, you agree that all information you provide
          is accurate and truthful to the best of your knowledge.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Submitting a loan application through this platform does not guarantee
          loan approval. All applications are subject to internal review within
          this project.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The project owner is not responsible for any financial loss,
          decisions, or outcomes resulting from the use of this application.
        </p>

        <p className="mb-8 text-gray-700 dark:text-gray-300">
          These terms may be updated or modified at any time without prior
          notice.
        </p>

        <hr className="my-8" />

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This project collects basic user information such as name, email,
          contact number, income details, and loan-related data for application
          processing purposes only.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The collected data is used solely to demonstrate features such as loan
          submission, status tracking, and user dashboards within this demo
          project.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          User information is stored securely and is not shared with any third
          parties.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This application may use cookies or local storage for authentication
          and session management.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Since this is an educational project, it does not comply with
          real-world financial or data protection regulations.
        </p>
      </div>
    </MyContainer>
  );
};

export default TermsAndPrivacy;
