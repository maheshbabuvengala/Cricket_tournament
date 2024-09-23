import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-700 mb-4">
              This is a simple modal content.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
