import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Feedback.css";

const feedbacks = [
  {
    img: "https://s14.gifyu.com/images/bHito.jpg",
    name: "Sarah Khan",
    review: "This platform made group studying more efficient and fun!",
  },
  {
    img: "https://s14.gifyu.com/images/bHitD.jpg",
    name: "John Doe",
    review: "Very helpful for managing assignments with friends.",
  },
  {
    img: "https://s14.gifyu.com/images/bHit5.jpg",
    name: "Ayesha Siddique",
    review: "Loved the clean interface and easy assignment tracking.",
  },
  {
    img: "https://s14.gifyu.com/images/bHitr.jpg",
    name: "Tanvir Ahmed",
    review: "Great experience! Perfect for remote study sessions.",
  },
  {
    img: "https://s14.gifyu.com/images/bHitY.jpg",
    name: "Mehedi Hasan",
    review: "Peer grading helped us improve each other's learning.",
  },
];

const Feedback = () => {
  return (
    <div>
      {/* section title */}

      <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-center mb-3 lg:mb-6">
        Student Feedback
      </h2>

      {/* swiper carousel */}
      <div className="relative group">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {feedbacks.map((fb, index) => (
            <SwiperSlide key={index}>
              <div className="bg-base-200 p-4 rounded-md text-center flex flex-col items-center justify-center h-full">
                <img
                  src={fb.img}
                  alt={fb.name}
                  className="w-12 h-12 rounded-full object-cover mb-3"
                />
                <h4 className="font-semibold text-sm mb-2">{fb.name}</h4>
                <p className="text-xs italic px-2">“{fb.review}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
