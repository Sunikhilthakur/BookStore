import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false); // Sending status
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState(""); // Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError(""); // Reset errors
    setSuccess(""); // Reset success messages

    try {
      // Send form data to the backend endpoint
      await axios.post("http://localhost:4001/user/send-email", formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form after success
    } catch (err) {
      console.error("Error:", err.message);
      setError("Failed to send the message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page dark:bg-slate-900 dark:text-white">
      <header>
        <Navbar />
      </header>

      <section className="contact-section">
        <div className="contact-container">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to chat, feel free to reach out.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />

            <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />

            <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-6"
            ></textarea>

            {sending ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 cursor-not-allowed"
                disabled
              >
                Sending...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            )}

            {/* Display success or error messages */}
            {error && (
              <div className="text-red-500 mt-4 text-center">{error}</div>
            )}

            {success && (
              <div className="text-green-500 mt-4 text-center">{success}</div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
