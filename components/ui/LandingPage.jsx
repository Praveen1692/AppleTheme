"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation will trigger every time (not just once)
      mirror: true, // Whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // Defines which position triggers animation
    });

    // Refresh AOS on component mount and scroll
    AOS.refresh();

    // Optional: Add scroll event listener to refresh animations
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8">
      {/* Container for all sections */}
      <div className="w-full max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Section 1 */}
        <div
          data-aos="fade-up"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Welcome to Our Tech World
          </h1>
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Section 2 */}
        <div
          data-aos="fade-down"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Innovative Design
          </h1>
          <img
            src="https://static.toiimg.com/thumb/msid-114785267,width-1280,height-720,resizemode-4/114785267.jpg"
            alt="MacBook Display"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Section 3 */}
        <div
          data-aos="fade-right"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Powerful Performance
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Pro"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Section 4 */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Advanced Technology
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Pro"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Additional Sections with similar improvements */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Premium Experience
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div
          data-aos="zoom-out-down"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Cutting-Edge Features
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div
          data-aos="flip-up"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Modern Innovation
          </h1>
          <img
            src="https://static.toiimg.com/thumb/msid-114785267,width-1280,height-720,resizemode-4/114785267.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div
          data-aos="zoom-in"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Future Technology
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Comfortable Use
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1 tracking-tight">
            Comfortable Use second
          </h1>
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
            alt="MacBook Air"
            className="w-full md:w-1/2 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
