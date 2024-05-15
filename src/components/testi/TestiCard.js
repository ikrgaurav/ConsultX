import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const TestiCard = () => {

  const [testiData, setTestiData] = useState([]);

  const fetchedData = () => {
    fetch('https://testimonialapi.toolcarton.com/api')
      .then(resp => resp.json())
      .then(data => setTestiData(data));
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {
          testiData.map(item => {
            const { id, avatar, name, designation, message, rating } = item;
            return (
              <SwiperSlide key={id}>
                <div className="testi_card">
                  <div className="testi_details_wrap">
                    <figure className="testi_img">
                      <img src={avatar} alt="testi-img" />
                    </figure>
                    <div className="testi_info">
                      <h3>{name}</h3>
                      <span>{designation}</span>
                    </div>
                  </div>

                  <div className="testi_review_wrap">
                    <span className="quote_icon"><FaQuoteRight /></span>
                    <b className="ratings">
                      {
                        [...Array(Math.round(rating))].map((_, i) => <FaStar key={i} />)
                      }
                    </b>
                    <blockquote className="testi_msg">{message}</blockquote>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
};

export default TestiCard;