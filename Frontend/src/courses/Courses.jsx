import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import axios from "axios";
import CourseCard from "../components/Course";

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  
  // Filter books based on search query
  const filteredBooks = book.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">Search through our courses below:</p>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for courses"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-4 p-2 w-full max-w-sm rounded-lg border border-gray-300"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => <CourseCard key={item.id} item={item} />)
          ) : (
            <p className="text-center mt-6 text-gray-600">No results found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
