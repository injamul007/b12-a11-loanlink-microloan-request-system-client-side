const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <title>LoanLink || Settings</title>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <p className="text-gray-600 mb-6 dark:text-gray-300">
        This section is under development and will be available in future
        updates.
      </p>

      <div className="bg-gray-200 border rounded-lg p-4 dark:bg-[#2b3138]">
        <h2 className="font-semibold mb-2 dark:text-gray-300">Planned Features</h2>
        <ul className="list-disc list-inside dark:text-gray-300 space-y-1">
          <li>Profile information update</li>
          <li>Password and security settings</li>
          <li>Email and notification preferences</li>
          <li>Account management options</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
