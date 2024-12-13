import React from "react";
import './AboutUs.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="about-page dark:bg-slate-900 dark:text-white">
      <header>
        <Navbar />
      </header>

      <section className="about-section">
        <div className="about-container">
          <h2 className="text-3xl font-bold text-center mb-6">About BookStore</h2>
          <p className="mb-4 text-lg">
            Book Haven is more than just a bookstore; it's a destination for book lovers, readers, and curious minds. Founded with a passion for literature, we strive to provide a welcoming space where you can discover new stories, authors, and ideas.
          </p>
          
          <div className="about-content mb-6">
            <p className="text-lg"><strong>Our Mission:</strong> To make reading an enjoyable and enriching experience for everyone. Whether you're looking for the latest bestseller or a rare, vintage find, we aim to curate a collection of books that will ignite your imagination.</p>
            <p className="text-lg"><strong>Our Values:</strong> We believe in the power of books to transform lives. Our team is dedicated to offering personalized recommendations and exceptional customer service, creating a warm and inviting atmosphere for all visitors.</p>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-4">Our Story</h3>
          <p className="text-lg mb-6">
            Book Haven was founded in 2010 by a group of friends who shared a deep love for books. What started as a small independent bookstore has grown into a local hub for readers of all ages. From organizing community events to offering online book orders, we continue to strive toward building a stronger literary community.
          </p>

          <div className="extra-info mb-6">
            <h4 className="text-xl font-semibold">Our Team</h4>
            <p className="text-lg">Our team of passionate book enthusiasts works hard to provide you with an outstanding book-buying experience. We believe in sharing our love for literature, and we love helping customers find their next great read.</p>
          </div>

          <div className="locations mb-6">
            <h4 className="text-xl font-semibold">Our Locations</h4>
            <p className="text-lg">We have locations in several cities and are continuing to expand to bring our curated collection of books closer to you. Whether online or in-store, we're here to help you find your next favorite book.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
