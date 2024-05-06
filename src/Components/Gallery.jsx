import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 5,
    
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
  };
  const data = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="w-full mb-16 ">
      <h1 className="text-3xl font-semibold text-center">Gallery</h1>
      <div className="mx-10 mt-12">
        <Slider {...settings}>
          {data.map((e, i) => (
            <div key={i} className="">
              <img
                className="w-60 h-40 flex object-cover"
                src="https://th.bing.com/th/id/OIP.6y7Sire01ftlMWQ5R5aiJwHaEK?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
          ))}
        </Slider>

        

      </div>
    </div>
  );
}

export default Gallery;
