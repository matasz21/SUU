import React from "react";
import ProductPreview from "../../contents/productPreview/productPreview";
import WhyChoose from "../../contents/whyChoose/whyChoose";
import Reviews from "../../contents/reviews/reviews";
import Modal from "../../contents/modal/modal";
import BerryCalerndar from "../../contents/BerryCalendar/BerryCalerndar";
const Home = () => {
  return (
  <div>
    <BerryCalerndar />
    <ProductPreview />
    <Modal />
    <WhyChoose />
    <Reviews />
  </div>)
};

export default Home;
