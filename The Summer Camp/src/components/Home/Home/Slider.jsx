import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import './slider.css'
import SectionTitle from './../../Shared/SectionTitle';
const Slider = () => {
  return (
    <div className="mt-24">
      <SectionTitle heading='Enroll Quickly' subHeading='Banner secti'></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <img className="w-full h" src="https://rb.gy/fpzn2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://rb.gy/g180m" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://rb.gy/qnrws" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://rb.gy/w0gvs" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://rb.gy/u2ica" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://rb.gy/ui0vp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
