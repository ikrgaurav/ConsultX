import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  // back-to-top visibility toggling
  const handleScroll = () => window.scrollY >= 800 ? setIsVisible(true) : setIsVisible(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // back-to-top functionality
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {
        <div
          className={`badge back_top ${isVisible ? 'visible' : ''}`}
          title="Back to top"
          onClick={handleClick}>
          <FaArrowAltCircleUp />
        </div>
      }
    </>
  );
};

export default BackTop;