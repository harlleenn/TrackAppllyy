import React from "react";

export default function ResumeUploadModal({ isOpen, onClose, onFileUpload }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
        
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => onFileUpload(e.target.files[0])}
          className="mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
