import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const id = localStorage.getItem("id");
      const response = await axios.post(
        "http://localhost:4001/user/change-password",
        { oldPassword, newPassword, id }
      );

      setSuccess(response.data.message);
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      setError(
        error.response?.data.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 px-4">
      <div className=" shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Change Password
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Old Password
            </label>
            <input
              type="password"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Change Password
          </button>
        </form>
        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}
        {success && (
          <p className="mt-4 text-center text-green-500 font-medium">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
